import { ReactElement } from "react";
import Sidebar from "./[...slug]/components/Sidebar";

function Layout({ children }: { children: ReactElement }) {
  return (
    <div className=" h-full flex lg:flex-row flex-col items-center lg:items-start">
      <div className="w-full lg:w-[240px] border-gray-base lg:border-r flex h-full">
        <div
          className="text-gray-light flex-1 overflow-y-auto"
          style={{ maxHeight: "calc( 100vh - 190px)" }}
        >
          <div className="">
            <Sidebar />
          </div>
        </div>
      </div>

      <div className="m-4 sm:m-6 xl:m-10 flex-1">{children}</div>
    </div>
  );
}

export default Layout;
