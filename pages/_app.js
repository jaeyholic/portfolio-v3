import '../styles/globals.css';
import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className='md:max-w-full font-sans'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
