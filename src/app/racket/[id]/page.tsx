import Racket from "@/components/RacketCard";
import { rackets } from "../../../../public/mockData";
import { RacketType } from "@/components/CarouselCard";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateStaticParams = async () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const RacketPage = async ({ params }: Props) => {
  const { id } = await params;
  const racket = rackets.find(
    (racket): racket is RacketType => racket.id == Number(id)
  );
  return <div>{racket && <Racket racket={racket} />}</div>;
};

export default RacketPage;
