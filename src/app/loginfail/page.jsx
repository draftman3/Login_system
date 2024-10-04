import React from 'react'
import Link from 'next/link'

function loginfail() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <img className="rounded-full w-64 h-64 mb-5 shadow-lg" src="https://plus.unsplash.com/premium_vector-1709212299188-b3acf34e0162?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className="text-4xl">Sign In failed. Please try again.</h1>
        <Link href='/login' className="px-6 py-3 mt-6 font-bold bg-black text-white rounded-full hover:bg-white hover:text-black transition-all">Try again</Link>
      </div>
    </div>
  )
}

export default loginfail