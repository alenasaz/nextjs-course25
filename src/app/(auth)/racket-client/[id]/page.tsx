import { FC, Suspense } from "react";
import { Metadata } from "next";
import { getMetaRacketById } from "@/services/get-meta-racket-by-id";
import { getRacketById } from "@/services/get-racket-by-id";

import { SWRConfig } from "swr";
import { ProductContainer } from "./racket-container";

type Props = {
  params: Promise<{ racketId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { racketId } = await params;

  const result = await getMetaRacketById({ id: racketId });

  if (result.isError || !result.data) {
    return {
      title: "tennis racket",
    };
  }

  return {
    title: result.data.name,
    description: result.data.description,
  };
};

const RacketPage: FC<Props> = async ({ params }) => {
  const { racketId } = await params;

  const result = await getRacketById({ id: racketId });

  return (
    <SWRConfig
      value={{
        fallback: {
          [`product/${racketId}`]: result,
        },
        revalidateOnFocus: false,
      }}
    >
      <ProductContainer productId={racketId} />
    </SWRConfig>
  );
};

export default RacketPage;
