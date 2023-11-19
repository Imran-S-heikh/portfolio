"use client";

import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom"
// import { useRecoilState } from "recoil"
// import { NavbarOpenState } from "../../states/state.stom"
import Footer from "./Footer";
import Navigation from "./Navigation";
import Hide from "./Hide";
import Icon from "./Icon";
import MobileNav from "./MobileNav";
import Link from "next/link";

function Header() {
  // const location = useLocation();
  // const size = usesize

  return (
    <header className="">
      <div className="flex border-b border-gray-base justify-between px-4 lg:px-0 lg:h-auto h-14 lg:items-stretch items-center">
        <Link
          href="/"
          className="lg:border-r border-gray-base flex lg:w-80 items-center lg:h-auto h-full"
        >
          <p className="text-gray-light  lg:pl-5">imran-shaikh</p>
        </Link>
        <MobileNav>
          <Navigation />
          <Footer className="mt-auto lg:hidden" />
        </MobileNav>
      </div>
    </header>
  );
}

export default Header;
