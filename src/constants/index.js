import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  nextjs,
  git,
  figma,
  docker,
  IC_IITP,
  Asaan,
  Mathworks,
  salesforce,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Nextjs",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "Typescript",
    icon: backend,
  },
  {
    title: "Python",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Incubation Center IIT Patna",
    icon: IC_IITP,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Designed intuitive and user-friendly interfaces using Figma,focusing on user experience and modern design principles.",
      "Developed responsive and dynamic websites using Next.js and CSS, ensuring high performance and cross-browser compatibility.",
      "Utilized Google Analytics to track and analyze user data, and employed Microsoft Clarity to collect session recordings.",
      "Coded Arduino in C and C++ for the automation of medical equipment, contributing to efficient surgical procedures.",
    ],
  },
  {
    title: "Salesforce developer Intern",
    company_name: "Salesforce",
    icon: salesforce,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Salesforce Fundamentals, Organizational Setup, Relationship & Process Automation, Types of Flows & Security, Apex, Testing & Debugging, VS Code Setup & CLI Setup, Lightning Web Components (LWC) & API.",
      "Achieved Super Badges: Apex Specialist, Process Automation Specialist, Developer Super Set.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "MathWorks",
    icon: Mathworks,
    iconBg: "#ffffff",
    date: "May 2023 - Sept 2023",
    points: [
      "Leveraged MATLAB for the identification of stars in provided images and the calculation of distances between stars.",
      "Applied spectral analysis and filtering techniques to pre-process,analyze, and extract valuable information from signal data.",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company_name: "Asaan Contracts Private Limited",
    icon: Asaan,
    iconBg: "#ffff",
    date: "Feb 2023 - March 2023",
    points: [
      "Contributed to the development of an internal task tracking and management application.",
      "Implemented the user interface using Figma.",
      "Managed the deployment of the application on Netlify",
      "Engaged in daily stand-up meetings and sprint planning sessions, gaining hands-on experience in agile development methodologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "A Startup Website",
    description:
      "Built a responsive website for Elevatronix Pvt. Ltd. using Next.js and CSS, featuring a user-friendly design and seamless backend integration. The project included deployment on Netlify, domain setup, and the implementation of Google Analytics and Microsoft Clarity for performance tracking.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Elevatronix-IITP/website",
  },
  {
    name: "Hotstar Clone",
    description:
      "Developed a clone of Hotstar using React and Firebase, featuring dynamic UI, real-time data integration, and Google authentication for user login. The project replicated core functionalities like browsing content and user authentication, showcasing proficiency in modern web development tools..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/adityagecv/disney-plus-clone",
  },
  {
    name: "Movie Recommender",
    description:
      "Built an interactive Movie Recommender WebApp using Python and Streamlit. Integrated TMDb API to fetch movie posters and implemented a similarity-based algorithm to suggest movies. Designed a dynamic interface to display personalized recommendations with titles and posters.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
