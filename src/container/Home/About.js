import React from "react";
import "../../style/About.css";
import { useEffect } from "react";
import Lottie from "react-lottie";
import about from "../../lotties/about.json";
import data from "../../lotties/data.json";
function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: about,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="main_about_my_self_col" id="home">
      <div className="main_about_my_sef">
        <div className="main_about_my_self_left" data-aos="fade-left">
          <h1>Myself & I</h1>
          <p>
            Hey World I'm Full-Stack developer From India 😎.Pursuing B.Tech in
            Computer science and Engineering From IIIT-SURAT. I used to work
            with tools like react ,redux and Node-js.Always Preffered to create
            best user-interface.
            <br />
            <br />
            Well organized person and also interested to crack problems 😊.My
            problem has a solution; I will work on a plan.I am learning more and
            more new things everyday.I am also working as JUNIOR DEVELOPER at
            GDSC-IIIT-SURAT and as Exicutive at ACM-NIT-SURAT
            <br />
            <br />
            Currently Exploaring Machine Learning and Deep Learning.Alway eager
            to learn new thing.
          </p>
          <a href="">Contact Me any Time !</a>
        </div>
        <div className="main_about_my_self_right" data-aos="fade-right">
          <Lottie options={defaultOptions} height={"400"} width={"100%"} />
        </div>
      </div>
      <div className="rating_thing">
          <div className="round" data-aos="fade-right"><img src="https://cdn.codechef.com/sites/default/files/uploads/pictures/811b20a47eac52b10c90ab82e0628e21.png"/></div>
          <div className="line"></div>
          <div className="round" data-aos="fade-down"><Lottie options={defaultOption} height={"100%"} width={"100%"} /></div>
          <div className="line"></div>
          <div className="round" data-aos="fade-up"><img src="https://cdn.iconscout.com/icon/free/png-256/code-forces-3521352-2944796.png" /></div>
          <div className="line"></div>
          <div className="round" data-aos="fade-left"><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" /></div>
      </div>
    </div>
  );
}

export default About;
