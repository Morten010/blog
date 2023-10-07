import React from 'react'
import { gql } from '../__generated__'
import { useQuery } from '@apollo/client';

export default function Hero() {
    const GET_HERO = gql(`
        query getHero {
            posts(orderBy: createdAt_DESC, first: 1) {
            id
            title
            slug
            coverImage {
                altText
                url
            }
            }
        }      
    `)

    const { loading, error, data } = useQuery(GET_HERO)

    console.log(data);
    
  return (
    <header>
        <div
        className='relative mb-3 w-full'
        >
            <img 
            className='bg-gray-400 aspect-video w-full'
            src={data?.posts[0].coverImage?.url} 
            alt={data?.posts[0].coverImage?.altText ? data?.posts[0].coverImage?.altText : data?.posts[0].title}
            />
            <div
            className='flex absolute bottom-3 left-3 sm:gap-3 gap-1 text-sm md:text-lg font-semibold flex-wrap'
            >
                <p
                className=' bg-white sm:px-4 md:py-2 rounded-full px-2 py-1'
                >
                    Newest blog
                </p>
                <h3
                className=' bg-white sm:px-4 md:py-2 rounded-full px-2 py-1 text-ellipsis overflow-hidden max-w-[87vw] whitespace-nowrap'
                >
                    {data?.posts[0].title}
                </h3>
            </div>
        </div>
        
    </header>
  )
}
