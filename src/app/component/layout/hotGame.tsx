"use client";
import gameSection from '@/app/component/layout/GameSection/gameSection';

function HotGame() {
  return (
  <>
<div className="bg-main border border-black rounded-xl mt-2">
  <div className="text-sikwin text-base md:text-5xl md:p-4 p-2">Hot Game</div>
  <div className="display-flex m-0 py-2 p-2"> 
    <div className="border border-black rounded-2xl mr-4 w-[16vw] h-[16vw]">
      <img
        src="aviator.png" className="w-[16vw] h-[16vw] rounded-md md:rounded-2xl"/></div>
      <div className="border border-black rounded-2xl mr-4 w-[16vw] h-[16vw]">
        <img
          src="hotgame1.png" className="w-[16vw] h-[16vw] rounded-md md:rounded-2xl"/></div>
          <div className="border border-black rounded-2xl mr-4 w-[16vw] h-[16vw]"><img
          src="hotgame2.png" className="w-[16vw] h-[16vw] rounded-md md:rounded-2xl"/></div>
          <div className="border border-black rounded-2xl mr-4 w-[16vw] h-[16vw]"><img
          src="hotgame3.png" className="w-[16vw] h-[16vw] rounded-md md:rounded-2xl"/></div>
          <div className="border border-black rounded-2xl mr-4 w-[16vw] h-[16vw]"><img
          src="hotgame4.png" className="w-[16vw] h-[16vw] rounded-md md:rounded-2xl"/></div>
        
  </div>
</div>
  </>
  );
}


export default HotGame;
