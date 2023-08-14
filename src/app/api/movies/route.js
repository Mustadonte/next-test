import { NextResponse } from 'next/server';

export const GET = async req => {
  const API_KEY = process.env.OMDB_SECRET;
  const query = 'matrix';
  const movies = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}
`).then(res => res.json());

  return NextResponse.json(movies);
};
