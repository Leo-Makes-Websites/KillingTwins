// These styles apply to every route in the application
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./app/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
