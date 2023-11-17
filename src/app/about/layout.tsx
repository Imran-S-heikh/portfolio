import { aboutNavData } from "./data";
import { ReactElement } from "react";
import NavItem from "./components/NavItem";

function Layout({ children }: { children: ReactElement }) {
  return (
    <main className="flex-1">
      <div className="flex-1 flex h-full">
        <div className="w-20 border-r border-gray-base text-center flex-col ju hidden lg:flex items-center">
          {aboutNavData.map((item) => (
            <NavItem
              path={item.path}
              icon={item.icon}
              label={item.label}
              key={item.path}
            />
          ))}
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
