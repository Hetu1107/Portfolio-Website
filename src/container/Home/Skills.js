import React from 'react'
import '../../style/Skill.css'
const skills = [
    {
        img : 'https://cdn-icons-png.flaticon.com/512/2103/2103626.png',
        name : 'Machine Learning'
    },
    {
        img : 'http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png',
        name : 'Python'
    },
    {
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
        name : 'C++'
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
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
        name : 'HTML'
    },
    {
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
        name : "CSS"
    },
    {
        img : 'https://cdn.uconnectlabs.com/wp-content/uploads/sites/25/2020/04/J.png',
        name: 'Java Script'
    },
    {
        img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png',
        name : 'C'
    },

]
function Skills() {
    return (
        <div className="main_skills_page">
            <div className="main_skills_page_head">
                    <h1 data-aos="fade-down">My Skills</h1>
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
        </div>
    )
}

export default Skills
