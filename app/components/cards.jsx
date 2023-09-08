import React from 'react';
import staysData from '../data/stays.json';
import { GiRoundStar } from 'react-icons/gi';

const Cards = () => {
  return (
    <div className="flex flex-wrap col-span-3 flex-shrink flex-grow items-center justify-center gap-20">
    {staysData.map((stay, index) => (
      <div key={index} className="card">
        <img src={stay.photo} alt={stay.title} 
        className='w-80 h-60 rounded-lg '
        />
        <div className="w-80 ">
            
            <div className='flex items-center justify-between my-3'>
                {/*{ stay.superHost && <span className='border rounded-xl p-1 items-center'>Super Host</span>  } */}
                <p className='opacity-50 '>
                    { stay.type }
                    </p>
                <p className='flex items-center gap-1'> <GiRoundStar color='red'/> {stay.rating}</p>
                </div>
          
          <h2 className='font-bold'>
            {stay.title}
            </h2>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Cards
