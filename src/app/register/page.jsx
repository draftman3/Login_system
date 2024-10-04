"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

function RegisterPage() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!firstname || !lastname || !email || !password) {
      router.push('/registerfail')
    } else {
      const userData = {firstname, lastname, email, password};

      localStorage.setItem('userData', JSON.stringify(userData));
      router.push('/registersuccess')
    }

    console.log(firstname, lastname, email, password)
    
  }

  return (
    <div>
      <Navbar />
        <div className="container flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col p-11 rounded-xl items-center justify-center border border-[#ebebeb] bg-white shadow-lg">
            <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
            <img src="https://plus.unsplash.com/premium_vector-1716195709294-be3a22d19e99?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className="w-52 h-52 rounded-full mb-5" />
            
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-2">
              <div className="flex gap-2">
                <input onChange={(e) => setFirstName(e.target.value)} className="block p-2 rounded-full border border-gray-300" type="text" placeholder='FirstName' />
                <input onChange={(e) => setLastName(e.target.value)} className="block p-2 rounded-full border border-gray-300" type="text" placeholder='LastName' />
              </div>
                <input onChange={(e) => setEmail(e.target.value)} className="block p-2 rounded-full w-full border border-gray-300" type="email" placeholder='Email' />
                <input onChange={(e) => setPassword(e.target.value)} className="block p-2 rounded-full w-full border border-gray-300 " type="password" placeholder='Password' />
                <button type='submit' className='bg-black text-white font-semibold px-4 py-2 mt-6 rounded-full w-full hover:bg-white hover:text-black hover:transition-all hover:ease-in-out '>Sign Up</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default RegisterPage