import Navigation from "../navigation/Navigation.component"

function Header() {
  return (
    <header className="">
      <div className="flex border-b border-gray-base ">

        <div className=" border-r border-gray-base flex w-80 items-center">
          <p className="text-gray-light  pl-5">micheal-whatever</p>
        </div>

        <div className="flex-1">
          <Navigation/>
        </div>


      </div>
    </header>
  )
}

export default Header