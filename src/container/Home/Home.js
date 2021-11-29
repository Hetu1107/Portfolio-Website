import React from 'react'
import '../../style/Home.css'
import Frontpage from './Frontpage'
import About from './About'
import Projects from './Projects'

function Home() {
    return (
        <div className="main_home_page">
            <Frontpage/>
            <About/>
            <Projects/>
        </div>
    )
}

export default Home
