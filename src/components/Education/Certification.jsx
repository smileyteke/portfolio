import { useState } from "react";
import "./certification.scss";

export default function Certification() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      img:
        "assets/certificate.jpg",
    },
    {      
      id: "2",      
      img:
        "assets/basic android apps with java.jpg",
    },
    {
      id: "3",
      img:
        "assets/CSS.jpg",
    },
    {
      id: "4",img:
        "assets/html.jpg",
    },
    {
      id: "5",img:
        "assets/Python for beginners.png",
    },
    {
      id: "6",img:
        "assets/intermediate Python.png",
    },
    {
      id: "7",img:
        "assets/Python Core.png",
    },
    {
      id: "8",img:
        "assets/Python data structures.png",
    },
    {
      id: "9",img:
        "assets/Pyton for data science.png",
    },
    {
      id: "10",img:
        "assets/responsive web design course.jpg",
    },
    {
      id: "11",img:
        "assets/Respnsive web design.png",
    },
    {
      id: "12",img:
        "assets/web development career path.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="certificates" id="certificates">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
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