"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "../Slide";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/images/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "/images/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15",
    },
    {
      id: 2,
      img: "/images/banner-3.jpg",
      title: "Sale offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              img={item.img}
              mainTitle={item.mainTitle}
              price={item.price}
              title={item.title}
              key={item.id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
