"use client";

import { Carousel } from "flowbite-react";

export function Component() {
  return (
    <div className=" h-28 sm:h-96 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="homepage_banner.jpg" alt="..." />
        <img  src="homepage_banner2.jpg" alt="..." />
        <img  src="hompepage_banner3.jpg" alt="..." />
      </Carousel>
    </div>
  );
}


export default Component;