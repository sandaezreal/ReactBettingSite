

import { ESPORT_BET_LIST, ESPORT_BET_MATCH } from "@/utils/constants";
import { useParams } from 'next/navigation'
import React, { useEffect, useState, useRef } from "react";
export function ViewMatchBetList(BetList_CurrentTab : any) {
    console.log(BetList_CurrentTab.BetList_CurrentTab);
const params = useParams<{ ViewMatch: any}>()
  return (
    <>
       
       { 
         ESPORT_BET_MATCH.map(function (item) {      
            if (BetList_CurrentTab.BetList_CurrentTab == 'MP1') {
                return (
                    <>
              <div className="text-sikwin text-base md:text-5xl md:p-4 p-2">Map 1 Winner</div>
                <li className="flex justify-between gap-x-6 py-5">  
              <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                  <p className=" px-8 text-sm font-semibold leading-6 text-defaul-600">Map 1 Winner</p>
                  </div>
              </div>
              <div className="flex min-w-0 gap-x-4">
                  <div className="inline-flex rounded-md shadow-sm pr-4" role="group">
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-1">{item.MW1_W1}</div>
                  </button>
                  { item.MW1_draw > 1 &&
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-2">{item.MW1_draw}</div>
                  </button>
                   }
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-3">{item.MW1_W2}</div>
                  </button>
                  </div>
              </div>
              </li>
                    </>
                )
                
            }  else if (BetList_CurrentTab.BetList_CurrentTab == 'MP2') {
                return (
                    <>
                         <div className="text-sikwin text-base md:text-5xl md:p-4 p-2">Map 2 Winner</div>
                       <li className="flex justify-between gap-x-6 py-5">  
              <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                  <p className="px-8 text-sm font-semibold leading-6 text-defaul-600">Map 2 Winner</p>
                  </div>
              </div>
              <div className="flex min-w-0 gap-x-4">
                  <div className="inline-flex rounded-md shadow-sm pr-4" role="group">
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-1">{item.MP2_W1}</div>
                  </button>
                  { item.MP2_draw > 1 &&
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-2">{item.MP2_draw}</div>
                  </button>
                  }
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-3">{item.MP2_W2}</div>
                  </button>
                  </div>
              </div>
              </li>
                    </>
                )
            } else if  (BetList_CurrentTab.BetList_CurrentTab == 'MP3')  {
                return (
                    <>
                         <div className="text-sikwin text-base md:text-5xl md:p-4 p-2">Map 3 Winner</div>
                         <li className="flex justify-between gap-x-6 py-5">  
              <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                  <p className="px-8 text-sm font-semibold leading-6 text-defaul-600">Map 3 Winner</p>
                  </div>
              </div>
              <div className="flex min-w-0 gap-x-4">
                  <div className="inline-flex rounded-md shadow-sm pr-4" role="group">
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-1">{item.MP3_W1}</div>
                  </button>
                  { item.MP2_draw > 1 &&
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-2">{item.MP3_draw}</div>
                  </button>
                  }
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-3">{item.MP3_W2}</div>
                  </button>
                  </div>
              </div>
              </li>
                    </>
                )
            } else if  (BetList_CurrentTab.BetList_CurrentTab == 'MHC') {
                return (
                    <>
                         <div className="text-sikwin text-base md:text-5xl md:p-4 p-2">Map Handicap </div>
                         <li className="flex justify-between gap-x-6 py-5">  
              <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                  <p className="px-8 text-sm font-semibold leading-6 text-defaul-600">Match Winner Handicap (-1.5)</p>
                  </div>
              </div>
              <div className="flex min-w-0 gap-x-4">
                  <div className="inline-flex rounded-md shadow-sm pr-4" role="group">
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-1">{item.MP3_W1}</div>
                  </button>
                  { item.MP2_draw > 1 &&
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-2">{item.MP3_draw}</div>
                  </button>
                  }
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-3">{item.MP3_W2}</div>
                  </button>
                  </div>
              </div>
              </li>
                    </>
                )
            } else {
                return (
                    <>
                      <div className="text-sikwin text-base md:text-5xl md:p-4 p-2">Match Winner</div>
              <ul role="list" className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-6 py-5">  
              <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                  <p className=" px-8 text-sm font-semibold leading-6 text-defaul-600">Match Winner</p>
                  </div>
              </div>
              <div className="flex min-w-0 gap-x-4">
                  <div className="inline-flex rounded-md shadow-sm pr-4" role="group">
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-1">{item.MW1_W1}</div>
                  </button>
                  { item.MW1_draw > 1 &&
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-2">{item.MW1_draw}</div>
                  </button>
                   }
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-3">{item.MW1_W2}</div>
                  </button>
                  </div>
              </div>
              </li>
              <li className="flex justify-between gap-x-6 py-5">  
              <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                  <p className="px-8 text-sm font-semibold leading-6 text-defaul-600">Map 2 Winner</p>
                  </div>
              </div>
              <div className="flex min-w-0 gap-x-4">
                  <div className="inline-flex rounded-md shadow-sm pr-4" role="group">
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-1">{item.MP2_W1}</div>
                  </button>
                  { item.MP2_draw > 1 &&
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-2">{item.MP2_draw}</div>
                  </button>
                  }
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-3">{item.MP2_W2}</div>
                  </button>
                  </div>
              </div>
              </li>
              <li className="flex justify-between gap-x-6 py-5">  
              <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                  <p className="px-8 text-sm font-semibold leading-6 text-defaul-600">Map 3 Winner</p>
                  </div>
              </div>
              <div className="flex min-w-0 gap-x-4">
                  <div className="inline-flex rounded-md shadow-sm pr-4" role="group">
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-1">{item.MP3_W1}</div>
                  </button>
                  { item.MP2_draw > 1 &&
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-2">{item.MP3_draw}</div>
                  </button>
                  }
                  <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                      <div className="odds-3">{item.MP3_W2}</div>
                  </button>
                  </div>
              </div>
              </li>
              </ul>
                    </>
                  )
            }
        
          })
       }
    </>
  );
}


export default ViewMatchBetList;
