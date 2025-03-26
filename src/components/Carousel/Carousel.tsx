"use client";

import React from 'react';
import "./Carousel.scss";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface PropsType {
  items: React.JSX.Element[]
}

export default function Carousel({ items }: PropsType) {
  return (
    <div className="carousel">
      <AliceCarousel
        items={items}
        mouseTracking
        disableButtonsControls={false}
        paddingLeft={2.6}
        paddingRight={16}
        responsive={{
          0: { items: 1 },
          750: { items: 2 },
          1200: { items: 3 },
        }}
        renderPrevButton={() => (
          <button className="carousel-arrow left">
            <IoChevronBack size={16} />
          </button>
        )}
        renderNextButton={() => (
          <button className="carousel-arrow right">
            <IoChevronForward size={16} />
          </button>
        )}
      />
    </div>
  )
}
