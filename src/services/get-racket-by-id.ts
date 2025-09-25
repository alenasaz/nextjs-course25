import { RacketType, Response } from "@/types/types";

interface Params {
  id: string;
}

export const getRacketById = async ({
  id,
}: Params): Promise<Response<RacketType>> => {
  const result = await fetch(`http://localhost:4000/api/product/${id}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: RacketType } = await result.json();

  return { isError: false, data: data.product };
};
