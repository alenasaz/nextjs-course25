import { FC } from "react";
import { rackets } from "../../public/mockData";
import RacketCarousel from "@/components/Carousel";

const Page: FC = () => {
  return (
    <div>
      <main>
        <RacketCarousel dataRacket={rackets} />
      </main>
    </div>
  );
};
export default Page;
