import React from 'react';
import { useRouter } from 'next/router';
import { imageBuilder } from 'lib/sanity';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import BlockContent from '@sanity/block-content-to-react';
import { NextSeo } from 'next-seo';

const Writings = ({ post, morePosts, preview }) => {
  const image = imageBuilder.image(post?.coverImage).url();
  const router = useRouter();

  return (
    <div className='relative py-16 overflow-hidden'>
      <NextSeo
        title={post?.title}
        description={post?.excerpt}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://jeffson.dev',
          title: post?.title,
          description: post?.excerpt,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@jaeyholic',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
        <div className='relative h-full text-lg max-w-prose mx-auto'>
          <svg
            className='absolute top-12 left-full transform translate-x-32'
            width='404'
            height='384'
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                x='0'
                y='0'
                width='20'
                height='20'
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x='0'
                  y='0'
                  width='4'
                  height='4'
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width='404'
              height='384'
              fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
            />
          </svg>
          <svg
            className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
            width='404'
            height='384'
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x='0'
                y='0'
                width='20'
                height='20'
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x='0'
                  y='0'
                  width='4'
                  height='4'
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width='404'
              height='384'
              fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
            />
          </svg>
          <svg
            className='absolute bottom-12 left-full transform translate-x-32'
            width='404'
            height='384'
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='d3eb07ae-5182-43e6-857d-35c643af9034'
                x='0'
                y='0'
                width='20'
                height='20'
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x='0'
                  y='0'
                  width='4'
                  height='4'
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width='404'
              height='384'
              fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
            />
          </svg>
        </div>
      </div>
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='text-lg max-w-prose mx-auto mb-6'>
          <p className='text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase'>
            {post?.category}
          </p>
          <h1 className='mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-10'>
            {post?.title}
          </h1>
        </div>
        <div className='prose prose-lg dark:prose-dark dark:text-gray-200 mx-auto'>
          <BlockContent
            blocks={post?.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset='production'
          />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

export default Writings;
