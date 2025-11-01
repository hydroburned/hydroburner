import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface CurvedGalleryProps {
    projects: Project[];
}

const CurvedGallery: React.FC<CurvedGalleryProps> = ({ projects }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [displayProjects, setDisplayProjects] = useState<Project[]>([]);
    
    const isJumping = useRef(false);
    const isDragging = useRef(false);
    const hasBeenCentered = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const scrollEndTimeout = useRef<number | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        if (projects.length > 0) {
            setDisplayProjects([...projects, ...projects, ...projects]);
        } else {
            setDisplayProjects([]);
        }
    }, [projects]);
    
    const updateTransforms = useCallback(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const viewportCenterX = scrollContainer.getBoundingClientRect().left + scrollContainer.offsetWidth / 2;
        const children = Array.from(scrollContainer.children) as HTMLElement[];
        const scrollContainerWidth = scrollContainer.offsetWidth;

        children.forEach(child => {
            if (child.classList.contains('gallery-item')) {
                const rect = child.getBoundingClientRect();
                const cardCenterX = rect.left + rect.width / 2;
                const distanceFromCenter = cardCenterX - viewportCenterX;
                const deadZone = 10;

                let opacity = 1;
                let transform = 'perspective(1000px) rotateY(0deg) scale(1)';
                let zIndex = 20;

                if (Math.abs(distanceFromCenter) > deadZone) {
                    const normalizedDistance = distanceFromCenter / (scrollContainerWidth / 2);
                    const rotateY = normalizedDistance * -25;
                    const scale = 1 - Math.abs(normalizedDistance) * 0.1;
                    zIndex = 10 - Math.abs(Math.round(normalizedDistance * 10));
                    opacity = Math.max(0.4, 1 - Math.abs(normalizedDistance) * 0.6);

                    transform = `perspective(1000px) rotateY(${rotateY}deg) scale(${scale})`;
                }

                child.style.opacity = `${opacity}`;
                child.style.transform = transform;
                child.style.zIndex = `${zIndex}`;
            }
        });
    }, []);
    
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer || hasBeenCentered.current || displayProjects.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    hasBeenCentered.current = true;
                    
                    const firstItem = scrollContainer.querySelector('.gallery-item') as HTMLElement;
                    if (firstItem) {
                        const itemWidth = firstItem.offsetWidth;
                        if (itemWidth > 0) {
                            const initialScrollLeft = projects.length * itemWidth;

                            isJumping.current = true;
                            scrollContainer.scrollLeft = initialScrollLeft;

                            requestAnimationFrame(() => {
                                updateTransforms();
                                requestAnimationFrame(() => {
                                    isJumping.current = false;
                                });
                            });
                        }
                    }
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(scrollContainer);

        return () => {
            observer.disconnect();
        };
    }, [displayProjects, projects.length, updateTransforms]);

    const smoothScrollTo = useCallback((target: number, duration: number = 150) => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const start = scrollContainer.scrollLeft;
        const change = target - start;
        let startTime: number | null = null;

        const animateScroll = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            
            const t = Math.min(1, elapsed / duration);
            const easedT = t * (2 - t);

            scrollContainer.scrollLeft = start + change * easedT;

            if (elapsed < duration) {
                animationFrameRef.current = requestAnimationFrame(animateScroll);
            } else {
                scrollContainer.scrollLeft = target;
                updateTransforms();
            }
        };

        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = requestAnimationFrame(animateScroll);
    }, [updateTransforms]);
    
    const snapToCenter = useCallback(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer || projects.length <= 1) return;
        
        const itemWidth = (scrollContainer.querySelector('.gallery-item') as HTMLElement)?.offsetWidth || 0;
        if(itemWidth === 0) return;
        
        const closestItemIndex = Math.round(scrollContainer.scrollLeft / itemWidth);
        const targetScrollLeft = closestItemIndex * itemWidth;

        smoothScrollTo(targetScrollLeft);
    }, [projects.length, smoothScrollTo]);

    const handleScroll = useCallback(() => {
        if (isJumping.current) {
            requestAnimationFrame(updateTransforms);
            return;
        }

        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const children = Array.from(scrollContainer.children) as HTMLElement[];
        const itemWidth = children.find(c => c.classList.contains('gallery-item'))?.offsetWidth || 0;
        if (itemWidth === 0) return;

        const originalSetWidth = projects.length * itemWidth;
        const currentScroll = scrollContainer.scrollLeft;

        const jumpToMiddle = (newScrollLeft: number) => {
            isJumping.current = true;
            children.forEach(child => {
                if (child.classList.contains('gallery-item')) child.classList.add('no-transition');
            });
            scrollContainer.scrollLeft = newScrollLeft;
            
            requestAnimationFrame(() => {
                updateTransforms();
                requestAnimationFrame(() => {
                    children.forEach(child => {
                         if (child.classList.contains('gallery-item')) child.classList.remove('no-transition');
                    });
                    isJumping.current = false;
                });
            });
        };

        if (currentScroll >= originalSetWidth * 2 - (itemWidth / 2)) {
            jumpToMiddle(currentScroll - originalSetWidth);
            return;
        }
        
        if (currentScroll <= originalSetWidth - (itemWidth / 2)) {
            jumpToMiddle(currentScroll + originalSetWidth);
            return;
        }

        requestAnimationFrame(updateTransforms);

        if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
        scrollEndTimeout.current = window.setTimeout(() => {
            if (!isDragging.current) {
                 snapToCenter();
            }
        }, 150);

    }, [projects.length, updateTransforms, snapToCenter]);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
            if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [handleScroll]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        isDragging.current = true;
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.style.cursor = 'grabbing';
        scrollContainerRef.current.style.userSelect = 'none';
    };

    const handleMouseLeaveOrUp = () => {
        if (!scrollContainerRef.current || !isDragging.current) return;
        isDragging.current = false;
        scrollContainerRef.current.style.cursor = 'grab';
        scrollContainerRef.current.style.userSelect = 'auto';
        snapToCenter();
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    if (projects.length === 0) {
        return (
            <div className="text-center py-10 px-4">
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">No projects found.</p>
            </div>
        )
    }

    return (
        <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto py-10"
            style={{ 
                cursor: 'grab',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}
        >
            <style>{`
                .flex.overflow-x-auto::-webkit-scrollbar {
                    display: none;
                }
                .gallery-item.no-transition {
                    transition: none !important;
                }
            `}</style>
            
            <div className="flex-shrink-0 w-[calc(50vw-45vw)] md:w-[calc(50vw-24rem)]"></div>

            {displayProjects.map((project, index) => (
                <div 
                    key={`${project.id}-${index}`} 
                    className="gallery-item flex-shrink-0 w-[90vw] md:w-[48rem] px-4"
                    style={{ 
                        willChange: 'transform, opacity',
                        transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    }}
                >
                    <ProjectCard project={project} />
                </div>
            ))}

            <div className="flex-shrink-0 w-[calc(50vw-45vw)] md:w-[calc(50vw-24rem)]"></div>
        </div>
    );
};

export default CurvedGallery;