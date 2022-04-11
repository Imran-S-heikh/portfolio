import React from 'react'
import Header from "../../components/header/Header.component"

type Props = {}

function Home({ }: Props) {
    return (
        <div>
            <Header />

            <div className="">
                <h3 className="text-white-base mb-2">Hello! I am</h3>
                <h1 className="text-5xl text-white-base">James Collins</h1>
                <h2 className="text-danube-base text-2xl mt-2">Senior front-end developer</h2>
            </div>
        </div>
    )
}

export default Home