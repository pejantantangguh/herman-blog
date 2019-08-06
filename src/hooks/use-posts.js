import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  // const data = useStaticQuery(graphql`
  // query{
  //   allMdx{
  //     nodes {
  //       frontmatter{
  //         title
  //         author
  //         slug
  //         image {
  //           sharp: childImageSharp {
  //             fluid(maxWidth: 100, maxHeight: 100) {
  //               ...GatsbyImageSharpFluid_withWebp
  //             }
  //           }
  //         }
  //       }
  //       excerpt
  //     }
  //   }
  // }
  // `);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
        nodes {
          childMdx {
            frontmatter {
              title
              author
              slug
              image {
                sharp:childImageSharp {
                  fluid(maxWidth: 100, maxHeight:100 ){
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)
   return data.allFile.nodes.filter(post=> {
     return post.childMdx 
    }).map(post => {
    return ({
      title: post.childMdx.frontmatter.title,
      author: post.childMdx.frontmatter.author,
      slug: post.childMdx.frontmatter.slug,
      excerpt: post.childMdx.excerpt,
      image: post.childMdx.frontmatter.image,
    }) 
  })
}
export default usePosts;
