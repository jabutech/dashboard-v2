import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import Sidebar from "../components/organisms/Sidebar";

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
