"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import {useState} from 'react'
import Link from 'next/link'

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {

    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.email === email && userData.password === password) {
      localStorage.setItem('userLogin', 'true');
      router.push('/loginsuccess')
    } else {
      router.push('/loginfail')
    }
  }


  return (
    <>
        <div className="container flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col py-9 px-24 rounded-full items-center justify-center border border-[#ebebeb] bg-white shadow-lg">
            <h1 className="text-4xl mb-4 font-bold text-black">Login!</h1>
            <div className="flex gap-6">
              <img src="https://plus.unsplash.com/premium_vector-1716195709294-be3a22d19e99?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className="w-72 h-72 rounded-full mb-5" />

              <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-2">
                <input onChange={(e) => setEmail(e.target.value)} className="block p-2 rounded-full w-full border border-gray-300" type="email" placeholder='Email' />
                <input onChange={(e) => setPassword(e.target.value)} className="block p-2 rounded-full w-full border border-gray-300 " type="password" placeholder='Password' />
                <Link href='/register'className="text-[#666666]">Don't have an account?</Link>
                <button type='submit' className='bg-black text-white font-semibold px-4 py-2 mt-6 rounded-full w-full hover:bg-white hover:text-black hover:transition-all hover:ease-in-out '>Log in</button>
              </form>

            </div>
          </div>
        </div>
    </>
  )
}

export default LoginPage