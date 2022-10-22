import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useRecoilState } from "recoil"
import Hide from "../../molecules/Hide.mole"
import Icon from "../../molecules/Icon.mole"
import { NavbarOpenState } from "../../states/state.stom"
import Footer from "../footer/Footer.component"
import Navigation from "../navigation/Navigation.component"

function Header() {

  const [navBarOpen, setNavBarOpen] = useRecoilState(NavbarOpenState);
  const location = useLocation();
  // const size = usesize

  useEffect(() => {
    setNavBarOpen(window.innerWidth > 1022);
  }, [location,setNavBarOpen]);


  return (
    <header className="">
      <div className="flex border-b border-gray-base justify-between px-4 lg:px-0 lg:h-auto h-14 lg:items-stretch items-center">

        <Link to="/" className="lg:border-r border-gray-base flex lg:w-80 items-center lg:h-auto h-full">
          <p className="text-gray-light  lg:pl-5">imran-shaikh</p>
        </Link>


        <div className="lg:hidden ">
          <button onClick={() => setNavBarOpen(true)} className="block active:opacity-50">
            <Icon icon="menu" className="text-gray-light text-xl" />
          </button>
        </div>

        <Hide open={navBarOpen}>
          <div className="flex-1 flex flex-col lg:block lg:static absolute bg-blue-base inset-0 z-10 lg:z-auto">
            <div className="flex justify-between px-4 lg:px-0 h-14 items-center border-gray-dark border-b lg:hidden">
              <Link to="/" className="lg:border-r border-gray-base flex lg:w-80 items-center lg:h-auto h-full">
                <p className="text-gray-light  lg:pl-5">imran-shaikh</p>
              </Link>


              <div className="">
                <button onClick={() => setNavBarOpen(false)} className="block active:opacity-50">
                  <Icon icon="close" className="text-gray-light text-xl" />
                </button>
              </div>
            </div>
            <Navigation />
            <Footer className="mt-auto lg:hidden" />
          </div>
        </Hide>


      </div>
    </header>
  )
}

export default Header