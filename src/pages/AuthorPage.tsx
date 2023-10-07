import React from 'react'
import { gql } from '../__generated__'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import BlogCard from '../components/BlogCard';
import NotFound from './NotFound';

export default function AuthorPage() {

    const {id} = useParams()
    console.log(id);
    
    if(!id){
        return <p>Redirect later</p>
    }

    const GET_AUTHOR = gql(`
        query getAuthor($id: ID!) {
            author(where: {id: $id}) {
                id
                name
                title
                picture {
                    altText
                    url
                }
                posts {
                    excerpt
                    id
                    slug
                    title
                    coverImage {
                    altText
                    url
                    }
                }
            }
        }      
    `)

    const { loading, error, data } = useQuery(GET_AUTHOR, {
        variables: {
            id: id
        }
    });

    
    if(data?.author === null){
        return <NotFound title='Author not found' />
    }
    

  return (
    <div
    className=''
    >
        <section
        className='bg-[#f5f5f7]'
        >
            <div
            className='max-w-screen-lg mx-auto p-3 flex items-center gap-4'
            >
                <img 
                className='w-16 rounded-full'
                src={data?.author?.picture?.url} 
                alt={data?.author?.picture?.altText + " "} 
                />
                <div>
                    <h1
                    className='text-4xl font-semibold'
                    >
                        {data?.author?.name}
                    </h1>
                    <p
                    className='tracking-wider font-medium'
                    >
                        {data?.author?.title}
                    </p>
                </div>
            </div>
        </section>
        <section
        className='p-3 max-w-screen-lg mx-auto'
        >
            <h2
            className='text-3xl my-3 font-semibold'
            >
                {data?.author?.name} Blogs
            </h2>
            <div
            className='blog-grid'
            >
                {data?.author?.posts && data.author.posts?.map(p => (
                    <BlogCard
                    key={p.id} 
                    {...p}
                    />
                ))}
                {data?.author?.posts.length === 0 && (
                    <p
                    className='opacity-70'
                    >
                        {data.author.name} has no Blogs
                    </p>
                )}
            </div>
        </section>
    </div>
  )
}
