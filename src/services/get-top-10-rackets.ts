import { BASE_API_URL } from "@/constants/constants";
import { RacketType, Response } from "@/types/types";

export const getTop10Rackets = async (): Promise<Response<RacketType[]>> => {
  const result = await fetch(`${BASE_API_URL}/top-10`, {
    next: { tags: ["getTop10Rackets"], revalidate: 15 },
  });

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: RacketType[] = await result.json();

  return { isError: false, data };
};
