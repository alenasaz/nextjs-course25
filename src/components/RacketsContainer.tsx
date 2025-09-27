import { FC } from "react";
import RacketCarousel from "./Carousel";
import { getRackets } from "@/services/get-rackets";
import { notFound } from "next/navigation";

const RacketsContainer: FC = async () => {
  const { data, isError } = await getRackets({ page: 1, limit: 10 });

  if (isError) return notFound();
  if (!data) return notFound();

  return <RacketCarousel dataRacket={data} />;
};

export default RacketsContainer;
