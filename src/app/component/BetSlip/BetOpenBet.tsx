import { Label, TextInput } from "flowbite-react";
import { CiMoneyBill } from "react-icons/ci";
import { Button } from "flowbite-react";
import { useRef, useState, useEffect } from "react";
import { RootContext } from "@/app/contexts";
import { ESPORT_BET_LIST } from "@/utils/constants";

import React, { useContext } from "react";

export default function BetSlipForm() {
  const {  globalOpenBet, globalTotalOdds, globalTotalPayout } =
    useContext(RootContext);
  const [totalPayout, setTotalPayout] = useState<number>(0);
  // const [TotalOdds, setTotalOdds] = useState<number>(0);
  const [totalStake, setTotalStake] = useState<number>(0);
  
  const handleChangeInput = (e: any) => {
    const { value } = e.target;

    var batch: any,
      i = 0,odd = 0;
    while ((batch = globalOpenBet[i++])) {
      setTotalPayout(Math.round(value * globalTotalOdds * 100) / 100);
      setTotalStake(value);
    }

  };
   useEffect(() => {
   }, [globalOpenBet,globalTotalOdds]);
   if (globalOpenBet) {
  var Esport_List = globalOpenBet.map(function (ActiveBetSlip: any) {
        return (
          <div key={ActiveBetSlip.match_id} className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="email4" value={ActiveBetSlip.awayTeam + " vs " + ActiveBetSlip.homeTeam} />
            </div>

            <div className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-600">
                    {ActiveBetSlip.teambet}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-gray-600">
                    {ActiveBetSlip.gameMode}
                  </p>
                </div>
              </div>
              <div className="flex min-w-0 gap-x-4">
                <div
                  className="inline-flex rounded-md shadow-sm"
                  role="group"
                >
                  <p className="text-sm font-semibold leading-6 text-gray-600">
                    {ActiveBetSlip.odds}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
  })
  }
  return (
    <>
    
    {globalOpenBet &&
    <>   
     {Esport_List}
     <div className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-600">
          Total Stake:
        </p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <p className="text-sm font-semibold leading-6 text-gray-600">
        {totalStake}
          </p>
      </div>
    </div>
  </div>
  <div className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-600">
          Total Odds:
        </p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="inline-flex rounded-md shadow-sm" role="group">
      <p className="text-sm font-semibold leading-6 text-gray-600">
          {globalTotalOdds}
        </p>
      </div>
    </div>
  </div>
  <div className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-600">
          Total Payout:
        </p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="inline-flex rounded-md shadow-sm" role="group">
      <p className="text-sm font-semibold leading-6 text-gray-600">
          {globalTotalPayout}
        </p>
      </div>
    </div>
  </div>
    </>
    }
    </>
  )

}
