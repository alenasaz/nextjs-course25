import { RacketType } from "./CarouselCard";
import Racket from "./RacketCard";
import styles from "./racketList.module.css";
import Link from "next/link";

const RacketList = ({ items }: { items: RacketType[] }) => {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Link href={`/racket/${item.id}`} key={item.id}>
          <Racket key={item.id} racket={item} />
        </Link>
      ))}
    </div>
  );
};

export default RacketList;
