import { FC } from "react";
import RacketCarousel from "./Carousel";
import { getTop10Rackets } from "@/services/get-top-10-rackets";
import { notFound } from "next/navigation";

const Top10RacketsContainer: FC = async () => {
  const { data, isError } = await getTop10Rackets();

  if (isError) return notFound();
  if (!data) return notFound();

  return <RacketCarousel dataRacket={data} />;
};

export default Top10RacketsContainer;
