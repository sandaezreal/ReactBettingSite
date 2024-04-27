
"use client";
import SportsList from './sportsList';
import {Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";

export function SportsBetting() {
  const tabsRef = useRef<TabsRef>(null);
  const gametype = useRef<any>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <Tabs aria-label="Default tabs" style="default" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
        <Tabs.Item active  title="Up Next">
           <SportsList gametype="UpNext"></SportsList>
        </Tabs.Item>
        <Tabs.Item title="Popular">
        <SportsList  gametype='Popular'></SportsList>
        </Tabs.Item>
        <Tabs.Item  icon={FaCircleMinus } title="Live">
        <SportsList  gametype='Live'></SportsList>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default SportsBetting;