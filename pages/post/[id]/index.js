import React from "react";
import Link from "next/link";

const index = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
      <Link href="/"> Back</Link>
    </>
  );
};

// export const getServerSideProps = async (context) => {
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default index;
