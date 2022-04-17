import clsx from "clsx";
import { Link, useMatch } from "react-router-dom"

interface NavitemProps {
  title: string,
  path: string
}

function Navitem({ title, path }: NavitemProps) {

  const match = useMatch(path);

  return (
    <Link to={path}>
      <li
        className={clsx(match ?
          "text-yellow-base bg-black-base border-t-2 border-t-contessa-base mb-[-1px]" :
          "active:opacity-75 text-white-muted ",
          "hover:text-yellow-base cursor-pointer border-gray-base border-r transition duration-300 px-10 py-3  "
        )}
      >
        {title}
      </li>
    </Link>
  )
}

interface NavigationProps {
  className?: string
}

function Navigation({className}: NavigationProps) {
  return (
    <nav className={clsx(className,"bg-black-dark")}>
      <ul className="flex items-center leading-4 border-y text-gray-base">
        <Navitem title="_hello" path="/" />
        <Navitem title="_about me" path="/about" />
        <Navitem title="_projects" path="/projects" />
      </ul>
    </nav>
  )
}

export default Navigation