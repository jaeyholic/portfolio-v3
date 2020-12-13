import React from 'react';
import { getAllPostsForHome } from 'lib/api';
import BlogCard from '@components/Card/BlogCard';

const writings = ({ allPosts, preview }) => {
  return (
    <div className='relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='h-1/3 sm:h-2/3'></div>
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10'>
            From the blog
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none'>
          {allPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}

export default writings;
