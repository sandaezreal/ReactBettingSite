"use client";

export function accountTab() {
  return (
  <>

<div className="mt-2 border rounded-xl display-flex items-center">
  <div className="display-flex flex-[1] items-end p-2 md:p-8 text-sikwin">Username
      <div className="p-2 px-8">
          <p className="text-sikwin text-sm md:text-base font-bold italic"> Kinda Sanda </p>
      </div>
  </div>
     <div className="display-flex flex-[1] items-end p-2 md:p-8"><img
      src="ho_mo.png"
      className="w-[25px] h-[25px] md:w-[40px] md:h-[40px]"/>
      <div className="px-4">
          <p className="text-sikwin text-xs md:text-base italic"> P750,000 </p>
      </div>
  </div>
</div>

  </>
  );
}


export default accountTab;
