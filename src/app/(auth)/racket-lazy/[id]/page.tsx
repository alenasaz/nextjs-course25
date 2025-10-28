"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { FC, Suspense } from "react";

const ProductContainerDynamic = dynamic(() => import("./racket-container"), {
  ssr: false,
  loading: () => <div>loading</div>,
});
type Props = {
  params: Promise<{ racketId: string }>;
};

const RacketPage: FC<Props> = () => {
  const { racketId } = useParams();

  if (!racketId || typeof racketId !== "string") {
    return null;
  }

  return (
    <Suspense fallback="loading product ...">
      <ProductContainerDynamic productId={racketId} />
    </Suspense>
  );
};

export default RacketPage;
