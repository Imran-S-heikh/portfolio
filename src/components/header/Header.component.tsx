import React from 'react'
import TabOptions from "../../molecules/TabOptions.mole"
import Navigation from "../navigation/Navigation.component"

type Props = {}

function Header({}: Props) {
  return (
    <header className="m-5">
        <div className="flex items-center">
            <TabOptions/>

            <div className="flex-1 text-center">
                <p className="text-white-muted">james_collins</p>
            </div>
        </div>
        <div className="mt-6">
            <Navigation/>
        </div>
    </header>
  )
}

export default Header