import clsx from "clsx";
import { Link, useMatch } from "react-router-dom"

interface NavitemProps {
  title: string,
  path: string,
  className?: string
}

function Navitem({ title, path,className }: NavitemProps) {

  const match = useMatch(path);

  return (
    <Link to={path} className="block h-full">
      <li
        className={clsx(className,match ?
          "text-white-base border-b-2 border-b-orange-light" :
          "active:opacity-75 text-gray-light",
          "hover:text-white-base cursor-pointer border-gray-base border-r transition duration-300 px-10 h-full flex items-center"
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

function Navigation({ className }: NavigationProps) {
  return (
    <nav className={clsx(className, "bg-black-dark flex")}>
        <ul className="flex leading-4 h-14">
          <Navitem title="_hello" path="/" />
          <Navitem title="_about me" path="/about" />
          <Navitem title="_projects" path="/projects" />
        </ul>

        <div className="flex-1"></div>
        <ul className="">
          <Navitem title="_contact-me" path="/contact" className="border-l" />
        </ul>
    </nav>
  )
}

export default Navigation