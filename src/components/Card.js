import React from 'react'

const Card = (props) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-4 py-3 md:px-6 md:py-4 font-medium text-gray-900 dark:text-white">
                {props.rank}
            </th>
            <td className="px-4 py-3 md:px-6 md:py-4">
                <div className="flex gap-1 justify-left items-center">
                    <img src={props.image} alt="coin" className="w-8" />
                    <p>{props.name}</p>
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
            <td className="px-4 py-3 md:px-6 md:py-4 text-center">
                ${props.market_cap.toLocaleString()}
            </td>
        </tr>


    )
}

export default Card