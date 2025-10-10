"use client";

import Image from "next/image";

import styles from "./racket.module.css";
import { RacketType } from "@/types/types";
import { FavoriteButton } from "./FavoriteButton";
import { UserContext } from "@/app/providers/user-provider";
import { use } from "react";
import { useIsFavoriteById } from "@/app/providers/hooks";

type RacketProps = {
  racket: RacketType;
};

const Racket = ({ racket }: RacketProps) => {
  const { isAuthorized } = use(UserContext);

  const isFavoriteGlobal = useIsFavoriteById({
    id: racket.id,
    isFavoriteInitial: Boolean(racket?.userData),
  });

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.name}>{racket.name}</div>
        <div className={styles.description}>{racket.description}</div>
      </div>

      <div>
        {isFavoriteGlobal && (
          <div className={styles.bookmark}>
            <Image
              src="http://localhost:4000/bookmark.png"
              alt="bookmark"
              width={50}
              height={50}
              className="absolute top-2 right-2 z-10"
            />
          </div>
        )}
        <div className={styles.imageContainer}>
          <Image
            width={300}
            height={300}
            src={racket.imageUrl}
            alt={racket.name}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.price}>${racket.price}</div>
      {isAuthorized && (
        <FavoriteButton isFavorite={false} productId={racket.id} />
      )}
    </div>
  );
};

export default Racket;
