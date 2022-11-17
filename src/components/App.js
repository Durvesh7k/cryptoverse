import CryptoApi from "./CryptoApi";
import { useState } from "react";
import dscImage from '../assets/dsc-logo.png';
import logo from '../assets/logoweb.png'


const App = () => {
  const [query, setQuery] = useState('');


  return (
    <>
      <div className="p-10" >
        <div className="flex gap-4 justify-center text-3xl  font-bold text-">
          <img src={logo} alt="logo-png"  className="w-20"/>
          <p className="mt-6">CRYPTOVERSE</p>
        </div>
        <div className="flex justify-center mt-4">
          <form className="grid gap-3">
            <input
              placeholder="Enter The crypto name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={e => {
                setQuery(e.target.value)
              }}
            />
          </form>
        </div>
        <CryptoApi
          coin={query} />

        <div className="grid gap-6 justify-center mt-2">
          <div className="flex justify-center">
            <img src={dscImage} alt='logo_image'  className="w-20" />
          </div>
        </div>



      </div>
    </>
  )
}

export default App;