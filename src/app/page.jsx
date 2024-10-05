import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className="bg-white h-full">
      <div className="flex items-center justify-center h-screen gap-4">
        <img className="rounded-full w-64 h-64 mb-5 shadow-lg" src="https://plus.unsplash.com/premium_vector-1721918268415-261cbc61984c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="border-l border-black h-40 mx-4"></div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-medium">Welcome to Login System.</h1>
          <Link href='/login' className="px-6 py-3 mt-6 font-bold bg-black text-white rounded-full hover:bg-white hover:text-black transition-all">Get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default page