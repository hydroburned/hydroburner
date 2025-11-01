

import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { liveProjects } from '../data/live-projects';
import LiveProjectCard from '../components/LiveProjectCard';
import ProjectCard from '../components/ProjectCard';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import TelegramIcon from '../components/icons/TelegramIcon';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';
import Skills from '../components/Skills';
import FloatingGradient from '../components/FloatingGradient';
import DownloadIcon from '../components/icons/DownloadIcon';
import CurvedGallery from '../components/CurvedGallery';

const HomePage: React.FC = () => {

  const values = [
    { title: 'User-Centric at the Core', description: 'I bridge user needs and business goals to create products that are both loved and profitable.' },
    { title: 'Data-Informed, Not Data-Dictated', description: 'I use quantitative and qualitative data to guide decisions, but never at the expense of a bold vision.' },
    { title: 'Business-Oriented Design', description: 'Great design is great business. I focus on solutions that drive revenue, efficiency, and market differentiation.' },
    { title: 'Systems Thinker', description: 'I don\'t just design screens; I build scalable, maintainable systems that empower teams to build better, faster.' },
  ];

  const handleScrollClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (href) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <FloatingGradient />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-gray-400">
              Nikita Makarov
            </h1>
            <p className="font-heading mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Senior Product Designer
            </p>
            
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors duration-300">
              A natural problem solver, I turn B2B chaos into scalable, beautiful systems that empower users and accelerate business growth.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-start gap-4">
              <a href="#projects" onClick={handleScrollClick} className="inline-flex items-center gap-2 px-8 py-4 bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white rounded-full backdrop-blur-sm border border-black/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 group">
                View My Work
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="./cv.pdf" download className="inline-flex items-center gap-2 px-8 py-4 bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white rounded-full backdrop-blur-sm border border-black/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 group">
                Download CV
                <DownloadIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-10 flex items-center justify-start gap-6">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <LinkedInIcon className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300" aria-label="Telegram">
                <TelegramIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="md:col-span-1">
                <img src="https://picsum.photos/seed/portrait/500/500" alt="Nikita Makarov" className="rounded-full aspect-square object-cover mx-auto w-48 h-48 md:w-full md:h-auto" />
              </div>
              <div className="md:col-span-2">
                <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  With 8+ years in the trenches of SaaS, I've honed my craft shaping complex B2B/B2C products for web and mobile. My journey began in industrial design, which instilled in me a deep appreciation for form, function, and human-centered problem-solving.
                </p>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  When I'm not untangling user flows, you'll find me trying to catch waves—a passion that teaches me patience and respect for powerful systems. I thrive in remote, global teams and am currently planning a relocation to Brazil with my family, embracing new cultures and perspectives.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">Selected Projects</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300 mx-auto">
            A selection of projects where I've made a tangible impact.
          </p>
        </div>
        <CurvedGallery projects={projects} />
      </section>

      {/* Live Websites Section */}
      <section id="live-sites" className="py-20 md:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12 md:mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">Live Websites</h2>
                <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                    A few client projects I've designed and built from the ground up.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {liveProjects.slice(0, 4).map(project => (
                    <LiveProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Values Section */}
      <section id="values" className="relative py-20 md:py-32 scroll-mt-20">
        <FloatingGradient reverse={true} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-12 md:mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">My Design Philosophy</h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
              The core principles that guide my work and my approach to problem-solving.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {values.map((value) => (
              <div key={value.title} className="bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg p-6 rounded-2xl border border-white/40 dark:border-white/20 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1">
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{value.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 scroll-mt-20 pb-28 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-center mx-auto">
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight">Let's work together.</h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Have a project in mind? I'm always open to discussing new opportunities, collaborations, or just talking about design and surfing.
              </p>
              <a href="mailto:contact@example.com" className="mt-12 inline-block text-2xl md:text-3xl font-medium text-gray-900 dark:text-white border-b-2 border-dotted border-gray-400 dark:border-gray-500 hover:border-gray-900 dark:hover:border-white transition-colors duration-300">
                Get in touch
              </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;