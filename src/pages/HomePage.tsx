import React from 'react'
import { gql } from '../__generated__'
import { useQuery } from '@apollo/client';
import BlogCard from '../components/BlogCard';
import Hero from '../components/Hero';
const GET_NEWEST = gql(`
  query GetNewestPosts {
    posts(first: 3, orderBy: createdAt_DESC) {
      id
      slug
      excerpt
      title
      coverImage {
        altText
        url
      }
    }
  }
`)

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_NEWEST); 
  console.log(data);
  
  return (
    <div
    className='p-3 max-w-screen-lg mx-auto'
    >
      {/* hero section */}
      <Hero />
        
      {/* newest articles */}
      <section>
        <h2
        className='text-3xl my-3 font-semibold'
        >
          Newest articles
        </h2>
        <section
        className='blog-grid'
        >
          {data?.posts.map(p => (
            <BlogCard 
            {...p}
            />
          ))}
        </section>
      </section>
    </div>
  )
}
