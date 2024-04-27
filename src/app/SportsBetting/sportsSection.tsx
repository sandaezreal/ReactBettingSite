
"use client";
import SportsLists from './sportsList';
import {Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";

export function Esport() {
  const tabsRef = useRef<TabsRef>(null);
  const gametype = useRef<any>(null);
  const [activeTab, setActiveTab] = useState(0);

  return ( 
    <div className="flex flex-col gap-3">
      <Tabs aria-label="Default tabs" style="default" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
        <Tabs.Item active  title="Up Next">
           <SportsLists gametype="UpNext"></SportsLists>
        </Tabs.Item>
        <Tabs.Item  icon={FaCircleMinus } title="Live">
        <SportsLists  gametype='Live'></SportsLists>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default Esport;