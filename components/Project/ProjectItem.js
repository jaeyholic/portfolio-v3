import React from 'react';
import Link from 'next/link';

const ProjectItem = ({ image, description, title, link }) => {
  return (
    <div className='bg-gray-100 dark:bg-gray-50 dark:text-trueGray-800 rounded-lg p-4 sm:p-20 cursor-pointer my-8 sm:my-0'>
      <div className='rounded-md shadow-lg'>
        <img src={image} className='max-w-full rounded-md' />
      </div>
      <div className='sm:flex items-center justify-between mt-10'>
        <div className='mb-4 sm:mb-0'>
          <h4 className='font-bold text-xl sm:text-3xl'>{title}</h4>
          <p className='text-sm'>{description}</p>
        </div>

        <div>
          <a
            href={link}
            target='_blank'
            className='flex items-center justify-center bg-trueGray-800 py-3 sm:py-4 w-48 text-white font-semibold focus:outline-none rounded-md focus:ring-2 focus:ring-offset-white focus:ring-trueGray-800 focus:ring-offset-4 hover:transform hover:scale-50 hover:shadow-lg transition duration-200 ease-out'
          >
            View more
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-5 h-5 ml-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
