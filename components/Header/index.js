import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex items-center justify-between sm:px-32 py-10'>
      <Link href='/' passHref>
        <h2 className='font-extrabold text-3xl md:text-4xl'>Jeffson</h2>
      </Link>
      <nav className='ml-20'>
        <ul className='flex justify-between text-center text-2xl font-light'>
          <li className='sm:px-8'>
            <Link href='/writings' passHref>
              <a>my writings</a>
            </Link>
          </li>
          <li className='sm:px-8'>
            <Link href='/uses' passHref>
              <a>my uses</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
