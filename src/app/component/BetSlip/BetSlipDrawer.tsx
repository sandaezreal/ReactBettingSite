"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import BetSlipContent from '@/app/component/BetSlip/BetSlipContent';

export default function BetSlipDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBet] = useState<number>(0);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex  items-center justify-center">
        <Button className="button-bet-slip" onClick={() => setIsOpen(true)}> {activeBet}</Button>
          <span className="sr-only">Icon description</span>
      </div>
      <div className="drawer_height" >
      <Drawer open={isOpen} onClose={handleClose} position="right">
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
