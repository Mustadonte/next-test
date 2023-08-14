'use client';
import useSWR from 'swr';
import { useState } from 'react';
import { getPostsBySearch } from '../services/getPosts';

const PostSearch = ({ onSearch }) => {
  const { mutate } = useSWR('posts');
  const handleSubmit = async e => {
    e.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  };

  const [search, setSearch] = useState('');
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
        className="text-amber-500 p-1"
      />
      <button type="submut" className=" pl-1 pr-1 ml-4 border border-white rounded-md h-8">
        Send
      </button>
    </form>
  );
};

export default PostSearch;
