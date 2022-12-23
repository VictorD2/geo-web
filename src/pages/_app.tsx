import "../styles/globals.css";
import "leaflet/dist/leaflet.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { GlobalProvider } from "@contexts/global.context";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <>
        <ToastContainer />
        <Component {...pageProps} />
      </>
    </GlobalProvider>
  );
}
