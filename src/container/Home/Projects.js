import React from "react";
import "../../style/Projects.css";
const data = [
  {
    name: "hetu",
    photo: "https://miro.medium.com/max/3200/1*afTS3knLUSHCJDirSOlq1g.jpeg",
    github: "",
  },
  {
    name: "hetu",
    photo:
      "https://img.freepik.com/free-photo/election-concept-person-dropping-ballot-card-into-vote-box-dark-cinematic-tone_34048-1399.jpg?size=626&ext=jpg",
    github: "",
  },
  {
    name: "hetu",
    photo:
      "https://www.educationalappstore.com/blog/wp-content/uploads/2018/08/best-to-do-list-apps-for-task-management.jpg",
    github: "",
  },
  {
    name: "hetu",
    photo:
      "https://store-images.s-microsoft.com/image/apps.53400.87827a86-723b-4333-99d3-b8bf0d4e784b.ed77a1c3-cb95-4b73-83df-42f694c180e9.ade5aab2-5134-455a-83d1-619fdd5be492",
    github: "",
  },
  {
    name: "hetu",
    photo:
      "https://myviewboard.com/blog/wp-content/uploads/2020/08/MP0027-01-scaled.jpg",
    github: "",
  },
  {
    name: "hetu",
    photo:
      "https://d8it4huxumps7.cloudfront.net/bites/wp-content/uploads/2019/08/14122623/How-to-make-the-best-use-of-your-college-alumni-association.jpg",
    github: "",
  },
  {
    name: "Hetu",
    photo: "https://blog.hubspot.com/hubfs/google-quiz.jpg",
    github: "",
  },
  {
    photo:
      "https://res.cloudinary.com/dte7upwcr/image/upload/f_auto,w_1500/blog/blog/imagens-ecommerce.png",
    name: "hetu",
    github: "",
  },
];
function Projects() {
  return (
    <div className="main_project_page">
      <div className="main_project_page_head">
        <h1>My Projects</h1>
      </div>
      <div className="main_project_page_data">
        {data.map((res, index) => {
          return (
            <div
              className="main_project_page_databox"
              id={`main_project_page_databox${index}`}
            >
              <div
                className="main_project_page_data_img"
                id={`main_project_page_data_img${index}`}
              >
                <img src={res.photo} />
              </div>
              <div
                className="main_project_page_data_round"
                onMouseOver={() => {
                  document.getElementById(
                    `main_project_page_databox${index}`
                  ).style.opacity = "1";
                  document.getElementById(
                    `main_project_page_data_img${index}`
                  ).style.transform = "scale(1.2)";
                  var a = document.getElementById(
                    `main_project_page_data_rounda${index}`
                  );

                  a.style.width = "100px";
                  a.style.height = "100px";
                  a.style.fontSize = "25px";
                }}
                onMouseLeave={() => {
                  document.getElementById(
                    `main_project_page_databox${index}`
                  ).style.opacity = "0.5";
                  document.getElementById(
                    `main_project_page_data_img${index}`
                  ).style.transform = "scale(1)";
                  var a = document.getElementById(
                    `main_project_page_data_rounda${index}`
                  );

                  a.style.width = "0px";
                  a.style.height = "0px";
                  a.style.fontSize = "0px";
                }}
              >
                <a
                  href=""
                  className="main_project_page_data_rounda"
                  id={`main_project_page_data_rounda${index}`}
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
