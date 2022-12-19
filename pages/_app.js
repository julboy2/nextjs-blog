import Layout from "@components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import "../styles/globals.css";
import { format } from "date-fns";
import ErrorBoundary from "@components/ErrorBoundary";

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [visitedTime] = useState(new Date());
  return (
    <Layout home={router.pathname === "/"}>
      <div>
        visitedTime: {format(visitedTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}
      </div>
      <ErrorBoundary>
        <Component {...pageProps} pathname={router.pathname} />
      </ErrorBoundary>
    </Layout>
  );
}

export default MyApp;
