import { FC } from "react";
import RacketCarousel from "./Carousel";
import { getRackets } from "@/services/get-rackets";

const RacketsContainer: FC = async () => {
  const { data, isError } = await getRackets({ page: 1, limit: 10 });

  if (isError) throw new Error("Failed to load rackets");
  if (!data) throw new Error("No rackets found");

  return <RacketCarousel dataRacket={data} />;
};

export default RacketsContainer;
