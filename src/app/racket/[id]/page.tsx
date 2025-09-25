import Racket from "@/components/RacketCard";
import { getRacketById } from "@/services/get-racket-by-id";

type Props = {
  params: Promise<{ id: string }>;
};

const RacketPage = async ({ params }: Props) => {
  const { id } = await params;
  const { data, isError } = await getRacketById({ id });

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
