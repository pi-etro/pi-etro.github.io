import {
  css,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  typescript,
  loginpage,
  randomcoffee,
  hubble,
} from "../assets";

export const navSections = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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

export const technologies = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "QuintoAndar",
    date: "September 2021 - Present",
    points: [
      "Place holder text"
    ],
  },
];

export const workDescription = "Work experience placeholder.";

export const projects = [
  {
    name: "Project 1",
    description:
      "Description of Project 1.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: loginpage,
    source_code_link: "https://github.com/pi-etro/foxter",
  },
  {
    name: "Project 2",
    description:
      "Description of Project 2.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "google apps script",
        color: "green-text-gradient",
      },
      {
        name: "google sheets",
        color: "pink-text-gradient",
      },
    ],
    image: randomcoffee,
    source_code_link: "https://github.com/pi-etro/foxter",
  }
];

export const devName = "Pietro Gregorio";
export const email = "pietro.dcg@gmail.com";
export const linkedinLink = "https://www.linkedin.com/in/gregorio-pietro/";
export const githubLink = "https://github.com/pi-etro";
