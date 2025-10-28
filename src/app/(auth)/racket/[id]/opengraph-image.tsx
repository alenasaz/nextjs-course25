import { getRacketOgDataById } from "@/services/get-racket-og-data-by-id";
import { RacketType } from "@/types/types";

import { ImageResponse } from "next/og";
import { FC } from "react";

export const alt = "OG image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type Props = {
  params: Promise<{ id: string }>;
};

const Image: FC<{
  racket: RacketType;
}> = ({ racket }) => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={racket.imageUrl}
        style={{ width: "100px", height: "100px" }}
        alt=""
      />
      <div>{racket.name}</div>
    </div>
  );
};

const OGImage = async ({ params }: Props) => {
  const { id } = await params;
  const { data } = await getRacketOgDataById({ id: id });

  if (!data) {
    return null;
  }

  return new ImageResponse(<Image racket={data} />, {
    ...size,
  });
};

export default OGImage;
