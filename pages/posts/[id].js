import Date from "@components/Date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import { MDXRemote } from "next-mdx-remote";
import Button from "@components/Button";
import Head from "next/head";
import { siteTitle } from "pages/_document";
//import dynamic from "next/dynamic";

// const Button = dynamic(() => import("../../components/Button"), {
//   loading: () => <div>Loading...</div>,
// });

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview }) {
  console.log(`>>>>> ${preview}`);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const components = { Button };

export default function Post({ postData, pathname }) {
  return (
    <>
      <Head>
        <title>{`${postData.title} - ${siteTitle}`}</title>
      </Head>
      <article>
        <h2>{pathname}</h2>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <br />
        {postData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
        {postData.mdxSource && (
          <MDXRemote {...postData.mdxSource} components={components} />
        )}
      </article>
    </>
  );
}
