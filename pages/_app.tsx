import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/organisms/Sidebar";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }: AppProps) {
  // Get Path Active
  const { asPath } = useRouter();
  return (
    <>
      {asPath !== "/login" && (
        <div>
          <Sidebar />
        </div>
      )}
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
