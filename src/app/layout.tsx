import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import { getUser } from "@/services/get-user";
import { UserProvider } from "./providers/user-provider";
import { FC } from "react";

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = async ({ children }) => {
  const { data } = await getUser();
  return (
    <html lang="en">
      <body>
        <UserProvider user={data}>
          <Header />
          <main>{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
