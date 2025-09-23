import RacketList from "@/components/RacketList";
import { FC } from "react";
import { rackets } from "../../../public/mockData";
import styles from "./page.module.css";

const RacketsPage: FC = () => {
  return (
    <div className={styles.racketsPageWrapper}>
      <main>
        <RacketList items={rackets} />
      </main>
    </div>
  );
};
export default RacketsPage;
