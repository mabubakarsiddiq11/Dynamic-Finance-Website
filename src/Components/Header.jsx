import React from 'react'


const Header = ({header}) => {

  return (
    <>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img
         src={header.logo} 
         className='w-12 h-12 rounded-full'
         />
   
      <span className="ml-3 text-xl">{header.title}</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">HOME</a>
      <a className="mr-5 hover:text-gray-900">PORTFOLIO</a>
      <a className="mr-5 hover:text-gray-900">ABOUT US</a>
      <a className="mr-5 hover:text-gray-900">FAQ's</a>
    </nav>
    <button className="inline-flex font-bold text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
          CONTACT US
        </button>
  </div>
</header>

    </>
  )
}

export default Header
