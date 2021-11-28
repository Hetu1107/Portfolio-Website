import React from "react";
import "../../style/Nav.css";

var open = false;
function Navbar() {
  return(
    <>
        <div id="bar" onClick={()=>{
          if(!open){
            let b =  document.querySelectorAll('.baar');
           b.forEach((e)=>{
              e.style.margin = "0px";
           })
          document.getElementById('bar_three').style.display = 'none';
          document.getElementById('bar_one').style.transform = 'rotateY(180deg) rotate(45deg)';
          document.getElementById('bar_two').style.transform = 'rotateY(180deg) rotate(-45deg)';
          document.getElementById('main_navbar').style.display = 'flex';
          open = true;
          }
          else{
           let b =  document.querySelectorAll('.baar');
           b.forEach((e)=>{
              e.style.margin = "5px 0";
           })
           document.getElementById('main_navbar').style.display = 'none';
            document.getElementById('bar_three').style.display = 'flex';
          document.getElementById('bar_one').style.transform = 'rotateY(0deg) rotate(0deg)';
          document.getElementById('bar_two').style.transform = 'rotateY(0deg) rotate(0deg)';
          open = false;
          }
        }} >
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
            <a>Home</a>
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
        </div>
        <div className="main_navbar_bottom">
          <a href="https://github.com/" target="_blank"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/hetu-patel-b96479202/" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href=""><i class="fab fa-instagram"></i></a>
        </div>
    </div>
    </>
  )
}

export default Navbar;
