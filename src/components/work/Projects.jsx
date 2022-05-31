import { useState } from "react";
import "./projects.scss";


export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/html-css.png",
      title: "Web Design",
      desc:
        "A basic Website created for Eleda alterations",
      img:
        "assets/Eleda_Alter.png",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc:
        "Amobile App version of Eleda alterations",
      img:
        "assets/logo.jpg",
    },
    {
      id: "3",
      icon: "./assets/react.png",
      title: "Website",
      desc:
        "This is still in progress coming soon",
      img:
        "assets/inprogress.png",
    },
    {
      id: "4",
      icon: "./assets/Csharp.png",
      title: "Game",
      desc:
        "A simple mario like side scrolling game created with C# in visual studio",
      img:
        "assets/side-scrolling game.png",
    },
    {
      id: "5",
      icon: "./assets/SQL Server.jfif",
      title: "Data control",
      desc:
        "A stock control management system designed in visual studio with SQL database",
      img:
        "assets/data sql.png",
    },
    {
      id: "5",
      icon: "./assets/javascript.png",
      title: "Game",
      desc:
        "A simple pong game in Javascript",
      img:
        "assets/pong.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="projects" id="projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}