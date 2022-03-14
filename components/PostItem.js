import React from "react";
import Link from "next/link";

const PostItem = ({ post }) => {
  return (
    <Link href="/post/[id]" as={`/post/${post.id}`}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </a>
    </Link>
  );
};

export default PostItem;
