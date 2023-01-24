import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllPublished } from '../../lib/notion';
import Classes from "./blog.module.css";

const blog = ({ posts }) => {
    if (!posts) return <h1>No posts</h1>

    return (<div className={Classes.container}>
        <main className={Classes.main}>
            <h1>Blog</h1>
            {posts.map((post, index) => {
                return (<section key={index}>
                    <div>
                        <h2>
                            <Link href={post.slug}>
                                <a>{post.title}</a>
                            </Link>
                        </h2>
                        <div>
                            <div>{post.date}</div>
                            <p>{post.description}</p>
                        </div>
                    </div>
                </section>
                )
            }
            )
            }
        </main>
    </div>
    )
}
export default blog;
export const getStaticProps = async () => {
    const data = await getAllPublished()
  
    return {
      props: {
        posts: data,
      },
      revalidate: 60
    };
  };