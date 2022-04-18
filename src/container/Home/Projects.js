import React,{useState,useEffect} from "react";
import "../../style/Projects.css";
import db from '.././firebase'
import Lottie from "react-lottie";
import project from '../../lotties/project.json'
// const data = [
//   {
//     name: "Health is Wealth",
//     para: "A Web App for patiants and doctor to help in daily day lif.This site is uses React,Nodejs,Pandas,Numpy...",
//     github: "https://github.com/Hetu1107/Easy-Health_Care",
//   },
//   {
//     name : 'Student Class',
//     para : 'A Website for student to help for maintainig their assignment and announcements for their daily work...',
//     github : 'https://github.com/Hetu1107/Student-Class'
//   },
//   {
//     name: "Health is Wealth",
//     para: "A Web App for patiants and doctor to help in daily day lif.This site is uses React,Nodejs,Pandas,Numpy...",
//     github: "https://github.com/Hetu1107/Easy-Health_Care",
//   },
//   {
//     name: "Health is Wealth",
//     para: "A Web App for patiants and doctor to help in daily day lif.This site is uses React,Nodejs,Pandas,Numpy...",
//     github: "https://github.com/Hetu1107/Easy-Health_Care",
//   },
//   {
//     name : 'Student Class',
//     para : 'A Website for student to help for maintainig their assignment and announcements for their daily work...',
//     github : 'https://github.com/Hetu1107/Student-Class'
//   },
//   {
//     name: "Health is Wealth",
//     para: "A Web App for patiants and doctor to help in daily day lif.This site is uses React,Nodejs,Pandas,Numpy...",
//     github: "https://github.com/Hetu1107/Easy-Health_Care",
//   },
//   {
//     name: "Health is Wealth",
//     para: "A Web App for patiants and doctor to help in daily day lif.This site is uses React,Nodejs,Pandas,Numpy...",
//     github: "https://github.com/Hetu1107/Easy-Health_Care",
//   },
  
// ];
var inde = 0;
function Projects() {
  const [pro,setPro] = useState([])
  useEffect(()=>{
    console.log(db.collection('Projects'));
    db.collection('Projects').onSnapshot((snap)=>{
      const array = [];
      snap.docs.map((doc)=>{
         array.push(doc.data())
      })
      setPro(array)
    })
  },[])
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: project,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="main_project_page" id="project">
      <div className="main_project_page_head">
        <h1 data-aos="fade-right">My Projects</h1>
        <a href="https://github.com/Hetu1107" target="_blank" data-aos="fade-left">View more</a>
      </div>
      <div className="main_project_page_data" data-aos="fade-up">
        <div className="animation_box">
        <Lottie options={defaultOptions} height={"80%"} width={"80%"} />
        </div>
      {
        pro.map((res,index)=>{
          return(
        <div className="data_box" onMouseOver={()=>{

        }}>
          <h1>{res.name}</h1>
          <p>{res.about}</p>
          <a href={res.github}>Read more</a>
        </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default Projects;
