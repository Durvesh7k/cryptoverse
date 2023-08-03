import React from 'react'

const Card = (props) => {
    return (
        <tr className="bg-white   dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-4 py-3 md:px-12 md:py-4 font-medium text-gray-900 dark:text-white">
                {props.rank}
            </th>
            <td className="px-4 py-3 md:px-6 md:py-4">
                <div className="flex md:flex-row  flex-col gap-1 justify-left items-center">
                    <div className='flex flex-row items-center gap-1'>
                        <img src={props.image} alt="coin" className="w-8" />
                        <p>{props.name}</p>
                    </div>
                    <p className="opacity-75">{props.symbol}</p>
                </div>
            </td>
            <td className="px-4 py-3 md:px-6 md:py-4">
                {props.price}
            </td>
            <td className="px-4 py-3 md:px-6 md:py-4">
                {props.priceChange < 0
                    ? (<div className="w-40 grid justify-center text-red-400">
                        <p>{props.priceChange}</p>
                    </div>)
                    : ((<div className="w-40 grid justify-center text-green-400">
                        <p>{props.priceChange}</p>
                    </div>))
                }
            </td>
            <td className="px-4 py-3 md:px-6 md:py-4 text-center">
                ${props.volume.toLocaleString()}
            </td>
            <td className="px-4 py-3 md:px-28 md:py-4 text-center">
                ${props.market_cap.toLocaleString()}
            </td>
        </tr>


    )
}

export default Card