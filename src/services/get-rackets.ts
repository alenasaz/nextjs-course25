import { RacketType, Response } from "@/types/types";

interface Params {
  page?: number;
  limit?: number;
}

export const getRackets = async ({
  page = 1,
  limit = 2,
}: Params): Promise<Response<RacketType[]>> => {
  const result = await fetch(
    `http://localhost:4000/api/products?page=${page}&limit=${limit}`
  );

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: RacketType[] = await result.json();

  return { isError: false, data };
};
