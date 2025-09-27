import RacketList from "@/components/RacketList";
import { getTop10Rackets } from "@/services/get-top-10-rackets";
import { FC } from "react";

const RacketsTop10Page: FC = async () => {
  const { data, isError } = await getTop10Rackets();

  if (isError) {
    return "error";
  }

  if (!data) {
    return "no result";
  }

  return (
    <main>
      <RacketList items={data} />
    </main>
  );
};

export default RacketsTop10Page;
