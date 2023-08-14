import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { getPosts } from '../services/getPosts';

const Posts = () => {
  const { data: posts, isLoading } = useSWR('posts', getPosts);

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
