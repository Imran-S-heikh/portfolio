"use client";

import { Fragment, useEffect, useState } from "react";
import Footer from "./Footer";
import Hide from "./Hide";
import Icon from "./Icon";
import Navigation from "./Navigation";

function MobileNav() {
  const [navBarOpen, setNavBarOpen] = useState(true);
  useEffect(() => {
    setNavBarOpen(window.innerWidth > 1022);
  }, [location, setNavBarOpen]);

  return (
    <Fragment>
      <div className="lg:hidden ">
        <button
          onClick={() => setNavBarOpen(true)}
          className="block active:opacity-50"
        >
          <Icon icon="menu" className="text-gray-light text-xl" />
        </button>
      </div>
      <Hide open={navBarOpen}>
        <div className="flex-1 flex flex-col lg:block lg:static absolute bg-blue-base inset-0 z-10 lg:z-auto">
          <div className="flex justify-between px-4 lg:px-0 h-14 items-center border-gray-dark border-b lg:hidden">
            {/* <Link to="/" className="lg:border-r border-gray-base flex lg:w-80 items-center lg:h-auto h-full">
                <p className="text-gray-light  lg:pl-5">imran-shaikh</p>
              </Link> */}

            <div className="">
              <button
                onClick={() => setNavBarOpen(false)}
                className="block active:opacity-50"
              >
                <Icon icon="close" className="text-gray-light text-xl" />
              </button>
            </div>
          </div>
          <Navigation />
         
        </div>
      </Hide>
    </Fragment>
  );
}

export default MobileNav;
