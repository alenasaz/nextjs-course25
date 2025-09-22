"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./carouselCard.module.css";

export type RacketType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: {
    id: number;
    name: string;
  };
};

export const CarouselCard = ({ racket }: { racket: RacketType }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/racket/${racket.id}`)}
      key={racket.id}
      className={styles.carouselCard}
    >
      <div className={styles.carouselCardImageContainer}>
        <Image
          width={350}
          height={300}
          src={racket.imageUrl}
          alt={racket.name}
          className={styles.carouselCardImage}
        />
      </div>
      <div className={styles.carouselCardContent}>
        <div className={styles.carouselCardTitle}>{racket.name}</div>
        <div className={styles.carouselCardDetails}>
          {racket.brand?.name
            ? `${racket.brand.name} • ${racket.model}`
            : racket.model}{" "}
          ({racket.year})
        </div>
        <div className={styles.carouselCardPrice}>${racket.price}</div>
      </div>
    </div>
  );
};
