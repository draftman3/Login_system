import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="flex flex-row-reverse items-center bg-white py-2 shadow-lg">
        <Link href="/login" className="mr-4 px-3 py-1 bg-black text-white rounded-xl font-semibold transition-all">Log in</Link>
    </div>
  )
}

export default Navbar