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


    <div class=" p-12 shadow-md sm:rounded-lg overflow-scroll">
      <table class="w-full overflow-x-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-4 py-2">
              Coin
            </th>
            <th scope="col" class="px-4 py-2">
              Color
            </th>
            <th scope="col" class="px-4 py-2">
              Price
            </th>
            <th scope="col" class="px-4 py-2">
              24%h
            </th>
            <th scope="col" class="px-4 py-2">
              Volume
            </th>
            <th scope="col" class="px-4 py-2">
              MarketCap
            </th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>

  )
}
export default CryptoApi


