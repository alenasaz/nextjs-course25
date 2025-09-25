"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./carousel.module.css";
import { RacketType } from "@/types/types";

interface ImageCarouselProps {
  dataRacket: RacketType[];
  autoPlay?: boolean;
  interval?: number;
}

export default function RacketCarousel({
  dataRacket,
  autoPlay = true,
  interval = 5000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dataRacket.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + dataRacket.length) % dataRacket.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide]);

  return (
    <div
      className={styles.carousel}
      onClick={() => router.push(`/racket/${dataRacket[currentIndex].id}`)}
    >
      {/* Область изображения */}
      <div className={styles.slideContainer}>
        {dataRacket.map((racket, index) => (
          <div
            key={racket.id}
            className={`${styles.slide} ${
              index === currentIndex ? styles.slideActive : ""
            }`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={racket.imageUrl}
                alt={`Slide ${index + 1}`}
                width={350}
                height={300}
                className={styles.image}
                priority={index === 0}
              />
              <div className={styles.carouselCardTitle}>{racket.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопки навигации */}
      <button
        onClick={prevSlide}
        className={`${styles.navButton} ${styles.navButtonPrev}`}
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className={`${styles.navButton} ${styles.navButtonNext}`}
      >
        ›
      </button>

      {/* Индикаторы */}
      <div className={styles.indicators}>
        {dataRacket.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${styles.indicator} ${
              index === currentIndex
                ? styles.indicatorActive
                : styles.indicatorInactive
            }`}
          />
        ))}
      </div>
    </div>
  );
}
