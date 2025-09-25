import { FC, Suspense } from "react";

import RacketCarousel from "@/components/Carousel";
import { getRackets } from "@/services/get-rackets";
import { getTop10Rackets } from "@/services/get-top-10-rackets";
import styles from "./page.module.css";

const Page: FC = async () => {
  const { data, isError } = await getRackets({ page: 1, limit: 10 });
  const { data: dataTop10, isError: isErrorTop10 } = await getTop10Rackets();

  if (isError) {
    return "error";
  }

  if (!data) {
    return "no result";
  }

  if (isErrorTop10) {
    return "error top10";
  }

  if (!dataTop10) {
    return "no result top10";
  }

  return (
    <div>
      <main>
        <Suspense fallback={<div>....loading</div>}>
          <RacketCarousel dataRacket={data} />
        </Suspense>
        <Suspense fallback={<div>....loading</div>}>
          <div className={styles.headerTitle}> TOP-10</div>
          <RacketCarousel dataRacket={dataTop10} />
        </Suspense>
      </main>
    </div>
  );
};
export default Page;
