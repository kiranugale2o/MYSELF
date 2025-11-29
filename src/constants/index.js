import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  syncsense,
  tesla,
  shopify,
  upgrad,
  carrent,
  jobit,
  tripguide,
  wanderer_social,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id:"home",
    title:"Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "Project",
  },
  {
    id: "contacts",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "App Developer",
    icon: backend,
  },
  {
    title: "Mentor",
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
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
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
];

const Social = [
  {
    handle:
      "kiranugale2o",
    handle_link:"https://github.com/kiranugale2o",
    name: "Github",
  
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",
  },
  {
    handle:
      "Kiran Ugale",
    handle_link:"https://www.linkedin.com/in/kiranpatilugale/",
    name: "LinkedIn",
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",  },
  {
    handle:
      "_kiranpatil_45",
    handle_link:"https://www.instagram.com/_kiranpatil_45/",
    name: "Instagram",
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",  },
];

const projects = [
  
    {
    name: "Job Portal",
    description:" This project is a feature-rich Job Portal application built using Next.js. The application includes a variety of functionalities such as AI integration to assist users in job searches, user authentication, email verification, and more. It’s designed to cater to both job seekers and recruiters, providing an interactive and secure platform for job postings and applications."
    ,  
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
       {
        name: "ClerkJS",
        color: "blue-text-gradient",
      },
        ],
    image: wanderer_social,
    source_code_link: "https://github.com/kiranugale2o/jobportal",
    live_link:"https://jobportal-beta-indol.vercel.app/",
  },

  {
    name: "My Imager",
    description:
    "MyImager is a powerful image management platform built with Next.js for the frontend and Express.js for the backend, integrating Firebase for storage and various other libraries to provide enhanced features like authentication, charts, and more.", 
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
       {
        name: "ClerkJS",
        color: "blue-text-gradient",
      },
        ],
    image: jobit,
    source_code_link: "https://github.com/kiranugale2o/my_imager_front",
    live_link:"https://myimager.cloud",
  },
    {
    name: "College Event Management",
    description:"Welcome to the College Event Management Website! This application is designed to help manage and organize college events efficiently. Built with Next.js, it provides a user-friendly interface for students and event organizers.    "
 ,         tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kiranugale2o/college_Event_management",
    live_link:"https://event-wine.vercel.app/",
  },
  // {
  //   name: "Drum kit",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "JQuery",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
      
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/omkar2711/Drum_Kit",
  //   live_link:"https://omkar2711.github.io/Drum_Kit/",
  // },
];

const experiences = [

  {
    title: "React Native Developer",
    company_name: "Reparv",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];

export { services, technologies,experiences, Social, projects };
