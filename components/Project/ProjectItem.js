import React from 'react';
import Link from 'next/link';

const ProjectItem = ({ image, description, title, link }) => {
  return (
    <Link href={link} passHref>
      <div className='bg-gray-100 dark:bg-gray-50 dark:text-trueGray-800 rounded-lg p-20 cursor-pointer'>
        <div className='rounded-md shadow-lg'>
          <img src={image} className='max-w-full rounded-md' />
        </div>
        <div className='flex items-center justify-between mt-10'>
          <div>
            <h4 className='font-bold text-3xl'>{title}</h4>
            <p>{description}</p>
          </div>

          <div>
            <Link href={link} passHref>
              <a className='flex items-center justify-center bg-trueGray-800 py-4 w-48 text-white font-semibold focus:outline-none rounded-md focus:ring-2 focus:ring-offset-white focus:ring-trueGray-800 focus:ring-offset-4 hover:transform hover:scale-50 hover:shadow-lg transition duration-200 ease-out'>
                View more
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-5 h-5 sm:ml-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
