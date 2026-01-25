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
  logo,
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
    icon: logo,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Development of progressive web applications (PWAs), mobile applications, and backend applications, with a focus on performance, scalability, and user experience.",
      "Worked across all stages of the software lifecycle, from conception to delivery, integrating technologies from the front-end, mobile, and server ecosystems.", 
      "Experienced in Typescript/React, Flutter, Java, and Kotlin.",
    ],
  },
  {
    title: "Developer - Product Hacking",
    company_name: "Creditas",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - July 2023",
    points: [
      "Product Hacking is a cross-team within Product & Technology that works with experimentation.",
      "Designed and implemented algorithms for automating processes using JavaScript and Python.",
      "Developed new products and prototypes with stakeholders, building fast and ready-to-test applications, leading to fast decision-making processes and innovation.",
      "Improved the accuracy and efficiency of decision-making processes, fostering a more data-driven and strategic approach within the organization, using data analysis and machine learning algorithms."
    ],
  },
  {
    title: "Developer - Credit Analyst",
    company_name: "Digio",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2019 - Sept 2020",
    points: [
      "Responsible for parameterizing rules and developing algorithms in Java in the credit system.",
      "Responsible for migrating the credit system to the cloud (AWS), increasing performance, and improving the system infrastructure.",
      "Improved the quality of credit analysis by implementing a routine of quality assurance tests in every deployment.",
      "Created reports for data management, with SQL and Excel, used by different teams across the company, helping data-driven decisions."
    ],
  },
];

export const workDescription = "In this section, you’ll find a selection of projects that showcase my journey as a software engineer. Each project reflects my passion for solving complex problems through code, my curiosity for exploring new technologies, and my commitment to building user-focused solutions.";

export const projects = [
  {
    name: "Login Page",
    description:
      "A responsive user registration page with real-time password validation. Uses HTML, CSS and JavaScript.",
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
    source_code_link: "https://github.com/beatrizyordaky/login-page",
  },
  {
    name: "Generate Random Coffee",
    description:
      "A Google Apps Script project designed to foster informal, randomized coffee meetups within teams or communities.",
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
    source_code_link: "https://github.com/beatrizyordaky/generate-random-coffee",
  },
  {
    name: "Hubble Image Processing",
    description:
      "Image processing of a nebula's photos taken by the Hubble Space Telescope. Segmentation and labeling techniques were implemented in the hubble deep field image.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter notebook",
        color: "green-text-gradient",
      },
      {
        name: "cv2",
        color: "pink-text-gradient",
      },
    ],
    image: hubble,
    source_code_link: "https://github.com/beatrizyordaky/hubble-image-processing/",
  },
];

export const devName = "Beatriz Yordaky";
export const email = "byordaky@gmail.com";
export const linkedinLink = "https://www.linkedin.com/in/beatriz-yordaky/";
export const githubLink = "https://github.com/beatrizyordaky";
