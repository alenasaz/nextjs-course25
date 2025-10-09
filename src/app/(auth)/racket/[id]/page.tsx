import Racket from "@/components/RacketCard";
import { getMetaRacketById } from "@/services/get-meta-racket-by-id";
import { getRacketById } from "@/services/get-racket-by-id";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;

  const { data } = await getMetaRacketById({ id: id });

  if (!data) {
    return {
      title: "Racket Page",
    };
  }

  return {
    title: data.name,
    description: data.description,
  };
};

const RacketPage = async ({ params }: Props) => {
  const { id } = await params;
  const { data, isError } = await getRacketById({ id });

  const { data: metaData } = await getMetaRacketById({ id: id });
  if (!metaData) {
    return notFound();
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <Racket racket={data} />
    </div>
  );
};

export default RacketPage;
