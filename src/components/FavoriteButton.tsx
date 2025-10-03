"use client";

import { UserContext } from "@/app/providers/user-provider";
import styles from "./favoriteButton.module.css";
import { use } from "react";

type Props = {
  isFavorite?: boolean;
};

export const FavoriteButton = ({ isFavorite = false }: Props) => {
  const { user } = use(UserContext);

  if (!user) {
    return null;
  }

  return (
    <button className={styles.button}>
      {isFavorite ? "В избранном" : "Добавить в избранное"}
    </button>
  );
};
