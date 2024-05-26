// src/components/PostDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import "./PostDetail.css";
import posts from "../utils/data";

const PostDetail = () => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));

  if (!post) {
    return <div className="post-not-found">Post not found</div>;
  }

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} className="post-image1" />
      <div className="post-content">{post.content}</div>
      <div className="post-meta">
        <span>By {post.author}</span> | <span>{post.date}</span>
      </div>
    </div>
  );
};

export default PostDetail;
