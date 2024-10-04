import React from 'react'
import Link from 'next/link'

function registerfail() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <img className="rounded-full w-64 h-64 mb-5 shadow-lg" src="https://plus.unsplash.com/premium_vector-1716195709317-218c72114301?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnx1UXg4WlVUbHYxRXx8ZW58MHx8fHx8" alt="" />
        <h1 className="text-4xl">Registration failed. Please try again.</h1>
        <Link href='/login' className="px-6 py-3 mt-6 font-bold bg-black text-white rounded-full hover:bg-white hover:text-black transition-all">Try again</Link>
      </div>
    </div>
  )
}

export default registerfail