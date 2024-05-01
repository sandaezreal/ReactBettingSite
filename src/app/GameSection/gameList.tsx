"use client";
import Link from "next/link";
import { Accordion } from "flowbite-react";
import { ESPORT_BET_LIST, ESPORT_BET_SCHEDULE } from "@/utils/constants";
import { RootContext } from "@/app/contexts";
import { useContext, useEffect, useState, useRef } from "react";
import { MatchSchedules } from "@/utils/MatchSchedules";
import { LiveMatch } from "@/utils/LiveMatch";
import { all } from "axios";
// import {
//   MatchSchedules,
// } from '../../../api/Esportapi';

export default function GameList(props: any) {
  const {
    globalFilterMatch,
    setglobalActiveBet,
    globalActiveBetSlip,
    setglobalActiveBetSlip,
    setglobalTotalOdds,
    globalTotalOdds,
  } = useContext(RootContext);
  const [gameType, setgameType] = useState<any | undefined>([]);
  const [uniqueDates, setuniqueDates] = useState<any | undefined>([]);
  const [uniqueTournament, setuniqueTournament] = useState<any | undefined>([]);
  // const uniqueDates: any = useRef();

  // const getMatchSchedules = async () => {
  //   try {
  //     await MatchSchedules();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleGameType = () => {
    if (props.gametype == "Live") {
      setgameType(LiveMatch);
    } else if (props.gametype == "UpNext") {
      setgameType(MatchSchedules);
    }
  };

  useEffect(() => {
    handleGameType();

    // Remove duplicates based on the 'date' property
    const uniqueDates = gameType?.reduce((acc: any, current: any) => {
      const x = acc.find((item: any) => item.date === current.date);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }


    }, []);

    setuniqueDates(uniqueDates);
    // Remove duplicates based on the 'date' property
    const tournament = gameType?.reduce((acc: any, current: any) => {
      const x = acc.find(
        (item: any) => item.tournament.name === current.tournament.name
      );
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    setuniqueTournament(tournament);
  }, [gameType]);

  function updateInput(
    matchid: number,
    matchpick: any,
    teambet: any,
    gameMode: any,
    odds: any,
    awayTeam: any,
    homeTeam: any,
    event: any
  ) {
    //var matchid = event.target.value;
    var exist = false; 
    var totalodds = 0;
    
   if (globalActiveBetSlip) {
    for (let i = 0, l = globalActiveBetSlip.length; i < l; ++i) {
      totalodds = totalodds + odds;
      setglobalTotalOdds(totalodds);
      if (globalActiveBetSlip[i].matchid === matchid) {
        globalActiveBetSlip[i].category = matchpick;
        globalActiveBetSlip[i].teambet = teambet;
        globalActiveBetSlip[i].odds = odds;
        var exist = false; 
      }  
    }

   }


    if (!globalActiveBetSlip) {
      globalActiveBetSlip.push({
        matchid: matchid,
        category: matchpick,
        teambet: teambet,
        matchhid: event.target.value,
        gameMode: gameMode,
        odds: odds,
        awayTeam: awayTeam,
        homeTeam: homeTeam,
      });
    }  else if (exist == false)  {
      globalActiveBetSlip.push({
        matchid: matchid,
        category: matchpick,
        teambet: teambet,
        matchhid: event.target.value,
        gameMode: gameMode,
        odds: odds,
        awayTeam: awayTeam,
        homeTeam: homeTeam,
      });
    }


    setglobalActiveBetSlip(globalActiveBetSlip);
    setglobalActiveBet(globalActiveBetSlip.length);
  }

  var container = uniqueDates.map(function (events: any) {
    const matchDate = new Date(events.startTimestamp * 1000).toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    );
    return (
      <>
        <div
          key={events.startTimestamp}
          className="text-sikwin text-base md:text-3xl md:p-4 p-2"
        >
          {matchDate}
        </div>
        {uniqueTournament.map(function (item: any) {
          return (
            <>
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title>
                      <div className="flex">
                        <img
                          src={`${item.tournament.category.slug}.png`}
                          className="match-icon mr-4 w-[4vw] h-[4vw] rounded-md md:rounded-2xl"
                        ></img>
                        {item.tournament.name}
                      </div>  
                    </Accordion.Title>
                    <Accordion.Content>
                      {gameType.map(function (match: any) {
                        return (
                          <>
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                              <ul
                                role="list"
                                className="divide-y divide-gray-100"
                              >
                                <li className="flex justify-between gap-x-6 py-5">
                                  <div className="flex min-w-0 gap-x-4">
                                    <div className="text-sm font-semibold leading-6 text-defaul-600"></div>
                                    <div className="min-w-0 flex-auto">
                                      <p className="text-sm font-semibold leading-6 text-defaul-600">
                                        {match.awayTeam.name}
                                      </p>
                                      <p className="text-sm font-semibold leading-6 text-defaul-600">
                                        {match.homeTeam.name}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex min-w-0 gap-x-4">
                                    <div>
                                      <div className="e-btn-group">
                                        <input
                                          type="radio"
                                          onChange={(e) =>
                                            updateInput(
                                              match.id,
                                              "W1",
                                              match.awayTeam.name,
                                              props.gameMode,
                                              2.70,
                                              match.awayTeam.name,
                                              match.homeTeam.name,
                                              e
                                            )
                                          }
                                          id={"W1" + match.id}
                                          name={match.id}
                                        />
                                        <label
                                          className="e-btn"
                                          htmlFor={"W1" + match.id}
                                        >
                                          2.70
                                        </label>
                                        
                                        {/* <input type="radio" onChange={(e) => updateInput("Draw","Draw",props.gameMode,match.draw_odds ,e)} id={"Draw" + match.tournament.id} name={match.tournament.id} value='2' />
                                                    <label className="e-btn" htmlFor={"Draw" + match.tournament.id}>1</label> */}
                                        <input
                                          type="radio"
                                          onChange={(e) =>
                                            updateInput(
                                              match.id,
                                              "W2",
                                              match.W2,
                                              match.homeTeam.name,
                                              1.40,
                                              match.awayTeam.name,
                                              match.homeTeam.name,
                                              e
                                            )
                                          }
                                          id={"W2" + match.id}
                                          name={match.id}
                                        />
                                        <label
                                          className="e-btn"
                                          htmlFor={"W2" + match.id}
                                        >
                                          1.40
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </>
                        );
                      })}
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
            </>
          );
        })}
      </>
    );
  });
   
    return <>
    {container}
    </>


}
