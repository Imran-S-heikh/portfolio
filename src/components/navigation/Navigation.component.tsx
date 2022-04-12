import React from 'react'

function Navitem({ title }: { title: string }) {
  return (
   <li className="text-white-muted border-gray-base px-10 py-3  bg-black-base border-r" >
     {title}
   </li>
 )
}

function Navigation() {
  return (
    <nav className="bg-black-dark">
      <ul className="flex items-center leading-4 border-y text-gray-base">
        <Navitem title="_hello" />
        <Navitem title="_about me" />
        <Navitem title="_projects" />
      </ul>
    </nav>
  )
}

export default Navigation