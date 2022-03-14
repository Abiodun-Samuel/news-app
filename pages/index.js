import Head from "next/head";
import Image from "next/image";
import PostList from "../components/PostList";
// import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Webdev News</title>
        <meta name="keywords" content="web development" />
      </Head>
      <PostList posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
