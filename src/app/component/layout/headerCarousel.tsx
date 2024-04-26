"use client";

import { Carousel } from "flowbite-react";

export function Component() {
  return (
    <div className="nav-slider h-13 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="swiper3.png" alt="..." />
        <img  src="swiper4.png" alt="..." />
      </Carousel>
    </div>
  );
}


export default Component;