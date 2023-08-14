import { NextResponse } from 'next/server';
import { header, cookies } from 'next/navigation';
import { redirect } from 'next/navigation';

export const DELETE = (req, { params }) => {
  const id = params.id;
  console.log(params);

  return NextResponse.json({ message: `${id} is deleted` });
};
