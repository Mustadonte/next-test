import { NextResponse } from 'next/server';
import { posts } from './posts';

export const GET = async req => {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get('q');

  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  }

  return NextResponse.json(currentPosts);
};

export const POST = async req => {
  const body = await req.json();

  return NextResponse.json({ body });
};
