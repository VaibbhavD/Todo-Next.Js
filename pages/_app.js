import "@/styles/globals.css";
import NavBar from "@/component/Navbar/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}
