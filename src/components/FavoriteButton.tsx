"use client";

import { UserContext } from "@/app/providers/user-provider";
import styles from "./favoriteButton.module.css";
import { use, useCallback } from "react";
import { useSetIsFavorite } from "@/app/providers/hooks";

type Props = {
  isFavorite?: boolean;
  productId: number;
};

const handleFavorite = async ({ isFavorite, productId }: Props) => {
  const url = `http://localhost:4000/api/product/${productId}/favorite`;

  return isFavorite
    ? fetch(url, {
        credentials: "include",
        method: "DELETE",
      })
    : fetch(url, {
        credentials: "include",
        method: "POST",
      });
};

export const FavoriteButton = ({ isFavorite = false, productId }: Props) => {
  const { user } = use(UserContext);
  const setFavorite = useSetIsFavorite();

  const handleClick = useCallback(
    async ({ isFavorite, productId }: Props) => {
      setFavorite({ id: productId, isFavorite: !isFavorite });
      await handleFavorite({ isFavorite, productId });
    },
    [setFavorite]
  );

  if (!user) {
    return null;
  }

  return (
    <button
      className={styles.button}
      onClick={() => handleClick({ isFavorite, productId })}
    >
      {isFavorite ? "В избранном" : "Добавить в избранное"}
    </button>
  );
};
