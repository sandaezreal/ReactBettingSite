
"use client";
import GameList from '@/app/component/layout/GameSection/gameList';
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
           <GameList gametype={gametype.current}></GameList>
        </Tabs.Item>
        <Tabs.Item title="Popular">
        <GameList  gametype='Popular'></GameList>
        </Tabs.Item>
        <Tabs.Item  icon={FaCircleMinus } title="Live">
        <GameList  gametype='Live'></GameList>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default Esport;