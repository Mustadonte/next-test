'use client';

import Posts from '../Components/Posts';
import { useEffect, useState } from 'react';
import { getPosts } from '../services/getPosts';
import PostSearch from '../Components/PostSearch';

const Blog = () => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getPosts()
  //     .then(setPosts)
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <>
      <h1 className="mb-5 text-2xl">Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
};

export default Blog;
