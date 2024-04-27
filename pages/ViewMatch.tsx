"use client";

import { ESPORT_BET_LIST  } from "@/utils/constants";
import { SPORT_BET_LIST  } from "@/utils/sportconstants";
import { Breadcrumb } from "flowbite-react";
import NavHeader from "@/app/component/layout/navheader";
import ViewMatchTwitch from "@/app/ViewMatch/ViewMatchTwitch"
import BetSlipDrawer from "@/app/component/BetSlip/BetSlipDrawer";
import ViewMatchBetList from "../src/app/ViewMatch/ViewMatchBetList";
import React, { useEffect, useState, useRef } from "react";
// import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

export default function EsportBetting() {
//const params = useParams<{ ViewMatch: any}>()
const router = useRouter();
const params : any = router.query;
  const [MatchLiveStatus] = useState<Boolean>(false);
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref: any = useRef(null);
  let category : any = '';

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e: any) => {
    let start : any = new Date(Date.now());
    const total = Date.parse(e) - Date.parse(start);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e: any) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e: any) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 123123);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  if (params.category == 'Sports'){
    category =  SPORT_BET_LIST;
  }  else {
    category =  ESPORT_BET_LIST;
  }
    return (
      <>
        <NavHeader></NavHeader>
        {MatchLiveStatus == true ? (
          <ViewMatchTwitch />
        ) : (
          <>
            <img className="w-full banner" src={`${params.esport_game}_banner.jpg`}></img>
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item  href="/EsportBetting">{params.category}</Breadcrumb.Item>
              <Breadcrumb.Item href="/EsportBetting">{params.esport_game}</Breadcrumb.Item>
            </Breadcrumb>
            {category.map(function (item : any) {
              return (
                    
                <>   
                 {  params.matchid == item.id ? (
             <>
               <p className="ViewMatch_Timer">{timer}</p>
              <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className=" px-8 text-sm font-semibold leading-7 text-defaul-600">
                        {item.W1}
                    </p>
                  </div>
                </div>
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="versus_text px-8 text-sm font-semibold leading-6 text-defaul-600 text-center">
                      VS
                    </p>
                    <p className=" px-8 text-sm text-defaul-600">Best of 3</p>
                  </div>
                </div>
                <div className="flex min-w-0 gap-x-4">
                  <div
                    className="inline-flex rounded-md shadow-sm pr-4"
                    role="group"
                  >
                    <p className=" px-8 text-sm font-semibold leading-6 text-defaul-600">
                    {item.W2}
                    </p>
                  </div>
                </div>
              </li>
             </>
            ): (<></>
            )}
                  
                </>
              );
            })}
          </>
        )}
  
        <ViewMatchBetList />
        <BetSlipDrawer />
      </>
    );


}


