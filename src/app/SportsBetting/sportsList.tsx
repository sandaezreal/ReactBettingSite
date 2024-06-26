
"use client";
import Link from "next/link";
import { Accordion } from "flowbite-react";
import { SPORT_BET_LIST, SPORT_BET_SCHEDULE } from "@/utils/sportconstants";


export function SportsList(gametype: any) {
  var Esport_List = SPORT_BET_SCHEDULE.map(function (item_list) {
    const formatedDate = new Date(item_list.time).toLocaleString(
      "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
    );
    const removeDuplicate = [];

    var today = new Date();
    const formatedDatetoday = new Date(today).toLocaleString(
      "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
    ); 
    return (
      <>
       <div className="text-sikwin text-base md:text-3xl md:p-4 p-2">
        {formatedDate}</div>
              <Accordion>
              <Accordion.Panel>
              <Accordion.Title><div className="flex"><img src={`${item_list.esport_game}.png`} className="match-icon mr-4 w-[4vw] h-[4vw] rounded-md md:rounded-2xl"></img>{item_list.event}</div></Accordion.Title>
              <Accordion.Content>
                          {   SPORT_BET_LIST.map(function (item) {
                              const Esport_bet_time = new Date(item.time).toLocaleString(
                                "en-US",
                                  {
                                    hour:  "2-digit",
                                    minute: "2-digit"
                                  }
                              );
                              const compare = new Date(item.time).toLocaleString(
                                "en-US",
                                  {
                                    month: "short",
                                    day: "2-digit",
                                    year: "numeric",
                                  }
                              );
                               
                return (
                  <> 
                    { (formatedDate == compare ) && item.esport_game == item_list.esport_game && item.category == gametype.gametype ? (
               <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
               <ul role="list" className="divide-y divide-gray-100">
                 <li className="flex justify-between gap-x-6 py-5">   
                   <Link  href={{ pathname: 'ViewMatch', query: { category: 'Sports', matchid : item.id , esport_game: item_list.esport_game} }} >
                     <div className="flex min-w-0 gap-x-4">
                     <div className="text-sm font-semibold leading-6 text-defaul-600">{Esport_bet_time}</div> 
                     <div className="min-w-0 flex-auto">
                       <p className="text-sm font-semibold leading-6 text-defaul-600">{item.W1}</p> 
                       <p className="text-sm font-semibold leading-6 text-defaul-600">{item.W2}</p>
                     </div>
                   </div>
                   </Link>
                 
                   <div className="flex min-w-0 gap-x-4">
                     <div className="inline-flex rounded-md shadow-sm" role="group">
                       <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                         <div className="odds-1">{item.W1_odds}</div>
                       </button>
                        { item.draw_odds > 1 &&
          
                            <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <div className="odds-2">{item.draw_odds}</div>
                          </button>
      
                        }
                       <button type="button" className="px-2 py-2 text-sm font-medium text-defaul-600 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                         <div className="odds-3">{item.W2_odds}</div>
                       </button>
                     </div>
                   </div>
                 </li>
               </ul>
             </div>
          ): (<></>
          )}   
                  </>
                );
              })}
              </Accordion.Content>
            </Accordion.Panel> 
          </Accordion>
      </>
    );
  });
  return (
    <>
    {Esport_List}
 
    </>
  );
}

export default SportsList;
