import React from 'react'


export const generateMetadata = async ({ params: { id } }) => {
    const post = await getData(id)
    console.log(post)
    return {
        title: post.title,

    }
}

const getData = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        }
    })
    return response.json();
}

const Post = async ({ params: { id } }) => {
    const post = await getData(id)
    return (
        <>
            <h1>Post # {post.id}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post