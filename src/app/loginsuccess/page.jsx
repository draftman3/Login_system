"use client"

import React from 'react'
import Link from 'next/link'

function loginsuccess() {

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-[#ffffff]">
        <div className="flex gap-5 bg-white px-10 py-10 rounded-2xl">
          <img className="rounded-full w-64 h-64 mb-5 shadow-lg" src="https://plus.unsplash.com/premium_vector-1716195709378-b515403a93df?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">Sign In Successful!</h1>
            <Link href='/login' className="px-6 py-3 mt-6 font-bold bg-black text-white rounded-full hover:bg-white hover:text-black transition-all">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default loginsuccess