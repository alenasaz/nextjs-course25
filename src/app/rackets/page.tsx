import RacketList from "@/components/RacketList";
import { FC } from "react";
import styles from "./page.module.css";
import { getRackets } from "@/services/get-rackets";

const RacketsPage: FC = async () => {
  const { data, isError } = await getRackets({ page: 1, limit: 20 });

  if (isError) {
    return "error";
  }

  if (!data) {
    return "no result";
  }

  return (
    <div className={styles.racketsPageWrapper}>
      <main>
        <RacketList items={data} />
      </main>
    </div>
  );
};
export default RacketsPage;
