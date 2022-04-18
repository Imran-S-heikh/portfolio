import api from "../../assets/icons/api.png";
import atomicCss from "../../assets/icons/atomic-css.png";
import css from "../../assets/icons/css.png";
import docker from "../../assets/icons/docker.png";
import firebase from "../../assets/icons/firebase.png";
import bash from "../../assets/icons/gnu-bash.png";
import html from "../../assets/icons/html.png";
import js from "../../assets/icons/js.png";
import mongodb from "../../assets/icons/mongodb.png";
import react from "../../assets/icons/react.png";
import rust from "../../assets/icons/rust.png";
import sass from "../../assets/icons/sass.png";
import sql from "../../assets/icons/sql.png";
import tailwind from "../../assets/icons/tailwind-css.png";
import typescript from "../../assets/icons/typescript.png";
import git from "../../assets/icons/git.png";

export interface File {
    name: string,
    image: string,
    content: string[],
    type: "file"
}

export interface Folder {
    name: string,
    color: string,
    open?: boolean,
    children: (Folder | File)[],
    type: "folder"
}


export const data: Folder[] = [
    {
        name: "Languages",
        color: "red",
        open: true,
        type: "folder",
        children: [
            {
                name: "Hypertext Markup Language (HTML)",
                image: html,
                content: [],
                type: "file"
            },
            {
                name: "Cascading Style Sheet (CSS)",
                image: css,
                content: [],
                type: "file"
            },
            {
                name: "Syntactically Awesome Style Sheet (SASS)",
                image: sass,
                content: [],
                type: "file"
            },
            {
                name: "Javascript (JS)",
                image: js,
                content: [],
                type: "file"
            },
            {
                name: "Typescript (TS)",
                image: typescript,
                content: [],
                type: "file"
            },
            {
                name: "Bash Script",
                image: bash,
                content: [],
                type: "file"
            },
            {
                name: "Structured Query Language (SQL)",
                image: sql,
                content: [],
                type: "file"
            },
            {
                name: "Rust - Blazingly Fast with Trust",
                image: rust,
                content: [],
                type: "file"
            },
        ]
    },
    {
        name: "Technologies",
        color: "red",
        open: false,
        type: "folder",
        children: [
            {
                name: "Git",
                image: git,
                content: [],
                type: "file"
            },
            {
                name: "Tailwindcss",
                image: tailwind,
                content: [],
                type: "file"
            },
            {
                name: "Atomic CSS",
                image: atomicCss,
                content: [],
                type: "file"
            },
            {
                name: "MongoDB",
                image: mongodb,
                content: [],
                type: "file"
            },
            {
                name: "React",
                image: react,
                content: [],
                type: "file"
            },
            {
                name: "Rest-API",
                image: api,
                content: [],
                type: "file"
            },
            {
                name: "React Native",
                image: react,
                content: [],
                type: "file"
            },
            {
                name: "Docker",
                image: docker,
                content: [],
                type: "file"
            },
            {
                name: "Firebase",
                image: firebase,
                content: [],
                type: "file"
            }
        ]
    }


];