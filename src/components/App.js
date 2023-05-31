import React from 'react'
import { useState } from "react";
import dscImage from '../assets/dsc-logo.png';
import logo from '../assets/logoweb.png'
import CryptoApi from './CryptoApi2';

const App = () => {
  const [query, setQuery] = useState('');

  return (

    <div className="min-h-screen bg-gray-900 ">
      <div className="container mx-auto">

        <div className=" py-4 mx-auto flex flex-col items-center justify-center">
          <div className="flex mt-2 md:mt-6 items-center justify-center text-3xl  font-bold text-">
            <img src={logo} alt="logo-png" className="w-10 h-10 md:w-20 md:h-20" />
            <p className="mt-2 text-gray-100 text-sm md:text-4xl ">CRYPTOVERSE</p>
          </div>
          {/* Search */}
          <div className="my-5 w-4/6 md:w-1/5 ">
            <input type="text" id="search" onChange={e => {
              setQuery(e.target.value)
            }} className=" text-gray-200 outline-1 text-sm rounded-lg outline:none focus:outline-none border-gray-800 focus:border-blue-500 border-2 block w-full p-2.5 bg-gray-700" placeholder="Enter Crypto Name" />
          </div>
        </div>
        {/* Table */}
        <div className="">
          <CryptoApi
            coin={query} />
        </div>
        {/* Footer */}
        <div className="flex justify-center py-4">
          <img src={dscImage} alt='logo_image' className="w-20" />
        </div>
      </div>
    </div>

  )
}

export default App