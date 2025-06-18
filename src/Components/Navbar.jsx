import React from 'react'

export default function Navbar() {
  return (
   <>
   <nav className="bg-black fixed top-0 left-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
     
    
      
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">MEN</a>
        <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">WOMEN</a>
        <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">KIDS</a>
        <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">STORE LOCATOR</a>
        <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">CONTACT US</a>
      </div>
       <input type="text"
               className=" w-70 pl-5 pr-4 py-2  border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Search..."></input>
      <div className='ml-3 space-x-2'>
         
        <a href='#'className='text-white px-3  font-medium py-7'>LOGIN</a>
        <a href='#' className='text-white px-3  font-medium py-7'>CART</a>
      </div>
     
      <div className="md:hidden">
        <button type="button" className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
  </>
  )
}
