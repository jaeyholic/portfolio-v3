import React from 'react';
import Link from 'next/link';
import { imageBuilder } from 'lib/sanity';
import moment from 'moment';

const BlogCard = ({ post }) => {
  const image = imageBuilder.image(post?.coverImage).url();

  return (
    <Link href={`/writings/${post?.slug}`} passHref>
      <a className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
        <div className='flex-shrink-0'>
          <img
            className='h-48 w-full object-cover'
            src={image}
            alt={post?.title}
          />
        </div>
        <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
          <div className='flex-1'>
            <p className='text-sm leading-5 font-medium text-indigo-600'>
              <a href='#' className='hover:underline'>
                {post?.category}
              </a>
            </p>
            <div className='block'>
              <h3 className='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                {post?.title}
              </h3>
              <p className='mt-3 text-base leading-6 text-gray-500'>
                {post?.excerpt}
              </p>
            </div>
          </div>
          <div className='mt-6 flex items-center'>
            <div className='flex-shrink-0'>
              <a href='#'>
                <img
                  className='h-10 w-10 rounded-full object-cover'
                  src={post?.author.avatar}
                  alt=''
                />
              </a>
            </div>
            <div className='ml-3'>
              <p className='text-sm leading-5 font-medium text-gray-900'>
                <p>{post?.author.name}</p>
              </p>
              <div className='flex text-sm leading-5 text-gray-500'>
                <time datetime='2020-03-16'>
                  {moment(post?.data).format('LL')}
                </time>
                <span className='mx-1'>&middot;</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
