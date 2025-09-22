import { FC } from "react";
import { rackets } from "../../public/mockData";
import ImageCarousel from "@/components/Carousel";

const Page: FC = () => {
  const data = rackets;
  return (
    <div>
      <main>
        <ImageCarousel dataRacket={data} />
      </main>
    </div>
  );
};
export default Page;
