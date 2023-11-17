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
        icon: "file-ii",
        content: [
          "About me",
          "I have 3 years of exprience in web",
          "development lorem this sit init let",
          "go happen the is not a good meaning word,",
          "so if there is nothing to do then do nothing.",
          "If you feel bad this was not my intension. ",
          "",
          "So, tif tiem is nowthing when its wasted,",
          "but it can be a huge thing when there is dead",
          "line and you have warning. Man that sucks.",
        ],
        type: "file",
      },
      {
        name: "about-work",
        icon: "file-ii",
        content: [],
        type: "file",
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
        content: [],
        type: "file",
      },
      {
        name: "swiming",
        icon: "file-ii",
        content: [],
        type: "file",
      },
      {
        name: "cricket",
        icon: "file-ii",
        content: [],
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
    path: "info",
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
