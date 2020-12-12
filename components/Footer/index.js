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
    <div className='px-6 sm:px-32 py-10 dark:text-gray-500'>
      <div className='sm:flex justify-between sm:py-24'>
        <div className='sm:mr-10 sm:w-1/2'>
          <h3 className='text-gray-800 dark:text-white font-black text-3xl mb-4'>
            About me
          </h3>
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

        <div className='sm:ml-10 sm:w-1/2 mt-16 sm:mt-0'>
          <h3 className='text-gray-800 dark:text-white font-black text-3xl mb-2'>
            Let's talk
          </h3>
          <h3 className='font-thin text-2xl mb-4'>hello@jeffson.dev</h3>
          <div className='grid gap-4 mt-8'>
            <SocialButton
              icon={<FaTwitter className='mr-4' />}
              text='Send me a DM on Twitter'
              link='https://twitter.com/jaeyholic'
            />
            <SocialButton
              icon={<FaLinkedin className='mr-4' />}
              text='Check my profile on LinkedIn'
              link='https://www.linkedin.com/in/felixyeboahjefferson/'
            />
            <SocialButton
              icon={<FaInstagram className='mr-4' />}
              text='Send me a DM on Instagram'
              link='https://www.instagram.com/jaeyholic/'
            />
            <SocialButton
              icon={<FaGithub className='mr-4' />}
              text='Checkout my project on Github'
              link='https://github.com/jaeyholic/'
            />
            <SocialButton
              icon={<FaMedium className='mr-4' />}
              text='Read my blogs on Medium'
              link='https://medium.com/@jaeyholic'
            />
          </div>
        </div>
      </div>

      <div className='border-t  border-gray-200 dark:border-gray-900 my-10'></div>

      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <p className='uppercase text-gray-500 dark:text-gray-600 order-2 sm:order-1 mt-6 sm:mt-0'>
          Felix Yeboah - Jefferson © {new Date().getFullYear()}
        </p>

        <div className=''>
          <a
            target='_blank'
            href='https://github.com/jaeyholic/portfolio-v3'
            className='flex items-center bg-trueGray-800 dark:bg-white px-12 py-3 w-64 text-white dark:text-trueGray-800 font-semibold focus:outline-none rounded-md focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-trueGray-800 focus:ring-trueGray-800 dark:focus:ring-white focus:ring-offset-4 transition duration-200 ease-out order-1 sm:order-2'
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
