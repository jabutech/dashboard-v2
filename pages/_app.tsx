import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/organisms/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
