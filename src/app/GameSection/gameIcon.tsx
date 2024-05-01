"use client";
import { RootContext } from "@/app/contexts";

import React, { useContext } from "react";

export default function GameIcon() {
  const {
    setglobalFilterMatch
  } = useContext(RootContext);

  const matchFilter = (game : string) => {
    var filter = game;
    setglobalFilterMatch(filter);
  }
  return (
    <>
      <div className="bg-main border border-black rounded-xl mt-2">

        <div className="display-flex m-0 py-2 p-2">
        <div className="border border-black rounded-2xl mr-4 lg:w-[3vw] lg:h-[3vw] w-[9vw] h-[9vw]">
            <img
              onClick={() => matchFilter('all')}
              src="all-game.png"
              className="lg:w-[3vw] lg:h-[3vw] rounded-md md:rounded-2xl"
            />
          </div>
          <div className="border border-black rounded-2xl mr-4 lg:w-[3vw] lg:h-[3vw] w-[9vw] h-[9vw]">
            <img
              onClick={() => matchFilter('dota2')}
              src="dota2.png"
              className="lg:w-[3vw] lg:h-[3vw] rounded-md md:rounded-2xl"
            />
          </div>
          <div className="border border-black rounded-2xl lg:w-[3vw] lg:h-[3vw] mr-4 ">
            <img
              onClick={() => matchFilter('lol')}
              src="leageoflegend.png"
              className="lg:w-[3vw] lg:h-[3vw] rounded-md md:rounded-2xl"
            />
          </div>
          <div className="border border-black rounded-2xl mr-4 lg:w-[3vw] lg:h-[3vw]">
            <img  onClick={() => matchFilter('valorant')}
              src="valorant.png"
              className="lg:w-[3vw] lg:h-[3vw] w-[9vw] h-[9vw] rounded-md md:rounded-2xl"
            />
          </div>
          <div className="border border-black rounded-2xl mr-4 lg:w-[3vw] lg:h-[3vw] w-[9vw] h-[9vw]">
            <img  onClick={() => matchFilter('csgo')} src="csgo.png" className="rounded-md md:rounded-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}
