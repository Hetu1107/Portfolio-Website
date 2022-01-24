import React from "react";
import "../../style/star.scss";
import Lottie from 'react-lottie';
import front from '../../lotties/front.json';
import { Link } from "react-scroll";
function Frontpage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: front,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="front_main_page" id="home">
      <div class="stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        {/* <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div> */}
      </div>
      <div className="front_name" data-aos="fade-right">
        <h1 className="frontpage_name">
          <span className="text_text">H</span>
          <span className="text_text">i</span>
          <span className="text_text">,</span>
          <br />
          <span className="text_text">I</span>
          <span className="text_text">'</span>
          <span className="text_text">m</span>
          <span id="text">H</span>
          <span className="text_text">e</span>
          <span className="text_text">t</span>
          <span className="text_text">u</span>
          <span className="text_text">,</span>
          <br />
          <span className="text_text">W</span>
          <span className="text_text">e</span>
          <span className="text_text">b</span>
          <span className="text_text" id="d">
            D
          </span>
          <span className="text_text">e</span>
          <span className="text_text">v</span>
          <span className="text_text">e</span>
          <span className="text_text">l</span>
          <span className="text_text">o</span>
          <span className="text_text">p</span>
          <span className="text_text">e</span>
          <span className="text_text">r</span>
        </h1>
        <h2 className="about">Full stack developer / ML developer</h2>
        <Link to="contact" smooth={true} duration={1000}> <div className="front_contact">Contant me!</div></Link>
      </div>
      <div id="front_lotti" data-aos="fade-left">
      <Lottie 
	    options={defaultOptions}
        height={'100%'}
        width={'100%'}
      />
      </div>
      {/* <img src="https://www.pngplay.com/wp-content/uploads/2/Hacker-PNG-Photo-Image.png"/> */}
      {/* <img src="https://www.pngarts.com/files/3/Computer-Technology-Download-PNG-Image.png" /> */}
      <h4 id="scroll_down">
        <span id="scroll">scroll down </span>
        <i class="fas fa-long-arrow-alt-down"></i>
      </h4>
    </div>
  );
}

export default Frontpage;
