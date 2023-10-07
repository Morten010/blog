import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound({title}:{
  title: string
}) {
  return (
    <main
    className='grid place-content-center h-[80vh] text-center'
    >
      <img 
      src="/notfound.svg" 
      alt="Not found illustration" 
      className='mx-auto'
      />
      <h1
      className='text-3xl font-semibold capitalize text-center mt-2'
      >
        {title}
      </h1>
      <p>
        Go back to the <Link
        to="/"
        className='underline underline-offset-2 text-blue-600'
        >
        HomePage
        </Link>
      </p>
    </main>
  )
}
