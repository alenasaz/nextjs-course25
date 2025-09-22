import RacketList from "@/components/RacketList";
import { FC } from "react";
import { rackets } from "../../../public/mockData";

const RacketsPage: FC = () => {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      <main>
        <RacketList items={rackets} />
      </main>
    </div>
  );
};
export default RacketsPage;
