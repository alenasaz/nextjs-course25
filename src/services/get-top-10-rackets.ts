import { RacketType, Response } from "@/types/types";

export const getTop10Rackets = async (): Promise<Response<RacketType[]>> => {
  const result = await fetch(`http://localhost:4000/api/top-10`);

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: RacketType[] = await result.json();

  return { isError: false, data };
};
