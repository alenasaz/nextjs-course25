"use client";

import { IUser } from "@/types/types";
import { createContext, FC, PropsWithChildren } from "react";

interface UserContextType {
  user: IUser | null | undefined;
  isAuthorized: boolean;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  isAuthorized: false,
});

interface Props extends PropsWithChildren {
  user: IUser | null | undefined;
}

export const UserProvider: FC<Props> = ({ children, user }) => {
  return (
    <UserContext value={{ user, isAuthorized: Boolean(user) }}>
      {children}
    </UserContext>
  );
};
