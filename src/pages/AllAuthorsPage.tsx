import React from 'react'
import { gql } from '../__generated__';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

export default function AllAuthorsPage() {

    const GET_TEAM = gql(`
        query getTeam {
            authors {
            id
            name
            stage
            title
            picture {
                altText
                url
            }
            }
        }           
    `)

    const { loading, error, data } = useQuery(GET_TEAM);

    console.log(data);
    

  return (
    <main
    className='p-3 max-w-screen-lg mx-auto'
    >
        <h1
        className='text-3xl my-2 font-semibold'
        >
            Our team
        </h1>
        <section
        className='flex flex-wrap gap-5'
        >
            {data?.authors.map(a => (
                <Link
                className='flex gap-2'
                to={`/authors/${a.id}`}
                key={a.id}
                >
                    <img 
                    className='w-16 rounded-full'
                    src={a?.picture?.url} 
                    alt={a?.picture?.altText + " "} 
                    />
                    <div>
                        <h1
                        className='text-4xl font-semibold'
                        >
                            {a?.name}
                        </h1>
                        <p
                        className='tracking-wider font-medium'
                        >
                            {a?.title}
                        </p>
                    </div>
                </Link>
            ))}
        </section>
    </main>
  )
}
