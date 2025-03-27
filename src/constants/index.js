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
  docker,
  jobit,
  recipe,
  threejs,
  onecommunity,
  accenture,
  openturf,
  umass,
  aws,
  aitutor,
  fairshare,
   amir,
   ashok,
   stock
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React & Next.js Developer",
    icon: mobile,
  },
  {
    title: "Backend & Cloud Engineer",
    icon: backend,
  },
  {
    title: "DevOps & CI/CD Specialist",
    icon: creator,
  },
];



const experiences = [
  {
    title: "Software Developer (Volunteer)",
    company_name: "One Community",
    icon: onecommunity, 
    iconBg: "#fff",
    date: "Oct 2024 - Present",
    points: [
      "Developed and shipped key features in React.js, improving accessibility and increasing user engagement by 15%.",
      "Led the migration of CI/CD from CircleCI to GitHub Actions, cutting deployment costs by 50% and streamlining releases.",
      "Completed advanced managerial training, enhancing leadership, Agile planning, and team collaboration for faster project delivery.",
    ],
  },
  {
    title: "Teaching and Grading Assistant",
    company_name: "Umass Dartmouth",
    icon: umass, 
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Jan 2022",
    points: [
      "Led labs and interactive sessions in Advanced Web Software Development, Database Design, Data Visualization, and Software Testing, bridging theory and practice to improve student understanding and application of key concepts.",
      "Partnered with faculty to redesign coursework, introducing interactive modules and live coding sessions that boosted student engagement by 20%.",
      "Provided targeted feedback on lab assignments for 40+ students in Software Testing and Web Development—increasing average project scores by 15%—and hosted weekly office hours featuring real-world examples for hands-on learning",
    ],
  },

  {
    title: "Associate Software Engineer",
    company_name: "Accenture",
    icon: accenture, 
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Jan 2022",
    points: [
      "Built and optimized scalable applications using React, Redux, TypeScript, and Node.js, enhancing user experience by 20%.",
      "Automated CI/CD pipelines using Docker, Kubernetes, Jenkins, and GitHub Actions, cutting deployment times by 25%.",
      "Conducted thorough web application testing using Jest, reducing bug-related incidents by 15% and improving code reliability.",
    ],
  },
 
  {
    title: "Junior Software Developer",
    company_name: "OpenTurf Technologies",
    icon: openturf, 
    iconBg: "#fff",
    date: "Oct 2019 - Oct 2020",
    points: [
      "Adapted rapidly to emerging technologies in a fast-paced startup, consistently delivering production-ready code that shortened development cycles by 20%.",
      "Redesigned a legacy application using React and Express.js, enhancing UI responsiveness and reducing page load times by 35%, leading to a 15% increase in user retention.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "Shashank is an exceptional student, demonstrating strong dedication and technical prowess. His ability to grasp complex concepts and deliver high-quality work is impressive.",
    name: "Amir Akhavan Masoumi, PhD",
    position: 'Professor at Umass Dartmouth',
    image: amir,
  }, 
  {
    testimonial:
      "I guided Shashank during his capstone project, where his innovation and commitment to excellence stood out. He proved to be a resourceful and diligent developer.",
    name: "Ashokkumar Patel",
    position: 'Professor at Umass Dartmouth',
    image: ashok,
  },
  {
    testimonial:
      "At OpenTurf Technologies, Shashank HV’s strong work ethic, adaptability, and professionalism significantly impacted our team’s success.",
    name: "Zunder Lekshmanan",
    position: 'CEO at OpenTurf Technologies',
    image: stock,
  },
];






const projects = [
  {
    name: "Ai-Tutor",
    description:
    "Web-based JavaScript tutor that features an AI-powered chatbox, interactive code editor, and live console, allowing users to write, test, and learn code with real-time feedback and guided assistance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aitutor,
    source_code_link: "https://github.com/shashankhv/ai-tutor/tree/development",
  },
  {
    name: "Fairshare",
    description:
    "Mobile app that enables users to split expenses, scan receipts, and manage shared bills within groups, offering a seamless and collaborative approach to budgeting and cost tracking." ,
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: fairshare,
    source_code_link: "https://github.com/shashankhv/FairShare-Backend",
  },
  {
    name: "Recipe Diary",
    description:
     "Web application that lets users save, organize, and explore personal recipes with photos, ingredients, and instructions, offering a simple and intuitive way to manage culinary creations.",
    tags: [
      {
        name: "nodejs",
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
    image: recipe,
    source_code_link: "https://github.com/shashankhv/recipe-diary-frontend",
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
];





export { services, technologies, experiences, testimonials, projects };
