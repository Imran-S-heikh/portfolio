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
import { IconsId } from "@dev/assets/font-icons/icons";
import { StaticImageData } from "next/image";

export interface File {
  name: string;
  image: StaticImageData;
  content: string[];
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
        content: [],
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
          "",
          "While football may not be my primary sport of choice, I've found my passion and camaraderie in the cricket and badminton arenas. These sports not only keep me physically active but also provide a platform for building lasting friendships and unforgettable moments.",
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
      {
        name: "high-school",
        icon: "file-ii",
        content: [],
        type: "file",
      },
      {
        name: "college",
        icon: "file-ii",
        content: [],
        type: "file",
      },
      {
        name: "university",
        icon: "file-ii",
        content: [],
        type: "file",
      },
    ],
  },
];

export const skillsData: Folder[] = [
  {
    name: "Languages",
    color: "text-orange-light",
    open: false,
    type: "folder",
    children: [
      {
        name: "HTML",
        image: html,
        content: [],
        type: "file",
      },
      {
        name: "CSS",
        image: css,
        content: [],
        type: "file",
      },
      {
        name: "SASS",
        image: sass,
        content: [],
        type: "file",
      },
      {
        name: "Javascript",
        image: js,
        content: [],
        type: "file",
      },
      {
        name: "Typescript",
        image: typescript,
        content: [],
        type: "file",
      },
      {
        name: "Bash Script",
        image: bash,
        content: [],
        type: "file",
      },
      {
        name: "SQL",
        image: sql,
        content: [],
        type: "file",
      },
      {
        name: "Rust",
        image: rust,
        content: [],
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
        image: git,
        content: [],
        type: "file",
      },
      {
        name: "Tailwindcss",
        image: tailwind,
        content: [],
        type: "file",
      },
      {
        name: "Atomic CSS",
        image: atomicCss,
        content: [],
        type: "file",
      },
      {
        name: "MongoDB",
        image: mongodb,
        content: [],
        type: "file",
      },
      {
        name: "React",
        image: react,
        content: [],
        type: "file",
      },
      {
        name: "Rest-API",
        image: api,
        content: [],
        type: "file",
      },
      {
        name: "React Native",
        image: react,
        content: [],
        type: "file",
      },
      {
        name: "Docker",
        image: docker,
        content: [],
        type: "file",
      },
      {
        name: "Firebase",
        image: firebase,
        content: [],
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
