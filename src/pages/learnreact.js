import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import uselearnReact from '../hooks/use-learnreact';
import LearnReactPreview from '../components/learnreact-preview';

const learnReact = () => {
  const reactPost = uselearnReact();
  return (
    <>
    <Hero />
    <Layout>
      <h1>My post for my react Tutorial</h1>
      <p>React React React React &hearts;</p>
      {reactPost.map(post=>(
        // <pre>{JSON.stringify(post,null,2)}</pre>
        <LearnReactPreview key={post.slug} post={post} />
      ))}
      <Link to="/">&larr; back to home</Link>
    </Layout>
    </>
  );
}
export default learnReact;
