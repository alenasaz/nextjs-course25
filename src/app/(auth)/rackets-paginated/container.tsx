"use client";

import { useSearchParams } from "next/navigation";
import { FC } from "react";
import useSWR from "swr";
import { LIMIT } from "./constants";

import styles from "./page.module.css";
import { BASE_API_URL } from "@/constants/constants";
import RacketList from "@/components/RacketList";

const fetcher = async (path: string) => {
  const response = await fetch(`${BASE_API_URL}/${path}`, {
    credentials: "include",
  });

  const result = await response.json();

  return { data: result };
};

export const RacketsContainer: FC = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "") || 1;

  const { data, error, isLoading } = useSWR(
    `products?page=${page}&limit=${LIMIT}`,
    fetcher,
    {
      revalidateIfStale: false,
    }
  );

  const updatePage = (page: number) => {
    window.history.pushState({}, "", `?page=${page}&limit=${LIMIT}`);
  };

  const rackets = data?.data;

  if (error) {
    return "error";
  }

  if (isLoading && !rackets?.length) {
    return "isLoading";
  }

  if (!rackets?.length) {
    return "no data";
  }

  return (
    <div>
      <RacketList items={rackets} />
      <div className={styles.pagination}>
        {page > 1 && (
          <button
            className={styles.button}
            onClick={() => updatePage(page - 1)}
          >
            Предыдущая
          </button>
        )}

        <span className={styles.pageNumber}>{page}</span>

        {rackets.length >= LIMIT && (
          <button
            className={styles.button}
            onClick={() => updatePage(page + 1)}
          >
            Следующая
          </button>
        )}
      </div>
    </div>
  );
};
