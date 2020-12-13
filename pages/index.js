import ProjectList from '@components/Project/ProjectList';
import React from 'react';

const Homepage = () => {
  return (
    <div className='sm:px-32 px-4 overflow-hidden'>
      <div className='flex flex-col sm:grid sm:grid-cols-3 sm:gap-10 pt-10 sm:pt-0 sm:my-32 relative mx-auto'>
        <div className='order-2 sm:order-1 pt-10 sm:pt-0'>
          <h2 className='font-extrabold text-5xl leading-tight'>
            <mark className='px-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black'>
              Felix
            </mark>{' '}
            Yeboah - Jefferson.
          </h2>
          <p className='mt-6 text-xl leading-8 font-light dark:text-gray-400'>
            A self-taught Software Developer & Design-Minded, focused on
            building beautiful interfaces & experiences👨‍💻. My inbox is always
            open for any opportunities, whether for a potential project or just
            to say hi, I'll try my best to answer your email!
          </p>

          <div className='mt-12'>
            <a
              href='#'
              className='flex items-center bg-trueGray-800 dark:bg-white px-12 py-4 w-64 text-white dark:text-trueGray-800 font-semibold focus:outline-none rounded-md focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-trueGray-800 focus:ring-trueGray-800 dark:focus:ring-white focus:ring-offset-4 transition duration-200 ease-out'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-5 h-5 mr-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              My inbox is open
            </a>
          </div>
        </div>

        <div className='sm:ml-20 order-1 sm:order-2 ring-2 dark:ring-offset-black ring-offset-white dark:ring-white ring-black ring-offset-8 rounded-xl'>
          <img className='rounded-xl shadow-lg' src='/myself.jpg' />
        </div>

        <div className='hidden sm:block sm:absolute sm:bottom-10 sm:right-32'>
          <a
            href='https://github.com/jaeyholic/'
            className='block text-4xl font-black py-4 transform hover:scale-125 origin-left transition duration-200 ease-in'
          >
            Github
          </a>
          <a
            href='https://www.linkedin.com/in/felixyeboahjefferson/'
            className='block text-4xl font-black py-4 transform hover:scale-125 origin-left transition duration-200 ease-in'
          >
            LinkedIn
          </a>
          <a
            href='https://twitter.com/jaeyholic'
            className='block text-4xl font-black py-4 transform hover:scale-125 origin-left transition duration-200 ease-in'
          >
            Twitter
          </a>
          <a
            href='https://www.instagram.com/jaeyholic/'
            className='block text-4xl font-black py-4 transform hover:scale-125 origin-left transition duration-200 ease-in'
          >
            Instagram
          </a>
        </div>
      </div>

      <div className='my-40 sm:my-24 px-2 sm:px-0'>
        <h2 className='font-black text-4xl mb-10'>My Projects </h2>
        <ProjectList />
      </div>
    </div>
  );
};

export default Homepage;
