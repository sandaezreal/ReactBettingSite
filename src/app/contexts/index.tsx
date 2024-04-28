import { RootState } from '@/app/types/context';
import React, { ReactElement, createContext, useMemo, useState } from 'react';

export const RootContext = createContext<RootState>({
  globalActiveBet: 0,
  setglobalActiveBet: (): void => undefined,
  globalActiveBetSlip: [],
  setglobalActiveBetSlip: (): void => undefined,
  globalBetOnProcess: [],
  setglobalBetOnProcess: (): void => undefined,
});

export function RootProvider({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const [globalActiveBet, setglobalActiveBet] = useState<number | 0>(0);
  const [globalActiveBetSlip, setglobalActiveBetSlip] = useState<any | null>([]);
  const [globalBetOnProcess, setglobalBetOnProcess] = useState< any | null>([]);
  const rootContext: RootState = useMemo(
    () => ({
      globalActiveBet,
      setglobalActiveBet,
      globalActiveBetSlip,
      setglobalActiveBetSlip,
      globalBetOnProcess,
      setglobalBetOnProcess
    }),
    [globalActiveBet,globalActiveBetSlip,globalBetOnProcess]
  );

  return (
    <RootContext.Provider value={rootContext}>{children}</RootContext.Provider>
  );
}
