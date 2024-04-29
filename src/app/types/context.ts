import React from 'react';

export type RootState = {
  globalActiveBet: number | 0;
  setglobalActiveBet: React.Dispatch<React.SetStateAction<number | 0>>;
  globalActiveBetSlip: any | undefined;
  setglobalActiveBetSlip: React.Dispatch<React.SetStateAction<any | undefined>>;
  globalBetOnProcess: any | undefined;
  setglobalBetOnProcess: React.Dispatch<React.SetStateAction<any | undefined>>;
  globalTotalOdds: number | 0 ;
  setglobalTotalOdds: React.Dispatch<React.SetStateAction<any | undefined>>;
}
