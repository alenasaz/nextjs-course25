import { BASE_API_URL } from "@/constants/constants";
import { RacketType, Response } from "@/types/types";

type Params = {
  id: string;
};

export const getMetaRacketById = async ({
  id,
}: Params): Promise<Response<RacketType>> => {
  const result = await fetch(`${BASE_API_URL}/meta/product/${id}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: RacketType } = await result.json();

  return { isError: false, data: data.product };
};
