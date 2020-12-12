import '../styles/globals.css';
import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import useDarkMode from 'hooks/useTheme';

function MyApp({ Component, pageProps }) {
  const { colorMode } = useDarkMode();

  return (
    <div className={`antialiased ${colorMode}`}>
      <div className='md:max-w-full font-sans bg-white  text-trueGray-800 dark:bg-black dark:text-gray-200 transition duration-300 ease-in-out'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
