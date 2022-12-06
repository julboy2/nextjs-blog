import Head from "next/head";
import { useEffect, useState } from "react";
import Layout, { siteTitle } from "../components/layout";
//import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

// ssg 방법
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// ssr 방법
// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Home() {
  // csr 방법 시작 : Home 에서 { allPostsData } 삭제해준다.
  const [allPostsData, setAllPostsData] = useState([]);
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setAllPostsData(data.allPostsData));
  }, []);
  // csr 방법 끝

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
