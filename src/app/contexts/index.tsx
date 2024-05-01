import { RootState } from '@/app/types/context';
import React, { ReactElement, createContext, useMemo, useState } from 'react';

export const RootContext = createContext<RootState>({
  globalFilterMatch: null,
  setglobalFilterMatch: (): void => undefined,
  globalMatchSchedules: [],
  setglobalMatchSchedules: (): void => undefined,
  globalActiveBet: 0,
  setglobalActiveBet: (): void => undefined,
  globalActiveBetSlip: [],
  setglobalActiveBetSlip: (): void => undefined,
  globalBetOnProcess: [],
  setglobalBetOnProcess: (): void => undefined,
  globalTotalOdds: 0,
  setglobalTotalOdds: (): void => undefined,
  globalTotalStake: 0,
  setglobalTotalStake: (): void => undefined,
  globalTotalPayout: 0,
  setglobalTotalPayout: (): void => undefined,
  globalOpenBet: [],
  setglobalOpenBet: (): void => undefined,
});

export function RootProvider({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const [globalFilterMatch, setglobalFilterMatch] = useState< string | null>('all');
  const [globalMatchSchedules, setglobalMatchSchedules] = useState< any | null>([]);
  const [globalActiveBet, setglobalActiveBet] = useState<number | 0>(0);
  const [globalActiveBetSlip, setglobalActiveBetSlip] = useState<any | null>([]);
  const [globalBetOnProcess, setglobalBetOnProcess] = useState< any | null>([]);
  const [globalTotalOdds, setglobalTotalOdds] = useState<number | 0>(0);
  const [globalTotalStake, setglobalTotalStake] = useState<number | 0>(0);
  const [globalTotalPayout, setglobalTotalPayout] = useState<number | 0>(0);
  const [globalOpenBet, setglobalOpenBet] = useState<number | 0>(0);
  const rootContext: RootState = useMemo(
    () => ({
      globalFilterMatch,
      setglobalFilterMatch,
      globalMatchSchedules,
      setglobalMatchSchedules,
      globalActiveBet,
      setglobalActiveBet,
      globalActiveBetSlip,
      setglobalActiveBetSlip,
      globalBetOnProcess,
      setglobalBetOnProcess,
      globalTotalStake,
      setglobalTotalStake,
      globalTotalOdds,
      globalTotalPayout,
      setglobalTotalPayout,
      setglobalTotalOdds,
      globalOpenBet,
      setglobalOpenBet
    }),
    [globalFilterMatch,globalMatchSchedules,globalActiveBet,globalActiveBetSlip,globalBetOnProcess,globalTotalOdds,globalOpenBet,globalTotalStake,globalTotalPayout]
  );

  return (
    <RootContext.Provider value={rootContext}>{children}</RootContext.Provider>
  );
}
