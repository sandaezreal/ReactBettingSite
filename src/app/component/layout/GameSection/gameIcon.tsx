"use client";

export function gameIcon() {
  return (
  <>
<div className="bg-main border border-black rounded-xl mt-2">
  <div className="text-sikwin text-base md:text-5xl md:p-4 p-2">Esport</div>
  
  <div className="display-flex m-0 py-2 p-2"> 
    <div className="border border-black rounded-2xl mr-4 lg:w-[3vw] lg:h-[3vw] w-[9vw] h-[9vw]">
      <img
        src="dota2.png" className="lg:w-[3vw] lg:h-[3vw] rounded-md md:rounded-2xl"/></div>
      <div className="border border-black rounded-2xl lg:w-[3vw] lg:h-[3vw] mr-4 ">
        <img
          src="leageoflegend.png" className="lg:w-[3vw] lg:h-[3vw] rounded-md md:rounded-2xl"/></div>
          <div className="border border-black rounded-2xl mr-4 lg:w-[3vw] lg:h-[3vw]"><img
          src="valorant.png" className="lg:w-[3vw] lg:h-[3vw] w-[9vw] h-[9vw] rounded-md md:rounded-2xl"/></div>
          <div className="border border-black rounded-2xl mr-4 lg:w-[3vw] lg:h-[3vw] w-[9vw] h-[9vw]"><img
          src="csgo.png" className="rounded-md md:rounded-2xl"/></div>
         
  </div>
</div>
  </>
  );
}


export default gameIcon;
