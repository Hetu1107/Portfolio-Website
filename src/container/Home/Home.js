import React from 'react'
import '../../style/Home.css'
import Frontpage from './Frontpage'
import About from './About'
import Projects from './Projects'
import { Route } from 'react-router'
import Skills from './Skills'
import Contact from './Contact'

function Home() {
    return (
        <div className="main_home_page" id="home">
            <Frontpage/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    )
}

export default Home
