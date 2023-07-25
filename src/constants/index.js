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
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6
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
    title: "Full Stack Web Applications",
    icon: web,
  },
  {
    title: "A REST API Applications",
    icon: creator,
  },
  {
    title: "E-learning Systems",
    icon: backend,
  },
  {
    title: "E-commerce Systems",
    icon: mobile,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
    title: "Web Developer",
    company_name: "Meya372",
    icon: starbucks,
    iconBg: "#383E56",
    date: " ",
    points: [
      "Created workflow diagrams and provided a graphic overview of the program process to demonstrate the functionality of systems and programs before starting the programming phase",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Ennovo Creatives",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "02/2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Lemalef Exams",
    description:
      "Lemalef Exams, which has over 900+ users, is an online platform offers COC exam questions and self-examination system for accounting TVET students.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "http://lemalef.epizy.com/",
  },
  {
    name: "Ennovo Design",
    description:
      "Ennovo Design is a digital and creative agency which provides digital marketing, interior design, branding and business strategy.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://ennovodesign.com/",
  },
  {
    name: "Meya 372",
    description:
      "Meya372 is an E-Commerce Website which allows people all over addis to buy and sell Desktop and Laptop Computers, mobile phones and accessories over the internet.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://meya372.com/",
  },
    {
    name: "Akasha",
    description:
      "Akasha is an import and export plc which focuses on exporting cereals, oil seeds, pulses, pepper, and spices to over 15 countries all across the globe.",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://akashaimportandexportplc.com/",
  },
  {
    name: "HazE Books",
    description:
      "HazE Books is a search engine for books. To build this website I have used the Google Books API search engine built with a RESTful API that has over 600,000 books.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://ezedin85.github.io/HazE_Books/",
  },
  {
    name: "TTS",
    description: "(TTS) Text to Speach Converter This TTS Website is an online text-to-speech reader. It reads out loud texts with natural sounding voices.",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://ezedin85.github.io/haze-text-to-speach/",
  },
];

export { services, technologies, experiences, testimonials, projects };
