import SocialButton from '@components/SocialButton';
import React from 'react';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMedium,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black sm:px-32 sm:py-10 text-gray-500'>
      <div className='flex justify-between sm:py-24'>
        <div className='sm:mr-10 w-1/2'>
          <h3 className='text-white font-black text-3xl mb-4'>About me</h3>
          <div className='leading-loose font-light text-lg'>
            <p>
              A self-taught Full-Stack Javascript Web Developer and UI/UX
              Designer from Accra, Ghana. I am super passionate about design,
              development, traveling, and a fanatic of all things digital.
            </p>
            <p className='pt-4'>
              I have been very fortunate to be able to do all as a career. I
              consider myself a learner,{' '}
              <span className='text-white text-2xl font-black'>
                a life-long learner.
              </span>
            </p>
            <p className='pt-4'>
              I like to turn great designs into meaningful and intuitive
              interfaces that are simple and easy to use and can improve
              people's lives.
            </p>
            <p className='pt-4'>
              I feel honored to have worked with extraordinary people, startups,
              and companies that helped to improve not only my skills but also
              my life.
            </p>
          </div>
        </div>

        <div className='sm:ml-10 w-1/2'>
          <h3 className='text-white font-black text-3xl mb-2'>Let's talk</h3>
          <h3 className='font-thin text-2xl mb-4'>hello@jeffson.dev</h3>
          <div className='grid gap-4 mt-8'>
            <SocialButton
              icon={<FaTwitter className='sm:mr-4' />}
              text='Send me a DM on Twitter'
            />
            <SocialButton
              icon={<FaLinkedin className='sm:mr-4' />}
              text='Check my profile on LinkedIn'
            />
            <SocialButton
              icon={<FaInstagram className='sm:mr-4' />}
              text='Send me a DM on Instagram'
            />
            <SocialButton
              icon={<FaGithub className='sm:mr-4' />}
              text='Checkout my project on Github'
            />
            <SocialButton
              icon={<FaMedium className='sm:mr-4' />}
              text='Read my blogs on Medium'
            />
          </div>
        </div>
      </div>

      <div className='border-t border-gray-900 my-10'></div>

      <div className='flex justify-between items-center'>
        <p className='uppercase text-gray-600'>
          Felix Yeboah - Jefferson © {new Date().getFullYear()}
        </p>

        <div className=''>
          <a
            href='#'
            className='flex items-center bg-trueGray-800 dark:bg-white px-12 py-3 w-64 text-white dark:text-trueGray-800 font-semibold focus:outline-none rounded-md focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-trueGray-800 focus:ring-trueGray-800 dark:focus:ring-white focus:ring-offset-4 transition duration-200 ease-out'
          >
            <FaGithub className='sm:mr-4' />
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;