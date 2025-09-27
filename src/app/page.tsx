import { FC, Suspense } from "react";

import styles from "./page.module.css";
import RacketsContainer from "@/components/RacketsContainer";
import Top10RacketsContainer from "@/components/Top10RacketsContainer";

const Page: FC = () => {
  return (
    <div>
      <main>
        <Suspense fallback={<div>Loading rackets...</div>}>
          <RacketsContainer />
        </Suspense>
        <div className={styles.headerTitle}> TOP-10</div>
        <Suspense fallback={<div>Loading top-10 rackets...</div>}>
          <Top10RacketsContainer />
        </Suspense>
      </main>
    </div>
  );
};
export default Page;
