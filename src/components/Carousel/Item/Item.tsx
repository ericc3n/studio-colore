"use client"

import React from "react";
import { CarouselType } from "@/features/carouselItems";
import "./Item.scss"

interface PropsType {
  slide: CarouselType;  
}

export default function Item({ slide }: PropsType) {
  return (
    <div className="slide">
      <img src={slide.imgSrc} alt="slide-image" />
      <div className="description">
        <h3>{slide.title}</h3>
        <p className="thin">{slide.date}</p>
      </div>
    </div>
  );
}
