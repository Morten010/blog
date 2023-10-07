import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from '../__generated__';
import Mdx from '../components/Mdx';

export default function Page() {
    const {slug} = useParams()

    if(!slug){
        return <p>Redirect later</p>
    }

    const GET_PAGE = gql(`
        query getPages($slug: String!) {
            page(where: {slug: $slug}) {
                slug
                subtitle
                title
                updatedAt
                publishedAt
                id
                content {
                    markdown
                }
            }
        }
    `)

    const { loading, error, data } = useQuery(GET_PAGE, {
        variables: {
            slug: slug
        }
    });
    console.log(data);
    
    
  return (
    <div
    className='max-w-screen-lg mx-auto'
    >
        <h1>{data?.page?.title}</h1>
        {data?.page?.subtitle && (
            <p>
                {data?.page?.subtitle}
            </p>
        )}
        <p>
            Published: {new Date(data?.page?.publishedAt).toLocaleDateString(undefined, {
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
            })} {" "}
            {data?.page?.updatedAt && <br />}
            {data?.page?.updatedAt && ` updated: ${new Date(data.page.updatedAt).toLocaleDateString(undefined, {
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
            })}`}
        </p>
        <Mdx>        
            {data?.page?.content.markdown}
        </Mdx>
    </div>
  )
}
