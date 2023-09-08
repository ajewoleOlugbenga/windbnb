
import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import SearchBar from './searchBar';


const Header = () => {


  return (
    <header className='flex mx-auto items-center justify-between '>
        <div>
            <Image 
            src={Logo}
           className='w-24 ml-20 font-extrabold'
            />
        </div>
        <SearchBar />
    </header>
  )
}

export default Header
