import React from 'react'
import Intro from './intro/Intro'
import Topbar from './topbar/topbar'
import "./header.scss"
import Poster from "../../assets/poster.avif"
function Header() {
    return (
        <div className="h-screen banner relative">
            <img src={Poster} alt="" className='h-full w-screen object-cover brightness-50' />
            <div className="container top-8 md:left-20 absolute">
                <Topbar />
                <Intro />
            </div>
        </div>
    )
}

export default Header