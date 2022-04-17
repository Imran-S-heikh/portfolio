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
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "Cascading Style Sheet (CSS)",
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "Syntactically Awesome Style Sheet (SASS)",
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "Javascript (JS)",
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "Typescript (TS)",
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "Bash Script",
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "Rust - Blazingly Fast with Trust",
                image: "",
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
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "Tailwindcss",
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "Atomic CSS",
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "MongoDB",
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "React",
                image: "",
                content: [],
                type: "file"
            },
            {
                name: "React Native",
                image: "",
                content: [],
                type: "file"
            }
        ]
    }


];