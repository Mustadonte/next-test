import Link from "next/link";


const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        }
    })

    if (!response.ok) {
        throw new Error('Unable fetch posts')
    }
    return response.json();
}

const Blog = async () => {

    const posts = await getData();
    return (
        <>
            <h1 className="mb-5 text-2xl">Blog page</h1>

            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}



export default Blog