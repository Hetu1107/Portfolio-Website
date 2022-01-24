import React from 'react'
import '../../style/Skill.css'
const skills = [
    {
        img : 'http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png',
        name : 'Python'
    },
    {
        img : 'https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png',
        name : 'Numpy',
    },
    {
        img : 'https://pandas.pydata.org/static/img/favicon_white.ico',
        name : 'Pandas',
    },
    {
        img : 'https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_no_text_.png',
        name : 'Open-Cv',
    },
    {
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
        name : 'C++'
    },
    {
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png',
        name : 'C'
    },
    {
        img : 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        name : 'React'
    },
    {
        img : 'http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png',
        name : 'Redux'
    },
    {
        img : 'https://cdn.uconnectlabs.com/wp-content/uploads/sites/25/2020/04/J.png',
        name: 'Java Script'
    },
    {
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
        name : 'HTML'
    },
    {
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
        name : "CSS"
    },
    {
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png',
        name : 'SCSS'
    },
];

function Skills() {
    return (
        <div className="main_skills_page">
            <div className="main_skills_page_head">
                    <h1 data-aos="fade-down">Tech-Stacks</h1>
            </div>
            <div className="main_skills_page_skills" data-aos="fade-up">
                    {
                        skills.map(res=>{
                            return(
                                <div>
                                    <img src={res.img}/>
                                    <h2>{res.name}</h2>
                                </div>
                            )
                        })
                    }
            </div>
            <br></br>
            <br></br>
            <div className='main_skills_page_head'>
                <h1>Know</h1>
            </div>
            <div className='my_skills_works'>
                <div className='main_skill'>
                    <img src='https://www.thedesigngrouponline.com/wp-content/uploads/2012/04/shutterstock_1122339353.jpg'/>
                    <h2>Web Development</h2>
                </div>
                <div className='main_skill'>
                    <img src='https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?fit=bounds&format=jpg&width=960'/>
                    <h2>Machine Learning</h2>
                </div>
            </div>
        </div>
    )
}

export default Skills
