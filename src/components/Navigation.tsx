import classUtil from "@dev/utils/class-util";
import Navitem from "./NavItem";

interface NavigationProps {
  className?: string;
}

function Navigation({ className }: NavigationProps) {
  return (
    <nav
      className={classUtil(className, "bg-blue-base flex lg:flex-row flex-col")}
    >
      <ul className="flex leading-4 lg:h-14 lg:flex-row flex-col">
        <Navitem title="_hello" path="/" />
        <Navitem title="_about me" path="about" />
        <Navitem title="_projects" path="projects" />
      </ul>

      <div className="flex-1"></div>
      <ul className="">
        <Navitem
          title="_contact-me"
          path="contact"
          className="lg:border-l !border-r-0"
        />
      </ul>
    </nav>
  );
}

export default Navigation;
