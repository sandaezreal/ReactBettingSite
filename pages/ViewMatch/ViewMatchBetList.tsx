import { Tabs } from "flowbite-react";

import ViewMatchBetListOverview from '../ViewMatch/ViewMatchBetListOverview';

export function ViewMatchBetList() {
  return (
    <Tabs aria-label="Tabs with icons" style="underline">
      <Tabs.Item active title="Match Winner">
          <ViewMatchBetListOverview  BetList_CurrentTab='MW' />
      </Tabs.Item>
      <Tabs.Item title="Map 1">
          <ViewMatchBetListOverview  BetList_CurrentTab='MP1' />
      </Tabs.Item>
      <Tabs.Item title="Map 2">
          <ViewMatchBetListOverview  BetList_CurrentTab='MP2' />
      </Tabs.Item>
      <Tabs.Item title="Map 3 ">
          <ViewMatchBetListOverview  BetList_CurrentTab='MP3' />
      </Tabs.Item>
      <Tabs.Item title="Handicap">
          <ViewMatchBetListOverview  BetList_CurrentTab='MHC' />
      </Tabs.Item>
    </Tabs>
  );
}


export default ViewMatchBetList;