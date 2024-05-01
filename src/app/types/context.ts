import React from 'react';

export type RootState = {
  globalFilterMatch: string | null;
  setglobalFilterMatch: React.Dispatch<React.SetStateAction<string | null>>;
  globalMatchSchedules: any | undefined;
  setglobalMatchSchedules: React.Dispatch<React.SetStateAction<any | undefined>>;
  globalActiveBet: number | 0;
  setglobalActiveBet: React.Dispatch<React.SetStateAction<number | 0>>;
  globalActiveBetSlip: any | undefined;
  setglobalActiveBetSlip: React.Dispatch<React.SetStateAction<any | undefined>>;
  globalBetOnProcess: any | undefined;
  setglobalBetOnProcess: React.Dispatch<React.SetStateAction<any | undefined>>;
  globalTotalOdds: number | 0 ;
  setglobalTotalOdds: React.Dispatch<React.SetStateAction<any | undefined>>;
  globalTotalStake: number | 0 ;
  setglobalTotalStake: React.Dispatch<React.SetStateAction<any | undefined>>;
  globalTotalPayout: number | 0 ;
  setglobalTotalPayout: React.Dispatch<React.SetStateAction<any | undefined>>;
  globalOpenBet: any | undefined;
  setglobalOpenBet: React.Dispatch<React.SetStateAction<any | undefined>>;
}
