import React from "react";
import {Link} from "react-router-dom";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "/food.jpg",
    alt: "camarones",
    desc: "the best Camarones",
    price:"$6,7"
  },
  {
    src:
      "/dessert.jpg",
    alt: "kitchen",
    desc: "Typic of the moment",
    price:"$3,7"
  },
  {
    src:
      "/salad.jpg",
    alt: "salad",
    desc: "Nuggets prom X3",
    price:"$5,7"
  },
  {
    src:
      "/salad.jpg",
    alt: "nuggets",
    desc: "Nuggets prom X2",
    price:"$2,1"
  },
  {
    src:
      "/special.jpg",
    alt: "special",
    desc: "Special of the week",
    price:"$2,7"
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <Link to="/booking">
      <img src={slide.src} alt={slide.alt}  width="450" height="380"/>
      <div className="slide-desc">
        <span>{slide.desc}</span>
        <span>{slide.price} <button className="btn-pay">pay</button></span>
      </div>
    </Link>
  </div>
));

export default slides;
