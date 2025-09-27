import Image from "next/image";

import styles from "./racket.module.css";
import { RacketType } from "@/types/types";

type RacketProps = {
  racket: RacketType;
};

const Racket = ({ racket }: RacketProps) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.name}>{racket.name}</div>
        <div className={styles.description}>{racket.description}</div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          width={300}
          height={300}
          src={racket.imageUrl}
          alt={racket.name}
          className={styles.image}
        />
      </div>
      <div className={styles.price}>${racket.price}</div>
    </div>
  );
};

export default Racket;
