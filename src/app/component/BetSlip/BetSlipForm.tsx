import { Label, TextInput } from "flowbite-react";
import { CiMoneyBill } from "react-icons/ci";
import { Button } from "flowbite-react";
import { useRef, useState, useEffect } from "react";
import { RootContext } from "@/app/contexts";
import { ESPORT_BET_LIST } from "@/utils/constants";

import React, { useContext } from "react";

export default function BetSlipForm() {
  
  const { globalBetOnProcess, globalActiveBetSlip, setglobalActiveBet } = useContext(RootContext);
  // const [multiplier] = useState<number>(0);
  const [totalPayout, setTotalPayout] = useState<number>(0);
  const [input, setInput] = useState();
  const handleChangeInput = (matchid: any, multiplier : any,e: any) => {
    const { value } = e.target;

    const payout: number = Math.round(value * multiplier * 100) / 100;
    for (let i = 0, l = globalActiveBetSlip.length; i < l; ++i) {
      if (globalActiveBetSlip[i].matchhid === matchid) {
        globalActiveBetSlip[i].category = matchid;
        globalActiveBetSlip[i].matchBet = value;
        globalActiveBetSlip[i].payout = payout;
        setTotalPayout(totalPayout + globalActiveBetSlip[i].payout);
        break;
      } 
  };
}
useEffect(() => {
}, [globalActiveBetSlip,ESPORT_BET_LIST,totalPayout]);
  return (
    <>
      {globalActiveBetSlip.map(function (ActiveBetSlip: any) {
             return (  
              ESPORT_BET_LIST.map(function (item) {
          
                if (ActiveBetSlip.matchhid == item.match_id) {
                  return (
                    <div key={ActiveBetSlip.match_id} className="max-w-md">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email4"
                          value={item.W1 + " vs " + item.W2}
                        />
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
      
                      <div className="flex justify-between gap-x-6">
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <TextInput
                              id="Bet"
                              type="number"
                              key={item.match_id}
                              icon={CiMoneyBill}
                              placeholder="0.0"
                              onChange={(e) => handleChangeInput(item.match_id, ActiveBetSlip.odds,e)}
                              required
                            />
                          </div>
                        </div>
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-600">
                              Payout
                            </p>
                            <p className="text-sm font-semibold leading-6 text-gray-600">
                              ₱ {ActiveBetSlip.payout}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            );
      
      })}
    </>
  );
}
