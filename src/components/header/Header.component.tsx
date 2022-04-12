import React from 'react'
import TabOptions from "../../molecules/TabOptions.mole"
import Navigation from "../navigation/Navigation.component"

function Header() {
  return (
    <header className="mt-4">
        <div className="flex items-center mx-5">
            <TabOptions/>

            <div className="flex-1 text-center">
                <p className="text-white-muted">imran_shaikh</p>
            </div>
        </div>
        <div className="mt-6">
            <Navigation/>
        </div>
    </header>
  )
}

export default Header