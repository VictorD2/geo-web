/* eslint-disable react-hooks/exhaustive-deps */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "remixicon/fonts/remixicon.css";
import "leaflet/dist/leaflet.css";
import Head from "next/head";
import { GlobalProvider } from "@contexts/global.context";
import SplashLayout from "@layout/splash.layout";
import tailwind from "../../tailwind.config";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const privateRoutes = ["/home"];
  const authRoutes = ["/"];

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      if (authRoutes.includes(router.route)) router.push("/home");
      setTimeout(() => setLoading(true), 2000);
      return;
    } else {
      if (privateRoutes.includes(router.route)) router.push("/");
      setTimeout(() => setLoading(true), 2000);
      return;
    }
  }, [router.route]);

  return (
    <GlobalProvider>
      <>
        <Head>
          <title>Geo Web</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {!loading && <SplashLayout />}
        {loading && (
          <>
            <NextNProgress
              showOnShallow={false}
              color={tailwind.theme.colors.secondary}
            />
            <ToastContainer />
            <Component {...pageProps} />
          </>
        )}
      </>
    </GlobalProvider>
  );
};

export default App;
