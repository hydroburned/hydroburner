import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'flippingbook-design-system',
    title: 'FlippingBook Design System',
    tagline: 'From Chaos to Cohesion: Building a Scalable UI Framework.',
    thumbnailUrl: 'https://picsum.photos/seed/designsystem/800/600',
    company: 'FlippingBook',
    domain: 'B2B SaaS - Digital Publishing',
    problem:
      'The product suite suffered from inconsistent UI, slow development cycles, and a fragmented user experience across platforms. This "design debt" hindered innovation and frustrated both users and developers.',
    role: 'Lead Product Designer',
    team: ['Product Manager', '5 Frontend Engineers', '2 QA Engineers'],
    process: [
      {
        title: 'Audit & Discovery',
        description:
          'Conducted a comprehensive audit of all UI components across three major products. Facilitated workshops with stakeholders to align on goals, define principles, and create a shared vision for a unified user experience.',
      },
      {
        title: 'System Architecture & Design',
        description:
          'Designed and documented a full component library in Figma, from atomic elements (buttons, inputs) to complex organisms (data tables, navigation). Established clear guidelines for typography, color, spacing, and accessibility.',
      },
      {
        title: 'Implementation & Handoff',
        description:
          'Worked closely with frontend engineers to translate Figma components into a robust React library. Created a documentation site to serve as the single source of truth for designers and developers, streamlining adoption.',
      },
    ],
    solution: {
      description:
        'The result is a mature, scalable design system named "Helios." It provides a comprehensive library of reusable components, clear usage guidelines, and a streamlined workflow that connects design and development, accelerating the entire product lifecycle.',
      images: [
        'https://picsum.photos/seed/ds-solution1/1200/800',
        'https://picsum.photos/seed/ds-solution2/1200/800',
        'https://picsum.photos/seed/ds-solution3/1200/800',
      ],
    },
    impact:
      'Reduced design and development time for new features by an estimated 40%. Increased UI consistency across all products by 95%. Significantly improved designer-developer collaboration and onboarding speed for new team members.',
    learnings:
      'A design system is a living product, not a one-off project. Continuous feedback, maintenance, and governance are crucial for its long-term success. Gaining early buy-in from engineering is the single most important factor for adoption.',
    links: [
      { label: 'Live Product', url: '#' },
      { label: 'Figma Library', url: '#' },
    ],
    tags: ['Design System', 'B2B', 'SaaS'],
    impactMetrics: [
      { value: '40%', label: 'Reduction in Dev Time' },
      { value: '95%', label: 'UI Consistency Increase' },
    ],
  },
  {
    id: 'flippingbook-mobile-app',
    title: 'FlippingBook Mobile',
    tagline: 'Taking Digital Publications On-the-Go.',
    thumbnailUrl: 'https://picsum.photos/seed/mobileapp/800/600',
    company: 'FlippingBook',
    domain: 'B2C/B2B Mobile App - Content Consumption',
    problem:
      'Our customers needed a way to access, manage, and share their digital publications on mobile devices. The existing web experience was not optimized for smaller screens, leading to poor usability and engagement on the go.',
    role: 'Senior Product Designer',
    team: ['Product Manager', '2 iOS Developers', '2 Android Developers'],
    process: [
      {
        title: 'User Research',
        description:
          'Conducted user interviews with key customer segments to understand their mobile needs and pain points. Analyzed usage data from the web app to identify core features for the mobile MVP.',
      },
      {
        title: 'Prototyping & Testing',
        description:
          'Developed low-fidelity wireframes and high-fidelity interactive prototypes in Figma. Ran several rounds of remote usability testing to validate the core navigation, reading experience, and sharing workflows.',
      },
      {
        title: 'Visual Design & Handoff',
        description:
          'Designed a clean, intuitive, and native-feeling UI for both iOS and Android, ensuring it aligned with the newly established design system. Provided detailed specs and assets for a smooth developer handoff.',
      },
    ],
    solution: {
      description:
        'A native mobile application for iOS and Android that provides a seamless experience for reading, managing, and sharing FlippingBook publications. Key features include offline access, push notifications for updates, and a dedicated, optimized reading view.',
      images: [
        'https://picsum.photos/seed/ma-solution1/1200/800',
        'https://picsum.photos/seed/ma-solution2/1200/800',
      ],
    },
    impact:
      'Achieved a 4.7-star rating on the App Store within the first 6 months. Increased mobile user engagement by 300%. The app became a key selling point for enterprise clients who needed mobile access for their sales teams.',
    learnings:
      'Designing for mobile is not just about shrinking screens; it\'s about understanding context. Offline capabilities and performance were just as important as the UI. Platform-specific conventions (e.g., iOS vs. Android navigation) are key to creating an intuitive experience.',
    links: [
      { label: 'View on App Store', url: '#' },
      { label: 'View on Google Play', url: '#' },
    ],
    tags: ['Mobile App', 'B2C', 'Product Design'],
    impactMetrics: [
      { value: '4.7 ★', label: 'App Store Rating' },
      { value: '300%', label: 'Engagement Increase' },
    ],
  },
  {
    id: 'concept-project-flow',
    title: 'Flow - AI-Powered Project Management',
    tagline: 'A conceptual vision for intelligent workflow automation.',
    thumbnailUrl: 'https://picsum.photos/seed/concept/800/600',
    company: 'Personal Concept Project',
    domain: 'SaaS - Productivity & AI',
    problem:
      'Traditional project management tools are rigid and require significant manual overhead. Teams spend more time managing the tool than doing the actual work, leading to inefficiencies and "process fatigue".',
    role: 'Product Designer & Strategist',
    team: ['Solo Project'],
    process: [
      {
        title: 'Market Research',
        description:
          'Analyzed leading project management tools, identifying common pain points and market gaps. Formulated a hypothesis around using AI to automate task assignment, predict roadblocks, and dynamically adjust timelines.',
      },
      {
        title: 'Ideation & UI Exploration',
        description:
          'Sketched out core user flows and wireframes, focusing on a minimalist and "self-driving" user interface. The goal was to create a tool that feels like a helpful assistant rather than a demanding manager.',
      },
      {
        title: 'High-Fidelity Prototype',
        description:
          'Built a comprehensive interactive prototype in Figma to demonstrate the end-to-end experience, from project setup to AI-driven progress reports. Focused on creating fluid animations and a premium visual aesthetic.',
      },
    ],
    solution: {
      description:
        'Flow is a conceptual AI-native project management tool. It proactively organizes tasks, suggests resource allocation, and provides real-time risk analysis. The UI is centered around a conversational interface and dynamic timelines that adapt automatically to project changes.',
      images: [
        'https://picsum.photos/seed/cp-solution1/1200/800',
        'https://picsum.photos/seed/cp-solution2/1200/800',
      ],
    },
    impact:
      'This project serves as a forward-thinking piece in my portfolio, demonstrating strategic product thinking and advanced UI/UX skills. It explores how AI can fundamentally reshape productivity software, moving from passive tools to active partners.',
    learnings:
      'Designing for AI-driven products requires a shift in thinking. The focus moves from designing static workflows to designing systems that can learn and adapt. Communicating trust and transparency in AI recommendations is a major UX challenge.',
    links: [{ label: 'View on Behance', url: '#' }],
    tags: ['Concept', 'AI', 'Productivity'],
    impactMetrics: [
      { value: 'AI', label: 'Concept Exploration' },
      { value: 'UX', label: 'Forward-Thinking' },
    ],
  },
  {
    id: 'saas-analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    tagline: 'Empowering B2B customers with actionable data insights.',
    thumbnailUrl: 'https://picsum.photos/seed/analytics/800/600',
    company: 'FlippingBook',
    domain: 'B2B SaaS - Data Visualization',
    problem: 'Our enterprise customers lacked a clear, consolidated view of their publication performance. They needed a way to track reader engagement, analyze content effectiveness, and demonstrate ROI to their stakeholders.',
    role: 'Product Designer',
    team: ['Product Manager', 'Data Scientist', '3 Frontend Engineers', '1 Backend Engineer'],
    process: [
      {
        title: 'Stakeholder Interviews',
        description: 'Interviewed key account managers and enterprise clients to identify the most critical metrics and KPIs. Mapped out their current (often manual) reporting processes to understand existing pain points.',
      },
      {
        title: 'Data-Driven Design',
        description: 'Worked with a data scientist to define available data points and design a flexible, widget-based dashboard. Created multiple iterations of data visualizations (graphs, charts, heatmaps) in Figma to find the most intuitive representations.',
      },
      {
        title: 'Prototyping & Feedback',
        description: 'Built an interactive prototype with realistic data to test with a pilot group of customers. Gathered feedback to refine the layout, filter controls, and the overall narrative of the dashboard.',
      },
    ],
    solution: {
      description: 'A customizable analytics dashboard that provides customers with a comprehensive overview of their content performance. Users can track views, engagement times, link clicks, and audience demographics. The dashboard includes date-range filtering, customizable reports, and the ability to export data as CSV or PDF.',
      images: [
        'https://picsum.photos/seed/da-solution1/1200/800',
        'https://picsum.photos/seed/da-solution2/1200/800',
      ],
    },
    impact: 'Increased customer satisfaction for enterprise clients by 25%. The dashboard became a premium feature, contributing to a 15% increase in annual contract value for new sign-ups. Reduced support tickets related to data requests by 60%.',
    learnings: 'Data visualization is about storytelling. The biggest challenge was not just displaying data, but presenting it in a narrative that was easy for non-technical users to understand and act upon.',
    links: [{ label: 'View Live Dashboard', url: '#' }],
    tags: ['Data Viz', 'B2B', 'Dashboard'],
    impactMetrics: [
      { value: '25%', label: 'Satisfaction Increase' },
      { value: '60%', label: 'Support Tickets Reduced' },
    ],
  },
];