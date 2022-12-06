import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>첫번째 글 타이틀</title>
      </Head>
      <h1>첫번째글</h1>
    </Layout>
  );
}
