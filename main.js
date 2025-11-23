(function () {
  'use strict';

  // --- GLOBALS FROM CDN ---
  const React = window.React;
  const ReactDOM = window.ReactDOM;
  const ReactRouterDOM = window.ReactRouterDOM;
  const { useState, useEffect, useRef, createContext, useContext, useCallback, StrictMode } = React;
  const { createRoot } = ReactDOM;
  const { HashRouter, Routes, Route, useLocation, Navigate, Link, useParams } = ReactRouterDOM;
  const e = React.createElement;

  // --- DATA ---
  const projects = [
    { id: 'flippingbook-design-system', title: 'FlippingBook Design System', tagline: 'From Chaos to Cohesion: Building a Scalable UI Framework.', thumbnailUrl: 'https://picsum.photos/seed/designsystem/800/600', company: 'FlippingBook', domain: 'B2B SaaS - Digital Publishing', problem: 'The product suite suffered from inconsistent UI, slow development cycles, and a fragmented user experience across platforms. This "design debt" hindered innovation and frustrated both users and developers.', role: 'Lead Product Designer', team: ['Product Manager', '5 Frontend Engineers', '2 QA Engineers'], process: [{ title: 'Audit & Discovery', description: 'Conducted a comprehensive audit of all UI components across three major products. Facilitated workshops with stakeholders to align on goals, define principles, and create a shared vision for a unified user experience.' }, { title: 'System Architecture & Design', description: 'Designed and documented a full component library in Figma, from atomic elements (buttons, inputs) to complex organisms (data tables, navigation). Established clear guidelines for typography, color, spacing, and accessibility.' }, { title: 'Implementation & Handoff', description: 'Worked closely with frontend engineers to translate Figma components into a robust React library. Created a documentation site to serve as the single source of truth for designers and developers, streamlining adoption.' }], solution: { description: 'The result is a mature, scalable design system named "Helios." It provides a comprehensive library of reusable components, clear usage guidelines, and a streamlined workflow that connects design and development, accelerating the entire product lifecycle.', images: ['https://picsum.photos/seed/ds-solution1/1200/800', 'https://picsum.photos/seed/ds-solution2/1200/800', 'https://picsum.photos/seed/ds-solution3/1200/800'] }, impact: 'Reduced design and development time for new features by an estimated 40%. Increased UI consistency across all products by 95%. Significantly improved designer-developer collaboration and onboarding speed for new team members.', learnings: 'A design system is a living product, not a one-off project. Continuous feedback, maintenance, and governance are crucial for its long-term success. Gaining early buy-in from engineering is the single most important factor for adoption.', links: [{ label: 'Live Product', url: '#' }, { label: 'Figma Library', url: '#' }], tags: ['Design System', 'B2B', 'SaaS'], impactMetrics: [{ value: '40%', label: 'Reduction in Dev Time' }, { value: '95%', label: 'UI Consistency Increase' }] },
    { id: 'flippingbook-mobile-app', title: 'FlippingBook Mobile', tagline: 'Taking Digital Publications On-the-Go.', thumbnailUrl: 'https://picsum.photos/seed/mobileapp/800/600', company: 'FlippingBook', domain: 'B2C/B2B Mobile App - Content Consumption', problem: 'Our customers needed a way to access, manage, and share their digital publications on mobile devices. The existing web experience was not optimized for smaller screens, leading to poor usability and engagement on the go.', role: 'Senior Product Designer', team: ['Product Manager', '2 iOS Developers', '2 Android Developers'], process: [{ title: 'User Research', description: 'Conducted user interviews with key customer segments to understand their mobile needs and pain points. Analyzed usage data from the web app to identify core features for the mobile MVP.' }, { title: 'Prototyping & Testing', description: 'Developed low-fidelity wireframes and high-fidelity interactive prototypes in Figma. Ran several rounds of remote usability testing to validate the core navigation, reading experience, and sharing workflows.' }, { title: 'Visual Design & Handoff', description: 'Designed a clean, intuitive, and native-feeling UI for both iOS and Android, ensuring it aligned with the newly established design system. Provided detailed specs and assets for a smooth developer handoff.' }], solution: { description: 'A native mobile application for iOS and Android that provides a seamless experience for reading, managing, and sharing FlippingBook publications. Key features include offline access, push notifications for updates, and a dedicated, optimized reading view.', images: ['https://picsum.photos/seed/ma-solution1/1200/800', 'https://picsum.photos/seed/ma-solution2/1200/800'] }, impact: 'Achieved a 4.7-star rating on the App Store within the first 6 months. Increased mobile user engagement by 300%. The app became a key selling point for enterprise clients who needed mobile access for their sales teams.', learnings: 'Designing for mobile is not just about shrinking screens; it\'s about understanding context. Offline capabilities and performance were just as important as the UI. Platform-specific conventions (e.g., iOS vs. Android navigation) are key to creating an intuitive experience.', links: [{ label: 'View on App Store', url: '#' }, { label: 'View on Google Play', url: '#' }], tags: ['Mobile App', 'B2C', 'Product Design'], impactMetrics: [{ value: '4.7 ★', label: 'App Store Rating' }, { value: '300%', label: 'Engagement Increase' }] },
    { id: 'concept-project-flow', title: 'Flow - AI-Powered Project Management', tagline: 'A conceptual vision for intelligent workflow automation.', thumbnailUrl: 'https://picsum.photos/seed/concept/800/600', company: 'Personal Concept Project', domain: 'SaaS - Productivity & AI', problem: 'Traditional project management tools are rigid and require significant manual overhead. Teams spend more time managing the tool than doing the actual work, leading to inefficiencies and "process fatigue".', role: 'Product Designer & Strategist', team: ['Solo Project'], process: [{ title: 'Market Research', description: 'Analyzed leading project management tools, identifying common pain points and market gaps. Formulated a hypothesis around using AI to automate task assignment, predict roadblocks, and dynamically adjust timelines.' }, { title: 'Ideation & UI Exploration', description: 'Sketched out core user flows and wireframes, focusing on a minimalist and "self-driving" user interface. The goal was to create a tool that feels like a helpful assistant rather than a demanding manager.' }, { title: 'High-Fidelity Prototype', description: 'Built a comprehensive interactive prototype in Figma to demonstrate the end-to-end experience, from project setup to AI-driven progress reports. Focused on creating fluid animations and a premium visual aesthetic.' }], solution: { description: 'Flow is a conceptual AI-native project management tool. It proactively organizes tasks, suggests resource allocation, and provides real-time risk analysis. The UI is centered around a conversational interface and dynamic timelines that adapt automatically to project changes.', images: ['https://picsum.photos/seed/cp-solution1/1200/800', 'https://picsum.photos/seed/cp-solution2/1200/800'] }, impact: 'This project serves as a forward-thinking piece in my portfolio, demonstrating strategic product thinking and advanced UI/UX skills. It explores how AI can fundamentally reshape productivity software, moving from passive tools to active partners.', learnings: 'Designing for AI-driven products requires a shift in thinking. The focus moves from designing static workflows to designing systems that can learn and adapt. Communicating trust and transparency in AI recommendations is a major UX challenge.', links: [{ label: 'View on Behance', url: '#' }], tags: ['Concept', 'AI', 'Productivity'], impactMetrics: [{ value: 'AI', label: 'Concept Exploration' }, { value: 'UX', label: 'Forward-Thinking' }] },
    { id: 'saas-analytics-dashboard', title: 'SaaS Analytics Dashboard', tagline: 'Empowering B2B customers with actionable data insights.', thumbnailUrl: 'https://picsum.photos/seed/analytics/800/600', company: 'FlippingBook', domain: 'B2B SaaS - Data Visualization', problem: 'Our enterprise customers lacked a clear, consolidated view of their publication performance. They needed a way to track reader engagement, analyze content effectiveness, and demonstrate ROI to their stakeholders.', role: 'Product Designer', team: ['Product Manager', 'Data Scientist', '3 Frontend Engineers', '1 Backend Engineer'], process: [{ title: 'Stakeholder Interviews', description: 'Interviewed key account managers and enterprise clients to identify the most critical metrics and KPIs. Mapped out their current (often manual) reporting processes to understand existing pain points.' }, { title: 'Data-Driven Design', description: 'Worked with a data scientist to define available data points and design a flexible, widget-based dashboard. Created multiple iterations of data visualizations (graphs, charts, heatmaps) in Figma to find the most intuitive representations.' }, { title: 'Prototyping & Feedback', description: 'Built an interactive prototype with realistic data to test with a pilot group of customers. Gathered feedback to refine the layout, filter controls, and the overall narrative of the dashboard.' }], solution: { description: 'A customizable analytics dashboard that provides customers with a comprehensive overview of their content performance. Users can track views, engagement times, link clicks, and audience demographics. The dashboard includes date-range filtering, customizable reports, and the ability to export data as CSV or PDF.', images: ['https://picsum.photos/seed/da-solution1/1200/800', 'https://picsum.photos/seed/da-solution2/1200/800'] }, impact: 'Increased customer satisfaction for enterprise clients by 25%. The dashboard became a premium feature, contributing to a 15% increase in annual contract value for new sign-ups. Reduced support tickets related to data requests by 60%.', learnings: 'Data visualization is about storytelling. The biggest challenge was not just displaying data, but presenting it in a narrative that was easy for non-technical users to understand and act upon.', links: [{ label: 'View Live Dashboard', url: '#' }], tags: ['Data Viz', 'B2B', 'Dashboard'], impactMetrics: [{ value: '25%', label: 'Satisfaction Increase' }, { value: '60%', label: 'Support Tickets Reduced' }] }
  ];
  const liveProjects = [
    { id: 'dom-design', title: 'Dom Design', description: 'A sleek portfolio website for a high-end interior design studio, showcasing residential and commercial projects with a focus on clean aesthetics.', imageUrl: 'https://picsum.photos/seed/interiordesign/800/600', liveUrl: 'https://xn--80ahameiqnc.xn--p1ai/', domain: 'Portfolio', platform: 'Tilda' },
    { id: 'sportskill', title: 'Sport Skill', description: 'Developed the brand identity, logo, and a comprehensive website for a multi-disciplinary children\'s sports club, featuring memberships, class schedules, and e-commerce for merchandise.', imageUrl: 'https://picsum.photos/seed/kidsport/800/600', liveUrl: 'https://sportskill.ru/', domain: 'Portfolio & Sport-Tech', platform: 'Tilda' },
    { id: 'litao', title: 'Litao Yoga', description: 'Created a complete digital presence for a yoga teacher, including a personal dashboard for course access and a fully integrated online payment system with time-based restrictions.', imageUrl: 'https://picsum.photos/seed/yogastudio/800/600', liveUrl: 'https://litao.ru/', domain: 'Yoga & E-commerce', platform: 'Tilda' },
    { id: 'idifashion', title: 'IDI Fashion', description: 'Designed the brand identity and a visually rich website for a major Russian fashion competition, handling large-scale photo/video content for numerous participants and projects.', imageUrl: 'https://picsum.photos/seed/fashioncontest/800/600', liveUrl: 'https://idifashion.ru/', domain: 'Web-Contest & Ed-Tech', platform: 'Tilda' }
  ];
  const skillCategories = [
      {
          name: 'Design',
          skills: [
              { name: 'Product Design', description: 'Creating intuitive, user-centered interfaces that solve complex problems.', level: 95, tools: ['Figma', 'Sketch', 'Adobe XD'] },
              { name: 'Design Systems', description: 'Building and maintaining scalable, consistent, and well-documented systems.', level: 90, tools: ['Figma Libraries', 'Storybook', 'Zeroheight'] },
              { name: 'Prototyping', description: 'Bringing ideas to life with interactive prototypes to test and validate concepts.', level: 85, tools: ['Figma', 'Principle', 'Framer'] },
              { name: 'Visual Design (UI)', description: 'Crafting pixel-perfect, aesthetically pleasing interfaces that reinforce brand identity.', level: 90, tools: ['Adobe Suite', 'Color Theory', 'Typography'] }
          ]
      },
      {
          name: 'Soft Skills',
          skills: [
              { name: 'Communication & Storytelling', description: 'Simplifying complexity for both technical and business stakeholders.', level: 95, tools: ['Presentations', 'Storytelling', 'Alignment'] },
              { name: 'Leadership & Mentoring', description: 'Onboarding junior designers and facilitating team knowledge sharing.', level: 90, tools: ['Team Building', 'Feedback', 'Mentoring'] },
              { name: 'Proactivity & Ownership', description: 'Taking initiative and driving solutions from ideation to launch.', level: 95, tools: ['Initiative', 'Problem Solving', 'Roadmapping'] },
              { name: 'Stakeholder Management', description: 'Aligning work with business goals, with empathy for all product aspects.', level: 90, tools: ['Negotiation', 'Empathy', 'Collaboration'] },
          ]
      },
      {
          name: 'Strategy & Research',
          skills: [
              { name: 'User Research', description: 'Conducting interviews and tests to uncover user needs and inform strategy.', level: 80, tools: ['Maze', 'UserTesting.com', 'Dovetail'] },
              { name: 'Product Strategy', description: 'Aligning user needs with business goals to define product roadmaps and features.', level: 85, tools: ['Miro', 'Notion', 'Jira'] },
              { name: 'Data Analysis', description: 'Interpreting analytics to understand user behavior and measure design impact.', level: 75, tools: ['Amplitude', 'Mixpanel', 'GA'] },
              { name: 'Competitive Analysis', description: 'Evaluating market landscape to identify opportunities and strategic advantages.', level: 80, tools: ['SWOT', 'Market Research', 'Reports'] }
          ]
      }
  ];

  // --- ICONS ---
  const ArrowRightIcon = (props) => e('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, ...props }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M14 5l7 7m0 0l-7 7m7-7H3" }));
  const CloseIcon = (props) => e('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, ...props }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }));
  const ExternalLinkIcon = (props) => e('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" }));
  const LinkedInIcon = (props) => e('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", ...props }, e('path', { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }));
  const MenuIcon = (props) => e('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, ...props }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }));
  const MoonIcon = (props) => e('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, ...props }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }));
  const SunIcon = (props) => e('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, ...props }, e('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }));
  const TelegramIcon = (props) => e('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", ...props }, e('path', { d: "M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-2.427 24-11.327zm-15.011 14.962l-3.989 3.538v-8.078l3.989 4.54z" }));

  // --- CONTEXT ---
  const ThemeContext = createContext(undefined);
  const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
      const isDarkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setTheme(isDarkMode ? 'dark' : 'light');
    }, []);
    const toggleTheme = () => {
      setTheme(prevTheme => {
        const newTheme = prevTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return newTheme;
      });
    };
    return e(ThemeContext.Provider, { value: { theme, toggleTheme } }, children);
  };
  const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };

  // --- COMMON COMPONENTS ---
  const FadeIn = ({ children, delay = 0, duration = 800, className = '', direction = 'up', fullWidth = false, offset = 40 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      });

      const current = domRef.current;
      if (current) observer.observe(current);

      return () => {
        if (current) observer.unobserve(current);
      };
    }, []);

    const getInitialStyle = () => {
      if (isVisible) return { opacity: 1, transform: 'translate(0, 0)' };
      switch(direction) {
          case 'up': return { opacity: 0, transform: `translateY(${offset}px)` };
          case 'down': return { opacity: 0, transform: `translateY(-${offset}px)` };
          case 'left': return { opacity: 0, transform: `translateX(-${offset}px)` };
          case 'right': return { opacity: 0, transform: `translateX(${offset}px)` };
          case 'none': return { opacity: 0, transform: 'none' };
          default: return { opacity: 0, transform: `translateY(${offset}px)` };
      }
    };

    return e('div', {
      ref: domRef,
      className: `transition-all ease-out will-change-[opacity,transform] ${className} ${fullWidth ? 'w-full' : ''}`,
      style: {
        ...getInitialStyle(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }
    }, children);
  };

  const FloatingGradient = ({ speed = 0.1, reverse = false }) => {
    const containerRef = useRef(null);
    const animationFrameId = useRef(null);
    useEffect(() => {
      const handleScrollOrResize = () => {
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = requestAnimationFrame(() => {
          if (containerRef.current?.parentElement) {
            const parent = containerRef.current.parentElement;
            const rect = parent.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            if (rect.bottom >= 0 && rect.top <= viewportHeight) {
              const elementCenterY = rect.top + rect.height / 2;
              const viewportCenterY = viewportHeight / 2;
              const distanceFromCenter = elementCenterY - viewportCenterY;
              const translateY = distanceFromCenter * -speed;
              containerRef.current.style.transform = `translateY(${translateY}px)`;
            }
          }
        });
      };
      handleScrollOrResize();
      window.addEventListener('scroll', handleScrollOrResize, { passive: true });
      window.addEventListener('resize', handleScrollOrResize, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScrollOrResize);
        window.removeEventListener('resize', handleScrollOrResize);
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      };
    }, [speed]);
    const blueClasses = `absolute w-2/3 h-2/3 bg-blue-500 rounded-full opacity-30 dark:opacity-20 gradient-blur animate-mix-A ${reverse ? '-top-1/4 -right-1/4' : '-top-1/4 -left-1/4'}`;
    const redClasses = `absolute w-2/3 h-2/3 bg-red-500 rounded-full opacity-30 dark:opacity-20 gradient-blur animate-mix-B ${reverse ? '-bottom-1/4 -left-1/4' : '-bottom-1/4 -right-1/4'}`;
    return e('div', { ref: containerRef, className: "absolute inset-0 w-full h-full will-change-transform" },
      e('div', { className: "relative w-full h-full" },
        e('div', { className: blueClasses }),
        e('div', { className: redClasses, style: { animationDelay: '3s' } })
      )
    );
  };

  const LiveProjectCard = ({ project }) => {
    return e('a', { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "group block overflow-hidden rounded-2xl border border-white/40 dark:border-white/20 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40" },
      e('div', { className: "relative overflow-hidden aspect-video" },
        e('img', { src: project.imageUrl, alt: project.title, className: "w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" }),
        e('div', { className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" },
          e('div', { className: "flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-black text-sm font-medium" },
            e(ExternalLinkIcon, { className: "w-4 h-4" }),
            e('span', null, "View Live Site")
          )
        )
      ),
      e('div', { className: "p-6" },
        e('h3', { className: "font-heading text-xl font-bold text-gray-900 dark:text-white" }, project.title),
        e('p', { className: "mt-2 text-base text-gray-600 dark:text-gray-400 h-16" }, project.description),
        e('div', { className: "mt-4 flex flex-wrap gap-2" },
          e('span', { className: "text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2.5 py-1 rounded-full font-medium" }, project.domain),
          e('span', { className: "text-xs bg-gray-200 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-full font-medium" }, `Built on ${project.platform}`)
        )
      )
    );
  };

  const ProjectCard = ({ project }) => {
    return e(Link, { to: `/project/${project.id}`, onDragStart: (e) => e.preventDefault(), className: "group block overflow-hidden rounded-2xl border border-white/40 dark:border-white/20 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg transition-all duration-300 hover:border-white/60 dark:hover:border-white/30 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40" },
      e('div', { className: "overflow-hidden aspect-video" }, e('img', { src: project.thumbnailUrl, alt: project.title, className: "w-full h-full object-cover", draggable: "false" })),
      e('div', { className: "p-6" },
        e('h3', { className: "font-heading text-xl font-bold text-gray-900 dark:text-white" }, project.title),
        e('p', { className: "mt-2 text-base text-gray-600 dark:text-gray-400" }, project.tagline),
        project.impactMetrics && project.impactMetrics.length > 0 && e('div', { className: "mt-6 pt-6 border-t border-gray-500/20 grid grid-cols-2 gap-4" },
          project.impactMetrics.map(metric => e('div', { key: metric.label },
            e('div', { className: "text-2xl font-bold font-heading text-gray-900 dark:text-white" }, metric.value),
            e('div', { className: "text-sm text-gray-600 dark:text-gray-400" }, metric.label)
          ))
        ),
        e('div', { className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400" },
          "View Case Study",
          e(ArrowRightIcon, { className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" })
        )
      )
    );
  };

  const CurvedGallery = ({ projects }) => {
    const scrollContainerRef = useRef(null);
    const [displayProjects, setDisplayProjects] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const isJumping = useRef(false);
    const isDragging = useRef(false);
    const hasBeenCentered = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const scrollEndTimeout = useRef(null);
    const animationFrameRef = useRef(null);
  
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
      const children = Array.from(scrollContainer.children);
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
            const scale = 1 - Math.abs(normalizedDistance) * 0.15;
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
  
            const firstItem = scrollContainer.querySelector('.gallery-item');
            if (firstItem) {
              const itemWidth = firstItem.offsetWidth;
              if (itemWidth > 0) {
                const initialScrollLeft = projects.length * itemWidth;
  
                setActiveIndex(0);
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
  
    const smoothScrollTo = useCallback((target, duration = 250) => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;
  
      const start = scrollContainer.scrollLeft;
      const change = target - start;
      let startTime = null;
  
      const animateScroll = (currentTime) => {
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
  
      const itemWidth = scrollContainer.querySelector('.gallery-item')?.offsetWidth || 0;
      if (itemWidth === 0) return;
  
      const closestItemIndex = Math.round(scrollContainer.scrollLeft / itemWidth);
      const targetScrollLeft = closestItemIndex * itemWidth;
  
      setActiveIndex(closestItemIndex % projects.length);
      smoothScrollTo(targetScrollLeft);
    }, [projects.length, smoothScrollTo]);
  
    const handleScroll = useCallback(() => {
      if (isJumping.current) {
        requestAnimationFrame(updateTransforms);
        return;
      }
  
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;
  
      const children = Array.from(scrollContainer.children);
      const itemWidth = children.find(c => c.classList.contains('gallery-item'))?.offsetWidth || 0;
      if (itemWidth === 0) return;
  
      const originalSetWidth = projects.length * itemWidth;
      const currentScroll = scrollContainer.scrollLeft;
  
      const jumpToMiddle = (newScrollLeft) => {
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
  
    const handleMouseDown = (e) => {
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
  
    const handleMouseMove = (e) => {
      if (!isDragging.current || !scrollContainerRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX.current) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };
  
    const handleDotClick = (index) => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;
      const itemWidth = scrollContainer.querySelector('.gallery-item')?.offsetWidth || 0;
      if (itemWidth === 0) return;
  
      const targetIndex = projects.length + index;
      const targetScrollLeft = targetIndex * itemWidth;
  
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
  
      smoothScrollTo(targetScrollLeft, 400);
      setActiveIndex(index);
    };
  
    if (projects.length === 0) {
      return e('div', { className: "text-center py-10 px-4" }, e('p', { className: "text-gray-600 dark:text-gray-400 transition-colors duration-300" }, "No projects found."));
    }
  
    return e('div', { className: "relative pb-10" },
      e('div', {
        ref: scrollContainerRef,
        onMouseDown: handleMouseDown,
        onMouseLeave: handleMouseLeaveOrUp,
        onMouseUp: handleMouseLeaveOrUp,
        onMouseMove: handleMouseMove,
        className: "flex overflow-x-auto pt-10 no-scrollbar",
        style: { cursor: 'grab' }
      },
        e('div', { className: "flex-shrink-0 w-[calc(50vw-47.5vw)] md:w-[calc(50vw-28rem)]" }),
        displayProjects.map((project, index) =>
          e('div', {
            key: `${project.id}-${index}`,
            className: "gallery-item flex-shrink-0 w-[95vw] md:w-[56rem] px-4",
            style: {
              willChange: 'transform, opacity',
              transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
            }
          }, e(ProjectCard, { project: project }))
        ),
        e('div', { className: "flex-shrink-0 w-[calc(50vw-47.5vw)] md:w-[calc(50vw-28rem)]" })
      ),
      e('div', { className: "absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3" },
        projects.map((_, index) =>
          e('button', {
            key: index,
            onClick: () => handleDotClick(index),
            'aria-label': `Go to project ${index + 1}`,
            className: `h-2.5 w-2.5 rounded-full transition-all duration-300 ease-in-out ${activeIndex === index ? 'scale-125 bg-blue-600 dark:bg-blue-400' : 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500'}`
          })
        )
      )
    );
  };

  const SkillCard = ({ skill }) => {
    const isTechnical = typeof skill.level !== 'undefined';
    return e('div', { className: "group bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg p-6 rounded-2xl border border-white/40 dark:border-white/20 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1 hover:scale-[1.03]" },
      isTechnical ? e(React.Fragment, null,
        e('div', { className: "flex justify-between items-center" },
          e('h4', { className: "font-heading text-lg font-bold text-gray-900 dark:text-white" }, skill.name),
          e('span', { className: "text-sm font-semibold text-blue-600 dark:text-blue-400" }, `${skill.level}%`)
        ),
        e('div', { className: "relative mt-2 h-1.5 w-full bg-gray-300 dark:bg-gray-700/50 rounded-full overflow-hidden" },
          e('div', { className: "absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-300 group-hover:shadow-[0_0_10px_theme(colors.blue.500)] shimmer-bar overflow-hidden", style: { width: `${skill.level}%` } })
        ),
        e('div', { className: "mt-4" },
          e('p', { className: "text-gray-600 dark:text-gray-400 text-sm mb-3" }, skill.description),
          skill.tools && skill.tools.length > 0 && e('div', { className: "flex flex-wrap gap-2" },
            skill.tools.map(tool => e('span', { key: tool, className: "text-xs bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full" }, tool))
          )
        )
      ) : e(React.Fragment, null,
          e('h4', { className: "font-heading text-lg font-bold text-gray-900 dark:text-white" }, skill.name),
          e('p', { className: "mt-2 text-gray-600 dark:text-gray-400 text-sm" }, skill.description)
      )
    );
  };

  const Skills = () => {
      return e('section', { id: "skills", className: "py-20 md:py-32 scroll-mt-20" },
          e('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
              e(FadeIn, { direction: "up" },
                e('div', { className: "text-left mb-12 md:mb-16" },
                    e('h2', { className: "font-heading text-4xl md:text-5xl font-bold tracking-tight" }, "My Expertise"),
                    e('p', { className: "mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400" }, "A combination of skills, tools, and methodologies I use to deliver high-quality products.")
                )
              ),
              e('div', { className: "grid md:grid-cols-3 gap-8 md:gap-12" },
                  skillCategories.map((category, index) => 
                    e(FadeIn, { key: category.name, delay: index * 150, direction: "up", className: "h-full" },
                      e('div', null,
                        e('h3', { className: "font-heading text-2xl font-bold mb-6 text-gray-800 dark:text-gray-300" }, category.name),
                        e('div', { className: "space-y-4" },
                            category.skills.map(skill => e(SkillCard, { key: skill.name, skill: skill }))
                        )
                      )
                    )
                  )
              )
          )
      );
  };

  const Footer = () => e('footer', { className: "absolute w-full bottom-0" },
    e('div', { className: "max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center" },
      e('p', { className: "text-sm text-gray-500 dark:text-gray-500" }, `© ${new Date().getFullYear()} Nikita Makarov. All rights reserved.`),
      e('p', { className: "text-sm text-gray-500 dark:text-gray-600 mt-1" }, "Currently remote, relocating to Brazil soon.")
    )
  );

  const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const desktopNavLinks = [
      { name: 'About', href: '#about' }, { name: 'Projects', href: '#projects' }, { name: 'Live Sites', href: '#live-sites' },
      { name: 'Skills', href: '#skills' }, { name: 'Values', href: '#values' }, { name: 'Contact', href: '#contact' }
    ];
    useEffect(() => {
      document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
      return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);
    const handleScrollClick = (event, href) => {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    };
    const handleDesktopNavClick = (event) => handleScrollClick(event, event.currentTarget.getAttribute('href'));
    const handleOverlayLinkClick = (event, href) => {
      event.preventDefault(); setIsMobileMenuOpen(false);
      setTimeout(() => {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      }, 300);
    };
    const handleLogoClick = (event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
    
    return e(React.Fragment, null,
      e('header', { className: "hidden md:flex fixed top-4 left-0 right-0 z-50 justify-center px-4" },
        e('div', { className: "w-auto flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-black/5" },
          e(Link, { to: "/", className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors" }, "NM."),
          isHomePage ? e('div', { className: "flex items-center gap-1 ml-16" },
            e('nav', { className: "flex items-baseline space-x-1" }, desktopNavLinks.map(link => e('a', { key: link.name, href: link.href, onClick: handleDesktopNavClick, className: "px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors" }, link.name))),
            e('button', { onClick: toggleTheme, className: "p-2 ml-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors", 'aria-label': "Toggle theme" }, theme === 'dark' ? e(SunIcon, { className: "w-5 h-5" }) : e(MoonIcon, { className: "w-5 h-5" }))
          ) : e(React.Fragment, null,
            e('div', { className: "flex flex-grow justify-center px-8" }, e(Link, { to: "/", className: "px-3 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors" }, "← All Projects")),
            e('div', null, e('button', { onClick: toggleTheme, className: "p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors", 'aria-label': "Toggle theme" }, theme === 'dark' ? e(SunIcon, { className: "w-5 h-5" }) : e(MoonIcon, { className: "w-5 h-5" })))
          )
        )
      ),
      isHomePage ? e(React.Fragment, null,
        e('nav', { className: "md:hidden fixed bottom-4 left-4 right-4 z-40" }, e('div', { className: "flex items-center justify-between h-16 w-full max-w-sm mx-auto px-6 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-black/5" }, e(Link, { to: "/", onClick: handleLogoClick, className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors" }, "NM."), e('button', { onClick: () => setIsMobileMenuOpen(true), className: "p-2 -mr-2 text-gray-900 dark:text-white", 'aria-label': "Open menu" }, e(MenuIcon, { className: "w-7 h-7" })))),
        e('div', { className: `fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}` },
          e('div', { className: "absolute inset-0 bg-white/80 dark:bg-black/70 backdrop-blur-xl" }),
          e('div', { className: "relative z-10 flex flex-col items-center justify-center h-full p-6" },
            e('button', { onClick: () => setIsMobileMenuOpen(false), className: "absolute top-6 right-4 p-2 text-gray-900 dark:text-white", 'aria-label': "Close menu" }, e(CloseIcon, { className: "w-8 h-8" })),
            e('nav', { className: "flex flex-col items-center text-center gap-8" }, desktopNavLinks.map(link => e('a', { key: link.name, href: link.href, onClick: (e) => handleOverlayLinkClick(e, link.href), className: "text-4xl font-heading font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors" }, link.name))),
            e('div', { className: "absolute bottom-10 flex flex-col items-center gap-4" }, e('button', { onClick: toggleTheme, className: "flex items-center gap-3 p-3 rounded-full text-gray-600 dark:text-gray-300 bg-black/5 dark:bg-white/10", 'aria-label': "Toggle theme" }, theme === 'dark' ? e(SunIcon, { className: "w-6 h-6" }) : e(MoonIcon, { className: "w-6 h-6" }), e('span', { className: "font-medium" }, `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`)))
          )
        )
      ) : e('header', { className: "md:hidden fixed top-0 left-0 right-0 z-50" }, e('div', { className: "flex items-center justify-between h-20 px-4 sm:px-6 bg-white/70 dark:bg-black/50 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50" }, e(Link, { to: "/", className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white" }, "NM."), e('div', { className: "flex items-center gap-4" }, e(Link, { to: "/", className: "px-3 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors" }, "← All Projects"), e('button', { onClick: toggleTheme, className: "p-2 rounded-full text-gray-600 dark:text-gray-300", 'aria-label': "Toggle theme" }, theme === 'dark' ? e(SunIcon, { className: "w-6 h-6" }) : e(MoonIcon, { className: "w-6 h-6" })))))
    );
  };

  // --- PAGES ---
  const HomePage = () => {
    const splineViewerRef = useRef(null);
    useEffect(() => {
      const splineViewer = splineViewerRef.current;
      if (!splineViewer) return;
      let observer = null;
      const hideLogo = (root) => {
        const logo = root.querySelector('.logo');
        if (logo) {
          logo.style.display = 'none';
          return true;
        }
        return false;
      };
      const handleLoad = () => {
        if (splineViewer.shadowRoot) {
          if (hideLogo(splineViewer.shadowRoot)) return;
          observer = new MutationObserver(() => {
            if (splineViewer.shadowRoot && hideLogo(splineViewer.shadowRoot)) {
              observer?.disconnect();
              observer = null;
            }
          });
          observer.observe(splineViewer.shadowRoot, { childList: true, subtree: true });
        }
      };
      splineViewer.addEventListener('load', handleLoad);
      return () => {
        splineViewer.removeEventListener('load', handleLoad);
        observer?.disconnect();
      };
    }, []);

    const values = [
      { title: 'User-Centric at the Core', description: 'I bridge user needs and business goals to create products that are both loved and profitable.' },
      { title: 'Data-Informed, Not Data-Dictated', description: 'I use quantitative and qualitative data to guide decisions, but never at the expense of a bold vision.' },
      { title: 'Business-Oriented Design', description: 'Great design is great business. I focus on solutions that drive revenue, efficiency, and market differentiation.' },
      { title: 'Systems Thinker', description: 'I don\'t just design screens; I build scalable, maintainable systems that empower teams to build better, faster.' },
    ];
    const handleScrollClick = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      if (href) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return e('div', { className: "overflow-x-hidden" },
      e('section', { className: "relative min-h-screen flex items-center overflow-hidden" },
        e(FloatingGradient, null),
        e('div', { className: "absolute top-0 right-0 w-full h-[40vh] md:h-[50vh] lg:w-[45%] lg:h-full z-0 pointer-events-none lg:pointer-events-auto flex items-center justify-center" },
          e('spline-viewer', {
            ref: splineViewerRef,
            url: "https://prod.spline.design/ID2MzOXuiKVfQk1w/scene.splinecode",
            className: "w-[70%] h-[70%]"
          })
        ),
        e('div', { className: "relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center" },
          e('div', { className: "max-w-3xl pt-[42vh] md:pt-[52vh] lg:pt-0" },
            e(FadeIn, { delay: 100, direction: "up" }, e('h1', { className: "font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-gray-400" }, "Hi it's Nikita")),
            e(FadeIn, { delay: 200, direction: "up" }, e('p', { className: "font-heading mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300" }, "Product Designer")),
            e(FadeIn, { delay: 300, direction: "up" }, e('p', { className: "mt-6 max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors duration-300" }, "A natural problem solver, I turn B2B goals into scalable, beautiful systems that empower users and accelerate business growth.")),
            e(FadeIn, { delay: 400, direction: "up" }, e('div', { className: "mt-12 flex flex-wrap items-center justify-start gap-4" },
              e('a', { href: "#projects", onClick: handleScrollClick, className: "inline-flex items-center gap-2 px-8 py-4 bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white rounded-full backdrop-blur-sm border border-black/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 group" }, "View My Work", e(ArrowRightIcon, { className: "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" }))
            )),
            e(FadeIn, { delay: 500, direction: "up" }, e('div', { className: "mt-10 flex items-center justify-start gap-6" },
              e('a', { href: "#", className: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300", 'aria-label': "LinkedIn" }, e(LinkedInIcon, { className: "w-7 h-7" })),
              e('a', { href: "#", className: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300", 'aria-label': "Telegram" }, e(TelegramIcon, { className: "w-7 h-7" }))
            ))
          )
        )
      ),
      e('section', { id: "about", className: "py-20 md:py-32 scroll-mt-20" }, e('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, e('div', { className: "max-w-5xl grid md:grid-cols-3 gap-8 md:gap-12 items-center" },
        e('div', { className: "md:col-span-1" }, e(FadeIn, { direction: "right", delay: 100 }, e('img', { src: "https://picsum.photos/seed/portrait/500/500", alt: "Nikita Makarov", className: "rounded-full aspect-square object-cover mx-auto w-48 h-48 md:w-full md:h-auto shadow-2xl dark:shadow-blue-900/20" }))),
        e('div', { className: "md:col-span-2" }, e(FadeIn, { direction: "left", delay: 200 },
          e('h2', { className: "font-heading text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white" }, "About Me"),
          e('p', { className: "mt-6 text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 leading-relaxed" }, "With 8+ years in the trenches of SaaS, I've honed my craft shaping complex B2B/B2C products for web and mobile. My journey began in industrial design, which instilled in me a deep appreciation for form, function, and human-centered problem-solving."),
          e('p', { className: "mt-4 text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 leading-relaxed" }, "When I'm not untangling user flows, you'll find me trying to catch waves—a passion that teaches me patience and respect for powerful systems. I thrive in remote, global teams and am currently planning a relocation to Brazil with my family, embracing new cultures and perspectives.")
        ))
      ))),
      e('section', { id: "projects", className: "py-20 md:py-32 scroll-mt-20" },
        e('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16" }, e(FadeIn, { direction: "up" }, e('h2', { className: "font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white" }, "Selected Projects"), e('p', { className: "mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300 mx-auto" }, "A selection of projects where I've made a tangible impact."))),
        e(FadeIn, { delay: 200, direction: "up", fullWidth: true }, e(CurvedGallery, { projects: projects }))
      ),
      e('section', { id: "live-sites", className: "py-20 md:py-32 scroll-mt-20 bg-gray-50/50 dark:bg-white/5" },
        e('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
          e('div', { className: "text-left mb-12 md:mb-16" }, e(FadeIn, { direction: "up" }, e('h2', { className: "font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white" }, "Live Websites"), e('p', { className: "mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400" }, "A few client projects I've designed and built from the ground up."))),
          e('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-8" }, liveProjects.slice(0, 4).map((project, index) => e(FadeIn, { key: project.id, delay: index * 150, className: "h-full", direction: "up" }, e(LiveProjectCard, { project: project }))))
        )
      ),
      e(Skills, null),
      e('section', { id: "values", className: "relative py-20 md:py-32 scroll-mt-20 overflow-visible" }, e(FloatingGradient, { reverse: true }), e('div', { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        e('div', { className: "max-w-3xl text-left mb-12 md:mb-16" }, e(FadeIn, { direction: "right" }, e('h2', { className: "font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white" }, "My Design Philosophy"), e('p', { className: "mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300" }, "The core principles that guide my work and my approach to problem-solving."))),
        e('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" }, values.map((value, index) => e(FadeIn, { key: value.title, delay: index * 150, className: "h-full", direction: "up" }, e('div', { className: "bg-white/40 dark:bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl border border-white/50 dark:border-white/10 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/60 dark:hover:bg-gray-800/80 hover:-translate-y-1 shadow-lg dark:shadow-none h-full" }, e('h3', { className: "font-heading text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 mb-3" }, value.title), e('p', { className: "text-gray-700 dark:text-gray-300 transition-colors duration-300 leading-relaxed" }, value.description)))))
      )),
      e('section', { id: "contact", className: "relative z-10 py-20 md:py-32 scroll-mt-20 pb-28 md:pb-20 overflow-visible" }, e('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, e('div', { className: "max-w-3xl text-center mx-auto" }, e(FadeIn, { delay: 100, direction: "up" },
        e('h2', { className: "font-heading text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white" }, "Let's work together."),
        e('p', { className: "mt-6 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300" }, "Have a project in mind? I'm always open to discussing new opportunities, collaborations, or just talking about design and surfing."),
        e('div', { className: "mt-12" }, e('a', { href: "mailto:contact@example.com", className: "inline-block text-2xl md:text-3xl font-medium text-gray-900 dark:text-white border-b-2 border-dotted border-gray-400 dark:border-gray-500 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 pb-1" }, "Get in touch"))
      ))))
    );
  };
  const CaseStudyPage = () => {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);
    const [activeSection, setActiveSection] = useState('');
    const sectionRefs = useRef({});
    const sections = [
      { id: 'challenge', title: 'The Challenge' }, { id: 'process', title: 'The Process' }, { id: 'solution', title: 'The Solution' },
      { id: 'impact', title: 'Impact & Insights' }, { id: 'learnings', title: 'What I Learned' }
    ];
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
      }, { rootMargin: '-30% 0px -70% 0px' });
      Object.values(sectionRefs.current).forEach(section => { if (section instanceof HTMLElement) observer.observe(section); });
      return () => observer.disconnect();
    }, [project]);
    const handleNavLinkClick = (event, sectionId) => {
      event.preventDefault();
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    };
    if (!project) return e('div', { className: "flex items-center justify-center min-h-screen text-center px-4 pt-24" }, e('div', null, e('h1', { className: "font-heading text-4xl font-bold" }, "Project Not Found"), e('p', { className: "mt-4 text-gray-600 dark:text-gray-400" }, "The project you're looking for doesn't exist."), e(Link, { to: "/", className: "mt-8 inline-block text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300" }, "← Back to Home")));
    return e('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-24" },
      e('header', { className: "mb-12 md:mb-16 max-w-4xl" },
        e('h1', { className: "font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white" }, project.title),
        e('p', { className: "mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400" }, project.tagline),
        e('div', { className: "mt-8 flex flex-wrap gap-4" }, project.links.map(link => e('a', { key: link.label, href: link.url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-5 py-2.5 bg-gray-200/80 dark:bg-gray-800/50 text-gray-800 dark:text-white rounded-full border border-gray-300/80 dark:border-gray-700/50 hover:bg-gray-300/80 dark:hover:bg-gray-800/80 transition-all duration-300 group" }, link.label, e(ExternalLinkIcon, { className: "w-4 h-4" }))))
      ),
      e('div', { className: "lg:grid lg:grid-cols-12 lg:gap-16" },
        e('main', { className: "lg:col-span-9" },
          e('div', { className: "grid sm:grid-cols-3 gap-8 mb-12 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg p-6 rounded-2xl border border-white/40 dark:border-white/20" },
            e('div', null, e('h4', { className: "text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "Company"), e('p', { className: "mt-1 text-lg font-medium text-gray-800 dark:text-gray-200" }, project.company)),
            e('div', null, e('h4', { className: "text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "Domain"), e('p', { className: "mt-1 text-lg font-medium text-gray-800 dark:text-gray-200" }, project.domain)),
            e('div', null, e('h4', { className: "text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "My Role"), e('p', { className: "mt-1 text-lg font-medium text-gray-800 dark:text-gray-200" }, project.role))
          ),
          e('div', { className: "space-y-16" },
            e('section', { id: "challenge", ref: el => sectionRefs.current['challenge'] = el, className: "scroll-mt-24" }, e('h2', { className: "font-heading text-3xl font-bold mb-4 pb-3 border-b border-gray-300 dark:border-gray-700" }, "The Challenge"), e('p', { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed" }, project.problem)),
            e('section', { id: "process", ref: el => sectionRefs.current['process'] = el, className: "scroll-mt-24" }, e('h2', { className: "font-heading text-3xl font-bold mb-6 pb-3 border-b border-gray-300 dark:border-gray-700" }, "The Process"), e('div', { className: "space-y-8" }, project.process.map((step, index) => e('div', { key: index }, e('h3', { className: "font-heading text-xl font-bold text-gray-900 dark:text-white mb-2" }, `${index + 1}. ${step.title}`), e('p', { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed" }, step.description))))),
            e('section', { id: "solution", ref: el => sectionRefs.current['solution'] = el, className: "scroll-mt-24" }, e('h2', { className: "font-heading text-3xl font-bold mb-4 pb-3 border-b border-gray-300 dark:border-gray-700" }, "The Solution"), e('p', { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed" }, project.solution.description), e('div', { className: "mt-8 space-y-8" }, project.solution.images.map((img, index) => e('img', { key: index, src: img, alt: `Solution screenshot ${index + 1}`, className: "rounded-2xl shadow-lg w-full object-cover" })))),
            e('section', { id: "impact", ref: el => sectionRefs.current['impact'] = el, className: "scroll-mt-24" }, e('h2', { className: "font-heading text-3xl font-bold mb-4 pb-3 border-b border-gray-300 dark:border-gray-700" }, "Impact & Insights"), e('p', { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed" }, project.impact)),
            e('section', { id: "learnings", ref: el => sectionRefs.current['learnings'] = el, className: "scroll-mt-24" }, e('h2', { className: "font-heading text-3xl font-bold mb-4 pb-3 border-b border-gray-300 dark:border-gray-700" }, "What I Learned"), e('p', { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed" }, project.learnings))
          )
        ),
        e('aside', { className: "hidden lg:block lg:col-span-3" }, e('nav', { className: "sticky top-28" },
          e('h3', { className: "font-heading text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" }, "On this page"),
          e('ul', { className: "mt-4 space-y-2" }, sections.map(section => e('li', { key: section.id }, e('a', { href: `#${section.id}`, onClick: (e) => handleNavLinkClick(e, section.id), className: `block font-medium text-sm transition-colors duration-200 ${activeSection === section.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}` }, section.title))))
        ))
      )
    );
  };

  // --- APP ---
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
  };
  const App = () => {
    return e(HashRouter, null,
      e(ScrollToTop, null),
      e('div', { className: "relative min-h-screen flex flex-col" },
        e(Header, null),
        e('main', { className: "flex-grow pb-32" },
          e(Routes, null,
            e(Route, { path: "/", element: e(HomePage, null) }),
            e(Route, { path: "/project/:projectId", element: e(CaseStudyPage, null) }),
            e(Route, { path: "*", element: e(Navigate, { to: "/", replace: true }) })
          )
        ),
        e(Footer, null)
      )
    );
  };

  // --- RENDER ---
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error("Could not find root element to mount to");
  const root = createRoot(rootElement);
  root.render(
    e(StrictMode, null,
      e(ThemeProvider, null,
        e(App, null)
      )
    )
  );

})();