"use client";

import "../src/app/globals.css";
import NavHeader from '@/app/component/layout/navheader';
import Carousel from '@/app/component/layout/headerCarousel';
import SportsSection from '@/app/SportsBetting/sportsTab';
import BetSlipDrawer from '@/app/component/BetSlip/BetSlipDrawer';

function SportsBetting() {
  return (
    <>
      <NavHeader></NavHeader>
      <Carousel></Carousel>
      <SportsSection></SportsSection>
      <BetSlipDrawer></BetSlipDrawer> 
    </>
  );
}

export default SportsBetting;
