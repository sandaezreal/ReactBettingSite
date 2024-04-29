
"use client";
import { Button } from "flowbite-react";
import {Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import BetSlipForm from '@/app/component/BetSlip/BetSlipForm';
import React, {
  useContext,
} from 'react';
import { RootContext } from '@/app/contexts';

export function Esport() {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
  
    <div className="flex flex-col gap-x-11">
      <Tabs aria-label="Default tabs" style="default" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
        <Tabs.Item active title="Bet Slip">
            <BetSlipForm/>
        </Tabs.Item>
        <Tabs.Item title="Your Bets">
          <span className="font-medium text-gray-800 dark:text-white">{`It's so empty...`}</span>
        </Tabs.Item>                   
      </Tabs>
      <Button className="total_Bet">Total Bet</Button>
    </div>
    
  );
}

export default Esport;