import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Write() {
  const idRef = useRef(undefined);
  const titleRef = useRef(undefined);
  const contentRef = useRef(undefined);

  const [showLink, setShowLink] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();

    const id = idRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (id && title && content) {
      fetch("/api/post/write", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title, content }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Fetch Error");
        })
        .then((data) => {
          setShowLink(true);
          alert(data.message);
        })
        .catch((error) => alert(`request error ${error}`));
    }
  };
  return (
    <>
      <Head>
        <title>Write a post</title>
      </Head>
      <h1>Write a post</h1>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        ></textarea>
        <br />
        <input type="submit" value="Create" />
      </form>
      {showLink && (
        <Link href={`/posts/${idRef.current.value}`}>Create post</Link>
      )}
    </>
  );
}
