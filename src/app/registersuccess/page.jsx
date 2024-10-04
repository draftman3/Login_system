import React from 'react'
import Link from 'next/link'

function registersuccess() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <img className="rounded-full w-64 h-64 mb-5" src="https://plus.unsplash.com/premium_vector-1716195709355-5c674aa78768?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className="text-4xl">Yeah! your account has been successfully created.</h1>
        <Link href='/login' className="px-6 py-3 mt-6 font-bold bg-black text-white rounded-full hover:bg-white hover:text-black transition-all">Login Page</Link>
      </div>
    </div>
  )
}

export default registersuccess