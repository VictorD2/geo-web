import "../styles/globals.css";
import "leaflet/dist/leaflet.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { GlobalProvider } from "@contexts/global.context";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <>
        <Head>
          <title>Geo Web</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ToastContainer />
        <Component {...pageProps} />
      </>
    </GlobalProvider>
  );
}
