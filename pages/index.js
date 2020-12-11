import ProjectList from '@components/Project/ProjectList';
import React from 'react';

const Homepage = () => {
  return (
    <div className='sm:px-32'>
      <div className='max-w-3xl sm:py-48'>
        <div>
          <h2 className='font-extrabold text-5xl leading-tight'>
            Hey there, <br />
            I'm Felix Yeboah - Jefferson.
          </h2>
          <p className='mt-6 text-2xl leading-8 font-light'>
            A self-taught full-stack javascript web developer & a design-minded,
            focused on building beautiful interfaces & experiences👨‍💻. My inbox
            is always open for any opportunities, whether for a potential
            project or just to say hi, I'll try my best to answer your email!
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
                className='w-5 h-5 sm:mr-2'
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
      </div>

      <div className='my-24'>
        <h2 className='font-black text-4xl mb-10'>My Projects </h2>
        <ProjectList />
      </div>
    </div>
  );
};

export default Homepage;
