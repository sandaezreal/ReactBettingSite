"use client";
import { RootProvider } from '@/app/contexts';
import NavHeader from '@/app/component/layout/navheader';
import Carousel from '@/app/component/layout/headerCarousel';
import HotGame from '@/app/component/layout/hotGame';
import GameSection from '@/app/GameSection/gameTab';
import AccountTab from '@/app/component/Account/accountTab';
import CasinoTab from '@/app/component/CasinoSection/casinoTab';
import BetSlipDrawer from '@/app/component/BetSlip/BetSlipDrawer';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function Page() {
  return (
    <>   
     <RootProvider>
      <NavHeader></NavHeader>
      <Carousel></Carousel>
      <HotGame></HotGame>
      <GameSection></GameSection>
      {/* <AccountTab></AccountTab> */}
      {/* <CasinoTab></CasinoTab> */}
      <BetSlipDrawer></BetSlipDrawer> 
      </RootProvider>
    </>
  );
}

export default Page;
