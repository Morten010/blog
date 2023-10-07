import React from 'react'
import { gql } from '../__generated__'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Mdx from '../components/Mdx'
import NotFound from './NotFound'

export default function BlogPage() {
    const {slug} = useParams()
    console.log(slug);
    

    if(!slug){
        return <p>Redirect later</p>
    }

    const GET_POST = gql(`
        query getPosts($slug: String!) {
            post(where: {slug: $slug}) {
            content {
                markdown
            }
            author {
                id
                name
            }
            date
            excerpt
            publishedAt
            stage
            title
                coverImage {
                    altText
                    url
                }
            }
        }
    `)

    const { loading, error, data } = useQuery(GET_POST, {
        variables: {
            slug: slug
        }
    });
    console.log(data);

    if(data?.post === null){
        return <NotFound title='Blog Post not found' />
    }

  return (
    <article>
        <div
        className='bg-[#f5f5f7] mb-[75px]'
        >
            <div
            className='min-h-[calc(93vh-64px)] md:min-h-[calc(70vh-64px)] grid md:grid-cols-2 grid-cols-1 grid-rows-2 md:grid-rows-1 gap-5 max-w-screen-lg mx-auto'
            >
                <div
                className='flex flex-col gap-1 justify-center items-center p-3'
                >
                    <div
                    className='w-full'
                    >
                        <div
                        className='flex gap-2 text-lg font-medium'
                        >
                            <p
                            className='pr-2 border-r-2 border-black '
                            >
                                {new Date(data?.post?.publishedAt).toLocaleDateString(undefined, {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',  
                                })}
                            </p>
                            <Link 
                            to={`/authors/${data?.post?.author?.id}`}
                            className='hover:text-blue-600 transition-colors'
                            >
                                Author: {data?.post?.author?.name}
                            </Link>
                            </div>
                            <h1
                            className='text-3xl font-bold max-w-[350px]'
                            >
                                {data?.post?.title}
                            </h1>
                        </div>
                </div>
                <div
                className='relative m-3'
                >
                    <img 
                    src={data?.post?.coverImage?.url} 
                    alt={data?.post?.coverImage?.altText + " "} 
                    className='absolute -bottom-[50px] md;
                    :left-0 left-2/4 -translate-x-2/4 w-full rounded-xl'
                    />
                </div>
            </div>
        </div>
        <div
        className='px-3 pb-3 max-w-screen-lg mx-auto'
        >
            <Mdx>
                {data?.post?.content.markdown}
            </Mdx>
        </div>
    </article>
  )
}
