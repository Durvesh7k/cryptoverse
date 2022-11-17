import React from "react"

const Card = (props) => {
    return (
        <>
            <div>
                <div className='flex justify-start font-medium text-white p-6 text-lg gap-x-20'>
                    <div className='flex mr-2 w-80'>
                        <div className="w-20 flex justify-start">
                            <p>{props.rank}</p>
                        </div>
                        <div className="grid w-80 justify-center">
                            <div className="flex gap-1 justify-center">
                                <img src={props.image} alt="coin" className="w-8"/>
                                <p>{props.name}</p>
                                <p className="opacity-75">{props.symbol}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="w-40 grid justify-center">
                            <p>{props.price}</p>
                        </div>
                        {props.priceChange < 0
                            ? (<div className="w-40 grid justify-center text-red-700 sm:hidden ">
                                <p>{props.priceChange}</p>
                            </div>)
                            : ((<div className="w-40 grid justify-center text-green-400">
                                <p>{props.priceChange}</p>
                            </div>))
                        }

                        <div className="w-40 grid justify-center">
                            <p>${props.volume.toLocaleString()}</p>
                        </div>
                        <div className="w-40 grid justify-center">
                            <p>${props.market_cap.toLocaleString()}</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Card