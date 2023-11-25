"use client";

import Icon from "@dev/components/Icon";
import Tooltip from "@dev/components/Tooltip";
import classUtil from "@dev/utils/class-util";
import Link from "next/link";
import { NavItemProps } from "../data";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegment,
} from "next/navigation";

const aboutPaths = ["/about/cv", "/about/terminal", "/about/games"];

function useMatch(path: string) {
  const pathname = usePathname();
  const pathFallback = path || "default";

  if ( aboutPaths.includes(pathname)) {
    return pathname === `/about/${path}`;
  }

  if (pathname === "/about" && pathFallback === "default") {
    return true;
  }

  return pathFallback === "default" && !aboutPaths.includes(pathname) && pathname.includes('/about/');
}

function NavItem({ path, icon, label }: NavItemProps) {
  const match = useMatch(path);
  return (
    <Tooltip label={label}>
      <Link
        href={{ pathname: `/about/${path}` }}
        className="block py-5 active:opacity-50"
      >
        <Icon
          icon={icon}
          className={classUtil(
            "text-2xl text-gray-deep hover:text-gray-light cursor-pointer",
            match && "!text-gray-light",
            icon === "game" && "text-lg",
            icon === "terminal" && "text-xl"
          )}
        />
      </Link>
    </Tooltip>
  );
}

export default NavItem;
