import clsx from "clsx";
import React from 'react'
import { useMatch } from "react-router-dom"

interface NavitemProps {
  title: string,
  path: string
}

function Navitem({ title, path }: NavitemProps) {

  const match = useMatch(path);

  return (
    <li className={clsx(match ? "text-yellow-base" : "text-white-muted", "hover:text-yellow-base cursor-pointer transition duration-300 border-gray-base px-10 py-3  bg-black-base border-r")} >
      {title}
    </li>
  )
}

function Navigation() {
  return (
    <nav className="bg-black-dark">
      <ul className="flex items-center leading-4 border-y text-gray-base">
        <Navitem title="_hello" path="/" />
        <Navitem title="_about me" path="/about" />
        <Navitem title="_projects" path="/projects" />
      </ul>
    </nav>
  )
}

export default Navigation