"use client";

import { Button, Drawer } from "flowbite-react";
import { useState ,useEffect } from "react";
import BetSlipContent from '@/app/component/BetSlip/BetSlipContent';
import React, {
  useContext,
} from 'react';
import { RootContext } from '@/app/contexts';

export default function BetSlipDrawer() {
  const { globalActiveBet } = useContext(RootContext);
  const [isOpen, setIsOpen] = useState(false);
  // const [activeBet] = useState<number>(0);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
  }, [globalActiveBet]);
  return (
    <>
      <div className="flex  items-center justify-center">
        <Button className="button-bet-slip" onClick={() => setIsOpen(true)}> {globalActiveBet}</Button>
      </div>
      <div className="drawer_height" >
      <Drawer   backdrop={false} open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Sugalan" />
        <Drawer.Items> 
            <div>
            <BetSlipContent></BetSlipContent>
            </div>
        </Drawer.Items>
      </Drawer>
      </div>
    </>
  );
}
