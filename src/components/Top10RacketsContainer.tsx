import { FC } from "react";
import RacketCarousel from "./Carousel";
import { getTop10Rackets } from "@/services/get-top-10-rackets";

const Top10RacketsContainer: FC = async () => {
  const { data, isError } = await getTop10Rackets();

  if (isError) throw new Error("Failed to load top-10 rackets");
  if (!data) throw new Error("No top-10 rackets found");

  return <RacketCarousel dataRacket={data} />;
};

export default Top10RacketsContainer;
