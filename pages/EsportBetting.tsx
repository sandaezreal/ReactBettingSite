"use client";

import "../src/app/globals.css";
import NavHeader from '@/app/component/layout/navheader';
import Carousel from '@/app/component/layout/headerCarousel';
import GameSection from '@/app/GameSection/gameTab';
import BetSlipDrawer from '@/app/component/BetSlip/BetSlipDrawer';

function EsportBetting() {
  return (
    <>
      <NavHeader></NavHeader>
      <Carousel></Carousel>
      <GameSection></GameSection>
      <BetSlipDrawer></BetSlipDrawer> 
    </>
  );
}

export default EsportBetting;
