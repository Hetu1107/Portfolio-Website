import React, { useEffect, useState } from "react";
import "../../style/Nav.css";
import { Link } from "react-scroll";
let one = false
function Navbar() {
  const [open, setopen] = useState(false);
  const [da,setda] = useState(false);
  const [screen,setscreen] = useState(window.screen.width);
  window.onresize = resize;
console.log(screen);
function resize()
{
 setscreen(window.screen.width);
}
  useEffect(() => {
    if(screen > 1300){
      document.getElementById("main_navbar").style.display = "flex";
    }
    else{
    if (!open && one) {
      let b = document.querySelectorAll(".baar");
      b.forEach((e) => {
        e.style.margin = "0px";
      });
      document.getElementById("bar_three").style.display = "none";
      document.getElementById("bar_one").style.transform =
        "rotateY(180deg) rotate(45deg)";
      document.getElementById("bar_two").style.transform =
        "rotateY(180deg) rotate(-45deg)";
      document.getElementById("main_navbar").style.display = "flex";
      setopen(true);
      one = true;
    } else {
      let b = document.querySelectorAll(".baar");
      b.forEach((e) => {
        e.style.margin = "5px 0";
      });
      document.getElementById("main_navbar").style.display = "none";
      document.getElementById("bar_three").style.display = "flex";
      document.getElementById("bar_one").style.transform =
        "rotateY(0deg) rotate(0deg)";
      document.getElementById("bar_two").style.transform =
        "rotateY(0deg) rotate(0deg)";
      setopen(false);
    }
  }
  },[screen,da]);
  return (
    <>
      <div id="portfolio">
        <a
          href="https://drive.google.com/file/d/15xNTbHh-nUE8aWZVw5de4tzFZKV0qiP1/view?usp=sharing"
          target="_blank"
        >
          <i class="fas fa-id-badge"></i> - Portfolio
        </a>
      </div>
      <div id="bar" onClick={()=>{
        setda(!da)
        one = true
        }}>
        <span id="bar_one" className="baar"></span>
        <span id="bar_two" className="baar"></span>
        <span id="bar_three" className="baar"></span>
      </div>
      <div className="main_navbar" id="main_navbar">
        <div className="main_navbar_top">
          <h1 className="main_nav_head">H</h1>
          <h4>Hetu</h4>
        </div>
        <div className="main_navbar_mid">
          <Link to="home" smooth={true} duration={1000}>
            <a onClick={() => setda(false)}>Home</a>
          </Link>
          <Link to="about" smooth={true} duration={1000}>
            <a onClick={() => setda(false)}>About</a>
          </Link>
          <Link to="project" smooth={true} duration={1000}>
            <a onClick={() => setda(false)}>Projects</a>
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            <a onClick={() => setda(false)}>Contact</a>
          </Link>
          <a onClick={() => setda(false)} href="https://drive.google.com/file/d/15xNTbHh-nUE8aWZVw5de4tzFZKV0qiP1/view?usp=sharing" target="_blank">Portfolio</a>
        </div>
        <div className="main_navbar_bottom">
          <a href="https://github.com/" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hetu-patel-b96479202/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
