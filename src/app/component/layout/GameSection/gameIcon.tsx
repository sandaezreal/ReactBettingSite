"use client";

export function gameIcon() {
  return (
  <>
<div className="bg-main border border-black rounded-xl mt-2">
  <div className="text-sikwin text-base md:text-5xl md:p-4 p-2">Esport</div>
  
  <div className="display-flex m-0 py-2 p-2"> 
    <div className="border border-black rounded-2xl mr-4 w-[9vw] h-[9vw]">
      <img
        src="dota2.png" className="w-[9vw] h-[9vw] rounded-md md:rounded-2xl"/></div>
      <div className="border border-black rounded-2xl mr-4 w-[9vw] h-[9vw]">
        <img
          src="leageoflegend.png" className="w-[9vw] h-[9vw] rounded-md md:rounded-2xl"/></div>
          <div className="border border-black rounded-2xl mr-4 w-[9vw] h-[9vw]"><img
          src="valorant.png" className="w-[9vw] h-[9vw] rounded-md md:rounded-2xl"/></div>
          <div className="border border-black rounded-2xl mr-4 w-w-w-[9vw] h-[9vw]"><img
          src="csgo.png" className="w-[9vw] h-[9vw] rounded-md md:rounded-2xl"/></div>
        
  </div>
</div>
  </>
  );
}


export default gameIcon;
