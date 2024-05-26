// src/components/Posts.js
import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css"; // Import the CSS file
import posts from "../utils/data";

const Posts = () => {
  return (
    <div className="posts">
      <h2 className="posts-title">Posts</h2>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/posts/${post.id}`} className="post-link">
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-details">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.content.slice(0, 100)}...</p>
                <p className="post-meta">
                  <span>By {post.author}</span> | <span>{post.date}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
