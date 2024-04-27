"use client";
import NavHeader from '@/app/component/layout/navheader';
import Carousel from '@/app/component/layout/headerCarousel';
import HotGame from '@/app/component/layout/hotGame';
import GameSection from '@/app/GameSection/gameTab';
import AccountTab from '@/app/component/Account/accountTab';
import CasinoTab from '@/app/component/CasinoSection/casinoTab';
import BetSlipDrawer from '@/app/component/BetSlip/BetSlipDrawer';

function Page() {
  return (
    <>
      <NavHeader></NavHeader>
      <Carousel></Carousel>
      <HotGame></HotGame>
      <GameSection></GameSection>
      {/* <AccountTab></AccountTab> */}
      {/* <CasinoTab></CasinoTab> */}
      <BetSlipDrawer></BetSlipDrawer> 
    </>
  );
}

export default Page;
