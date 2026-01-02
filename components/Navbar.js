import React from 'react'
import Link from 'next/link'
export const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between items-center px-3 text-white'>
      <div className="logo font-bold text-lg">
        <Link  href="/" >Bitlinks</Link>
      </div>
      <ul className='flex items-center justify-center gap-4'>
        <Link  href="/" ><li>Home</li></Link>
        <Link  href="/about" ><li>About</li></Link>
        <Link  href="/shorten" ><li>Shorten</li></Link>
        <Link  href="/contact" ><li>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>

        </li>
      </ul>
    </nav>
  )
}


