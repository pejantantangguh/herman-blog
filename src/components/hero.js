import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 38% center;
  background-size: cover;
  height: 25vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  // background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  * {
    color: #fff;
  }

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }
  p,
  a {
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
  a::hover {
    color: #000;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "brisbane.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Herman's Blog &hearts;</h1>
        <p>
          Hello world <Link to="/about/"> Learn more about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
