import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Insta from '../components/insta';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();
  console.log(posts);
  return (
    <>
      <Hero />
      <Layout>
        <h2>
          Read my blog
          {posts.map(post => (
            // <pre>{JSON.stringify(post, null, 2)}</pre>
            <PostPreview key={post.slug} post={post} />
          ))}
        </h2>
        <Insta />
      </Layout>
    </>
  );
};
