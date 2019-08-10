import { graphql, useStaticQuery} from 'gatsby';

const uselearnReact = () => {
    const data = useStaticQuery (graphql `
      query {
        allFile(filter: {sourceInstanceName: {eq:"learn-react"}}) {
          nodes{
            childMdx{
              frontmatter{
                title
                slug
              }
              excerpt
            }
          }
        }
      }
`)

    return data.allFile.nodes.filter(post=>{
      return post.childMdx
    }).map(post=>{
      return ({
        title:post.childMdx.frontmatter.title,
        slug:post.childMdx.frontmatter.slug,
        excerpt:post.childMdx.excerpt
      })
    })
}

export default uselearnReact;