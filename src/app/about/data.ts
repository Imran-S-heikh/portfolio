import api from "@dev/assets/icons/api.png";
import atomicCss from "@dev/assets/icons/atomic-css.png";
import css from "@dev/assets/icons/css.png";
import docker from "@dev/assets/icons/docker.png";
import firebase from "@dev/assets/icons/firebase.png";
import bash from "@dev/assets/icons/gnu-bash.png";
import html from "@dev/assets/icons/html.png";
import js from "@dev/assets/icons/js.png";
import mongodb from "@dev/assets/icons/mongodb.png";
import react from "@dev/assets/icons/react.png";
import rust from "@dev/assets/icons/rust.png";
import sass from "@dev/assets/icons/sass.png";
import sql from "@dev/assets/icons/sql.png";
import tailwind from "@dev/assets/icons/tailwind-css.png";
import typescript from "@dev/assets/icons/typescript.png";
import git from "@dev/assets/icons/git.png";
import solana from "@dev/assets/icons/solana.png";
import { IconsId } from "@dev/assets/font-icons/icons";
import { StaticImageData } from "next/image";

export interface File {
  name: string;
  image: StaticImageData;
  content: string[];
  path?: string;
  title?: string;
  type: "file";
}

export interface FileIcon {
  name: string;
  icon: IconsId;
  content: string[];
  type: "file";
  path?: string;
  title?: string;
}

export interface Folder {
  name: string;
  color: string;
  open?: boolean;
  children: (Folder | File)[];
  type: "folder";
}

export interface FolderIcon {
  name: string;
  color: string;
  open?: boolean;
  children: FileIcon[];
  type: "folder";
}

export const defaultContent = [
  "Hi there, I'm Imran Shaikh, a passionate ",
  "Full Stack Web Developer hailing from the ",
  "vibrant city of Khulna, Bangladesh.",
  "",
  "In the realm of web development, I find my true calling.",
  " Armed with TypeScript, I navigate the digital landscapes,",
  "crafting solutions and bringing new products to life.",
  "While the web serves as my battlefield, I'm not afraid to explore beyond, ",
  "dabbling in technologies like Rust, React Native and Blockchain.",
  "",
  "One of the things that keeps my professional journey exciting is ",
  "my eagerness to embrace new technologies. The ever-evolving ",
  "tech world is a playground, and I am always ready to dive into ",
  "the latest innovations.",
  "",
  "I thrive on challenges, solving problems,",
  "and turning ideas into tangible, functional products. ",
  "",
  "Thank you for visiting my portfolio!",
  // "If you are looking for a dynamic Full Stack Web Developer who ",
  // "is not afraid to push boundaries and embrace new technologies, ",
  // "I'm ready to bring my skills and passion to your team.",
];

export const infoData: FolderIcon[] = [
  {
    name: "bio",
    color: "text-iris-base",
    open: false,
    type: "folder",
    children: [
      {
        name: "about-me",
        path: "me",
        icon: "file-ii",
        content: defaultContent,
        type: "file",
        title: "About Me",
      },
      {
        name: "about-work",
        path: "work",
        icon: "file-ii",
        content: [
          "In the last three years, I've dedicated myself to mastering the art of Full Stack Web Development. Through hands-on experience with diverse technologies and frameworks, I've honed my skills to create impactful solutions.",
          "",
          "----- Automatio.io -----",
          "From: July 2022 to Present",
          "Company: Automatio.io",
          "Position: Full Stack Developer",
          "Location: Remote",
          "Tech Stack: Solana, Rust, React, NextJS, Web3, Typescript, Tailwindcss, Prisma, PostGresql, Graphql, Git",
          "",
          "Responsibilities:",
          "- Crafting user interfaces with NextJS",
          "- Developing and maintaining Solana Smart Contracts",
          "- Backend service development using Typescript",
          "",
          "Upon joining Automatio.io, I entered the world of blockchain with no prior experience. ",
          "This opportunity has been instrumental in my continuous learning and professional growth.",
          "",
          "----- Z-Technology -----",
          "From: October 2020 to April 2022",
          "Company: Z-Technology",
          "Position: Frontend Developer",
          "Location: Remote",
          "Tech Stack: React, Typescript, Tailwindcss, SASS, Atomic Css, Git",
          "",
          "Responsibilities:",
          "- Creating responsive user interfaces using React",
          "- Conducting code reviews to maintain code quality standards",
          "- Troubleshooting, debugging, and resolving issues",
          "",
          "Z-Technology marked the beginning of my career as a developer. The invaluable lessons and experiences gained here significantly enhanced my frontend development skills.",
        ],
        type: "file",
        title: "Work Experience",
      },
    ],
  },
  {
    name: "interests",
    color: "text-orange-base",
    open: false,
    type: "folder",
    children: [
      {
        name: "travels",
        icon: "file-ii",
        content: [
          "While my professional journey has kept me primarily rooted in ",
          "the digital realm, my strong passion for traveling fuels my ",
          "curiosity about exploring diverse cultures and landscapes.",
          "",
          "As of now, my travel experiences may be limited, but my enthusiasm to",
          "embark on new adventures knows no bounds. I am eagerly anticipating the",
          " opportunities to broaden my horizons and create lasting memories through travel.",
          "",
          "Stay tuned for future updates on my travel escapades!",
        ],
        type: "file",
      },

      {
        name: "sports",
        icon: "file-ii",
        content: [
          "Sports have always been an integral part of my life, providing not only a source of physical activity but also moments of joy and camaraderie.",
          "",
          "----- Cricket -----",
          "Cricket has been a passion of mine, and I find immense joy in being on the field, whether it's wielding the bat, honing my bowling skills, or diving to make a crucial catch. The strategic nature of the game and the teamwork involved resonate with me, making cricket a sport that I thoroughly enjoy.",
          "",
          "----- Badminton -----",
          "Badminton is another sport that I actively participate in. The fast-paced rallies and quick reflexes required in badminton have not only contributed to my physical fitness but have also added a layer of excitement to my leisure time. The friendly matches and competitive spirit make every badminton session an exhilarating experience.",
        ],
        type: "file",
      },
    ],
  },
  {
    name: "education",
    color: "text-green-base",
    open: false,
    type: "folder",
    children: [
      // {
      //   name: "high-school",
      //   icon: "file-ii",
      //   content: [],
      //   type: "file",
      // },
      {
        name: "college",
        icon: "file-ii",
        content: [
          "Transitioning to college marked a shift in my academic focus. While my earlier years were dedicated to achieving excellence in primary and high school, my interests evolved during college.",
          "",
          "Academic Highlights:",
          "- College Exam Score: Attained a decent score, maintaining a commitment to academic success.",
          "",
          "However, my true passion unfolded in the realm of technology and development. Throughout my college journey, I found myself drawn to various tech-related pursuits, exploring new skills and nurturing a deep love for computers. Despite achieving commendable results academically, my heart was more invested in hands-on learning and practical applications.",
          "",
          "This period of my life solidified my decision to pursue a path aligned with my passion, leading me towards a fulfilling journey in the tech industry.",
        ],
        type: "file",
      },
      {
        name: "university",
        icon: "file-ii",
        content: [
          "My academic journey took an unexpected turn when pursuing a Computer Science degree became unfeasible due to various reasons. However, this detour does not signify an end, but rather a shift in my approach to learning and growth.",
          "",
          "Despite the challenges, my commitment to computer science remains unwavering. I am embarking on a self-directed educational path through the Open Source Society University (OSSU), a valuable resource offering a roadmap for a free, self-taught education in Computer Science.",
          "",
          "The OSSU curriculum integrates courses from prestigious institutions such as Harvard, MIT, and other world-renowned universities. This initiative reflects my dedication to continuous learning, leveraging high-quality resources to further my understanding of computer science and its applications.",
          "",
          "While my university plans may have taken a different route, my enthusiasm for knowledge and self-improvement continues to drive me towards a future enriched by a deep understanding of the field I am passionate about.",
        ],
        type: "file",
      },
    ],
  },
];

// TODO:
// These content is generated by chatbot.
// I will update it later according to my expertise.
export const skillsData: Folder[] = [
  {
    name: "Languages",
    color: "text-orange-light",
    open: false,
    type: "folder",
    children: [
      {
        name: "HTML",
        path: "html",
        image: html,
        title: "Frontend Developer - HTML Specialist",
        content: [
          "HTML, or HyperText Markup Language, is the backbone of web development. It provides the structure and semantics for creating web pages.",
          "Proficient in crafting well-organized and semantically correct HTML code to enhance the user experience.",
        ],
        type: "file",
      },
      {
        name: "CSS",
        path: "css",
        image: css,
        title: "Frontend Developer - CSS Stylist",
        content: [
          "CSS, or Cascading Style Sheets, is essential for styling web pages. It controls the layout, appearance, and overall design of a website.",
          "Skilled in creating visually appealing and responsive designs through the effective use of CSS properties and techniques.",
        ],
        type: "file",
      },
      {
        name: "SASS",
        path: "sass",
        image: sass,
        title: "Frontend Developer - SASS Specialist",
        content: [
          "SASS, a CSS preprocessor, extends the functionality of CSS with features like variables, nesting, and mixins.",
          "Experienced in leveraging the power of SASS to streamline and enhance the styling process in web development projects.",
        ],
        type: "file",
      },
      {
        name: "Javascript",
        path: "javascript",
        title: "Full Stack Developer - Javascript Expert",
        image: js,
        content: [
          "Javascript is a versatile scripting language used to add interactivity and dynamic behavior to websites.",
          "Proficient in writing clean and efficient JavaScript code for both client-side and server-side development.",
        ],
        type: "file",
      },
      {
        name: "Typescript",
        path: "typescript",
        title: "Full Stack Developer - Typescript Specialist",
        image: typescript,
        content: [
          "TypeScript is a superset of JavaScript that adds static typing. It enhances code quality and provides better development tools.",
          "Skilled in utilizing TypeScript to build scalable and maintainable web applications with improved code robustness.",
        ],
        type: "file",
      },
      {
        name: "Bash Script",
        path: "bash-script",
        title: "DevOps Engineer - Bash Scripting Expert",
        image: bash,
        content: [
          "Bash scripting is essential for automating tasks and managing system configurations in a Unix-based environment.",
          "Proficient in writing Bash scripts to streamline development workflows and enhance system administration tasks.",
        ],
        type: "file",
      },
      {
        name: "SQL",
        path: "sql",
        title: "Database Developer - SQL Specialist",
        image: sql,
        content: [
          "SQL, or Structured Query Language, is fundamental for managing and manipulating relational databases.",
          "Experienced in writing complex SQL queries to retrieve, update, and manipulate data efficiently.",
        ],
        type: "file",
      },
      {
        name: "Rust",
        path: "rust",
        title: "Rust Developer",
        image: rust,
        content: [
          "Rust is a systems programming language known for its emphasis on performance, safety, and concurrency.",
          "Actively engaged in writing Rust code for building robust and efficient systems, particularly in the context of web development.",
        ],
        type: "file",
      },
    ],
  },
  {
    name: "Technologies",
    color: "text-green-light",
    open: false,
    type: "folder",
    children: [
      {
        name: "Git",
        path: "git",
        title: "Version Control Specialist - Git",
        image: git,
        content: [
          "Git is a distributed version control system crucial for tracking changes in source code during software development.",
          "Experienced in utilizing Git for version control, branching, merging, and collaborating effectively with development teams.",
        ],
        type: "file",
      },
      {
        name: "Tailwindcss",
        path: "tailwindcss",
        title: "Frontend Developer - Tailwindcss Expert",
        image: tailwind,
        content: [
          "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building designs directly in the markup.",
          "Proficient in using Tailwindcss to streamline and expedite the frontend development process, creating modern and responsive user interfaces.",
        ],
        type: "file",
      },
      {
        name: "Solana",
        path: "solana",
        title: "Blockchain Developer - Solana Specialist",
        image: solana,
        content: [
          "As a Blockchain Developer specializing in Solana, I bring a wealth of experience in harnessing the power of this high-performance blockchain known for its scalability, speed, and cost-effectiveness.",
          "Key Accomplishments:",
          "- Developed Solana smart contracts and decentralized applications, leveraging the platform's robust capabilities.",
          "- Proficient in Solana program development using Rust, ensuring efficient and secure execution of blockchain logic.",
          "- Extensive knowledge of Solana program intricacies, including understanding their limitations and optimizing their performance, contributing to cost reduction and improved scalability.",
          "- Successfully created a Solana staking program, demonstrating a deep understanding of decentralized finance (DeFi) concepts within the Solana ecosystem.",
          "",
          "My experience extends beyond mere coding; I actively contribute to structuring programs strategically, enhancing overall efficiency, and addressing challenges unique to Solana's architecture. This comprehensive approach enables me to create innovative solutions that not only meet but exceed project requirements on the Solana blockchain.",
        ],
        type: "file",
      },
      {
        name: "Atomic CSS",
        path: "atomic-css",
        title: "Frontend Developer - Atomic CSS Specialist",
        image: atomicCss,
        content: [
          "Atomic CSS is an approach to web design that involves creating small, standalone units of styling and combining them to build interfaces.",
          "Skilled in implementing Atomic CSS methodologies to achieve maintainable and modular styles in frontend development projects.",
        ],
        type: "file",
      },
      {
        name: "MongoDB",
        path: "mongodb",
        title: "Database Developer - MongoDB Specialist",
        image: mongodb,
        content: [
          "MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability.",
          "Proficient in designing and interacting with MongoDB databases to handle large volumes of data efficiently in web development projects.",
        ],
        type: "file",
      },
      {
        name: "React",
        path: "react",
        title: "Frontend Developer - React Specialist",
        image: react,
        content: [
          "React is a JavaScript library for building user interfaces, known for its declarative and efficient approach.",
          "Extensive experience in developing interactive and dynamic user interfaces using React for frontend web development.",
        ],
        type: "file",
      },
      {
        name: "Rest-API",
        path: "rest-api",
        title: "Backend Developer - REST API Specialist",
        image: api,
        content: [
          "RESTful APIs (Representational State Transfer) are a standard for building web services, providing interoperability between computer systems on the internet.",
          "Skilled in designing, developing, and consuming RESTful APIs to enable communication between frontend and backend systems.",
        ],
        type: "file",
      },
      {
        name: "React Native",
        path: "react-native",
        title: "Mobile App Developer - React Native",
        image: react,
        content: [
          "React Native is a framework for building mobile applications using React. It allows developers to use React for building mobile apps for iOS and Android platforms.",
          "Hands-on experience in developing cross-platform mobile applications using React Native for a seamless user experience.",
        ],
        type: "file",
      },
      {
        name: "Docker",
        path: "docker",
        title: "DevOps Engineer - Docker Specialist",
        image: docker,
        content: [
          "Docker is a platform for automating the deployment and scaling of applications in lightweight, portable containers.",
          "Proficient in using Docker for containerization, ensuring consistency across different environments and simplifying the deployment process.",
        ],
        type: "file",
      },
      {
        name: "Firebase",
        path: "firebase",
        title: "Full Stack Developer - Firebase Specialist",
        image: firebase,
        content: [
          "Firebase is a comprehensive platform provided by Google for building web and mobile applications.",
          "Experienced in leveraging Firebase services for real-time databases, authentication, and cloud functions in web development projects.",
        ],
        type: "file",
      },
    ],
  },
];

export interface NavItemProps {
  path: string;
  icon: IconsId;
  label: string;
}

export const aboutNavData: NavItemProps[] = [
  {
    path: "terminal",
    icon: "terminal",
    label: "Terminal",
  },
  {
    path: "",
    icon: "info",
    label: "Info",
  },
  {
    path: "games",
    icon: "game",
    label: "Game",
  },
  {
    path: "cv",
    icon: "cv",
    label: "Curriculum Vitae",
  },
];
