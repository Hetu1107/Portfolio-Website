import React from "react";
import "../../style/About.css";
import { useEffect } from "react";
import Lottie from 'react-lottie';
import about from '../../lotties/about.json'
function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: about,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="main_about_my_sef">
        <div className="main_about_my_self_left">
            <h1>Myself & I</h1>
            <p>Hey World I'm Full-Stack developer From India 😎.I used to work with tools like react ,redux and Node-js.Always Preffered to create best user-interface.
            <br/>
            <br/>
            Well organized person and also interested to crack problems 😊.My problem has a solution; I will work on a plan.I am learning more and more new things everyday.I am also working as JUNIOR DEVELOPER at GDSC-IIIT-SURAT and as Exicutive at ACM-NIT-SURAT
            <br/>
            <br/>
            Currently Exploaring Machine Learning and Deep Learning.Alway eager to learn new thing.
            </p>
            <a href="">Contact Me any Time !</a>
        </div>
        <div className="main_about_my_self_right">
        <Lottie 
	    options={defaultOptions}
        height={'400'}
        width={'100%'}
      />
        </div>
    </div>
  );
}

export default About;
