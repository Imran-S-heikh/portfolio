import React from 'react'
import TabOptions from "../../molecules/TabOptions.mole"
import Navigation from "../navigation/Navigation.component"

function Header() {
  return (
    <header className="mt-4">
      <div className="flex items-center mx-5">
        <TabOptions />

        <div className="flex-1 text-center">
          <p className="text-white-muted">imran_shaikh</p>
        </div>

        <a
          href="https://dribbble.com/YankaD"
          target="_blank"
          rel="noreferrer"
          className="font-semibold transition-colors duration-150 text-white-muted text-sm opacity-70 hover:text-yellow-base tracking-tighter active:opacity-50"
        >
          Design Credit: Yanka Darelova
        </a>
      </div>
    </header>
  )
}

export default Header