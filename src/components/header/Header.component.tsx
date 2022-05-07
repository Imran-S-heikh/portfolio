import TabOptions from "../../molecules/TabOptions.mole"
import Navigation from "../navigation/Navigation.component"

function Header() {
  return (
    <header className="">
      <div className="flex border-b border-gray-base ">

        <div className="ml-5 border-r border-gray-base flex items-center">
          <p className="text-gray-light mr-10">micheal-whatever</p>
        </div>

        <div className="flex-1">
          <Navigation/>
        </div>


      </div>
    </header>
  )
}

export default Header