export const getPosts = async () => {
  const response = await fetch('api/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('Unable fetch posts');
  }
  return response.json();
};

export const getPostsBySearch = async search => {
  const response = await fetch(`api/posts?q=${search}`);

  if (!response.ok) {
    throw new Error('Unable fetch posts');
  }
  return response.json();
};
