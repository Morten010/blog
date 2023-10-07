import React from 'react'

export type BlogCardProps = {
    __typename?: "Post" | undefined;
    id: string;
    slug: string;
    excerpt?: string | null | undefined;
    title: string;
    coverImage?: {
        __typename?: "Asset" | undefined;
        altText?: string | null | undefined;
        url: string;
    } | null | undefined;
}

export default function BlogCard({
    id,
    slug,
    title,
    coverImage,
    excerpt
}: BlogCardProps ) {
  return (
    <article
    className='flex flex-col gap-2'
    >
      <img 
      src={coverImage?.url} 
      alt={coverImage?.altText + " "} 
      className='rounded-lg aspect-video object-cover'
      />
      <h3
      className='mt-3 text-xl font-semibold'
      >
        {title}
      </h3>
      <p>{excerpt}</p>
      <a 
      href={`/blogs/${slug}`}
      className='underline underline-offset-4 mt-auto'
      >
        View post
      </a>
    </article>
  )
}
