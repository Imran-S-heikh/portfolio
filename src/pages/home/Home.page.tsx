import React from 'react'
import Footer from "../../components/footer/Footer.component"
import Header from "../../components/header/Header.component"

function Home() {
    return (
        <div className="flex flex-col h-full">
            <Header />

            <div className="justify-center items-center flex-1 flex my-10">
                <div className="">
                    <h3 className="text-white-base mb-2">Hello! I am</h3>
                    <h1 className="text-5xl text-white-base">Imran Shaikh</h1>
                    <h2 className="text-danube-base text-2xl mt-2">Junior full-stack developer</h2>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home