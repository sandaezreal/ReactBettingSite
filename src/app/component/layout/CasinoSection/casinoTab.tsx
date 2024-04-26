"use client";

import { GAME_BANNER, GAME_LIST } from "@/utils/constants";
import React, { useEffect,useState } from 'react';



export function Component() {
  const [defaultActiveGame, setdefaultActiveGame] = useState<string>('Used');

  useEffect(() => {
  }, [defaultActiveGame]);

  function filterGame(selected : any, item : any,) {
    setdefaultActiveGame(selected);
  }
  var gameList = GAME_LIST.map(function (item) {
    return (
      <>
        <div className="py-2 pr-2" key={item.id}>
          <div className="live w-[14vw] h-[14vw] p-1 md:p-0 md:w-full">
            <div className="sideBar">
              <button onClick={() => filterGame(item.name,item)}>
                <img  src={item.name == defaultActiveGame ? item.imgactive  : item.imgdeactive} />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });

  var gameBanner = GAME_BANNER.map(function (item) {
    return (  
      <div key={item.id} className="md:pl-16">
        <div>
          { item.maintenance == false && item.name == defaultActiveGame ? (
              <div className="slot md:w-[70vw] md:h-[18vw] mb-2 md:mb-8">
              <div className="sideBar relative item md:w-[70vw] md:h-[18vw]">
                <img src={item.img} className="md:w-full" />
              </div>
            </div>
          ): (<></>
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="display-flex grow border border-black rounded-xl mt-2 p-2 md:p-4">
         <div>
         {gameList}
         </div>
         <div>
         {gameBanner}
         </div>
      </div>
    </>
  );

  
}

export default Component;
