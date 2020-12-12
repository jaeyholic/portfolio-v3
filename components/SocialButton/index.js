import React from 'react';

const SocialButton = ({ icon, text, link }) => {
  return (
    <a
      target='_blank'
      href={link}
      className='flex items-center w-80 sm:w-96 h-14 border text-gray-400 border-gray-500 rounded-sm px-6 bg-gray-800 hover:text-white hover:border-gray-200 transform hover:scale-105 transition duration-300 ease-in cursor-pointer'
    >
      {icon}
      {text}
    </a>
  );
};

export default SocialButton;
