'use client';

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [searchNav, setSearchNav] = useState(false);

  return (
    <div>
      <button
        className='w-[297px] h-14 rounded-lg shadow-lg mt-5 mr-20'
        onClick={() => setSearchNav(!searchNav)}
      >
        <div className='flex mx-auto items-center justify-between mt-5'>
          <p className='ml-2'>Helsinki, Finland</p>
          <div className='h-[32px] shadow-lg border'></div>
          <p className='opacity-40 '>Add guests</p>
          <div className='h-[32px] shadow-lg border'></div>
          <FiSearch className='mr-2 text-red-900' />
        </div>

        { searchNav && (
          <section className='w-[1440px] h-[460px] '>
            <div>
              <form action=''>
                <span>location</span>
                <input
                  placeholder='Helsinki, Finland'
                  type='text'
                  required
                />
              </form>
            </div>
          </section>
        )}
      </button>
    </div>
  );
};

export default SearchBar;
