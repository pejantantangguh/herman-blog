import { graphql, useStaticQuery} from 'gatsby';

const uselearnReact = () => {
    const data = useStaticQuery (graphql `
        query {
        allFile(filter: {sourceInstanceName: {eq:"learn-react"}}){
            nodes {
                childMdx {
                    frontmatter {
                    title
                    slug
           }
         }
       }
     }
   }
`)

return uselearnReact
}