import "@/styles/globals.css";
import NavBar from "@/component/Navbar/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}
