
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon';

const CaseStudyPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  const [activeSection, setActiveSection] = useState<string>('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const sections = [
    { id: 'challenge', title: 'The Challenge' },
    { id: 'process', title: 'The Process' },
    { id: 'solution', title: 'The Solution' },
    { id: 'impact', title: 'Impact & Insights' },
    { id: 'learnings', title: 'What I Learned' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      // FIX: Use instanceof HTMLElement as a more robust type guard. This resolves a TypeScript error where `section` was not being correctly identified as an Element.
      if (section instanceof HTMLElement) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [project]);
  
  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        const headerOffset = 80; // Adjust for sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center px-4 pt-24">
        <div>
          <h1 className="font-heading text-4xl font-bold">Project Not Found</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">The project you're looking for doesn't exist.</p>
          <Link to="/" className="mt-8 inline-block text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-24">
      <header className="mb-12 md:mb-16 max-w-4xl">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">{project.title}</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400">{project.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          {project.links.map(link => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-200/80 dark:bg-gray-800/50 text-gray-800 dark:text-white rounded-full border border-gray-300/80 dark:border-gray-700/50 hover:bg-gray-300/80 dark:hover:bg-gray-800/80 transition-all duration-300 group">
              {link.label}
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </header>
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        <main className="lg:col-span-9">
          <div className="grid sm:grid-cols-3 gap-8 mb-12 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg p-6 rounded-2xl border border-white/40 dark:border-white/20">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Company</h4>
              <p className="mt-1 text-lg font-medium text-gray-800 dark:text-gray-200">{project.company}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Domain</h4>
              <p className="mt-1 text-lg font-medium text-gray-800 dark:text-gray-200">{project.domain}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">My Role</h4>
              <p className="mt-1 text-lg font-medium text-gray-800 dark:text-gray-200">{project.role}</p>
            </div>
          </div>
        
          <div className="space-y-16">
            <section id="challenge" ref={el => sectionRefs.current['challenge'] = el} className="scroll-mt-24">
              <h2 className="font-heading text-3xl font-bold mb-4 pb-3 border-b border-gray-300 dark:border-gray-700">The Challenge</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{project.problem}</p>
            </section>

            <section id="process" ref={el => sectionRefs.current['process'] = el} className="scroll-mt-24">
              <h2 className="font-heading text-3xl font-bold mb-6 pb-3 border-b border-gray-300 dark:border-gray-700">The Process</h2>
              <div className="space-y-8">
                {project.process.map((step, index) => (
                  <div key={index}>
                    <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">{index + 1}. {step.title}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section id="solution" ref={el => sectionRefs.current['solution'] = el} className="scroll-mt-24">
              <h2 className="font-heading text-3xl font-bold mb-4 pb-3 border-b border-gray-300 dark:border-gray-700">The Solution</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{project.solution.description}</p>
              <div className="mt-8 space-y-8">
                {project.solution.images.map((img, index) => (
                  <img key={index} src={img} alt={`Solution screenshot ${index + 1}`} className="rounded-2xl shadow-lg w-full object-cover" />
                ))}
              </div>
            </section>

            <section id="impact" ref={el => sectionRefs.current['impact'] = el} className="scroll-mt-24">
              <h2 className="font-heading text-3xl font-bold mb-4 pb-3 border-b border-gray-300 dark:border-gray-700">Impact & Insights</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{project.impact}</p>
            </section>

            <section id="learnings" ref={el => sectionRefs.current['learnings'] = el} className="scroll-mt-24">
              <h2 className="font-heading text-3xl font-bold mb-4 pb-3 border-b border-gray-300 dark:border-gray-700">What I Learned</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{project.learnings}</p>
            </section>
          </div>
        </main>
        
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="sticky top-28">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">On this page</h3>
            <ul className="mt-4 space-y-2">
              {sections.map(section => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`} 
                    onClick={(e) => handleNavLinkClick(e, section.id)}
                    className={`block font-medium text-sm transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

      </div>
    </div>
  );
};

export default CaseStudyPage;
