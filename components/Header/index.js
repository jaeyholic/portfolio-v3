import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useDarkMode from 'hooks/useTheme';

const Header = () => {
  const { colorMode, setTheme } = useDarkMode();
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
          <button
            className='sm:px-8 transition duration-200 ease-in'
            onClick={() => setTheme(colorMode)}
          >
            {colorMode === 'light' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='inline-block w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='inline-block w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              </svg>
            )}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
