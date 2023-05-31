import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';


const CryptoApi = (props) => {
  const [data, setData] = useState([]);
  const searchCoin = props.coin;



  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
        setData(res.data);
      }
      catch (err) {
        console.log(err)
      }

  }
getData();
})


  return (
    <>
      <div className='container text-white mt-4'>
        <div className='flex justify-center font-bold text-black p-6 text-lg gap-x-20'>
          <div className='flex mr-2 w-80'>
            <div className="w-20 flex justify-start">
              <p>#</p>
            </div>
            <div className="grid w-60 justify-center">
              <div className="flex gap-1 justify-center">
                <p>Coin</p>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className="w-40 grid justify-center">
              <p>Price</p>
            </div>
            <div className="w-40 grid justify-center">
              <p>24h %</p>
            </div>

            <div className="w-40 grid justify-center">
              <p>Volume</p>
            </div>
            <div className="w-40 grid justify-center">
              <p>Marketcap</p>
            </div>
          </div>

        </div>
        <div className='grid justify-center m-4'>
          {data.filter((val) => {
            if (props.coin === "") {
              return val
            }
            else if (val.name.toLowerCase().includes(searchCoin.toLowerCase())) {
              return val
            }
          }).map((val) => {
            return <Card
              key={val.symbol}
              name={val.name}
              market_cap={val.market_cap}
              image={val.image}
              price={val.current_price}
              volume={val.total_volume}
              symbol={val.symbol}
              rank={val.market_cap_rank}
              priceChange={val.market_cap_change_percentage_24h}
            />
          })

          }

        </div>


      </div>


    </>

  )
}

export default CryptoApi

//          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
