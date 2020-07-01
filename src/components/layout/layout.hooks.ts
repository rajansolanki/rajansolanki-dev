import { useStaticQuery, graphql } from 'gatsby';

import { AllJobProjectsQuery } from 'graphql-types';

export const useDataQuery = (): AllJobProjectsQuery =>
  useStaticQuery(graphql`
    fragment Job on MarkdownRemark {
      frontmatter {
        title
        company
        date {
          start(formatString: "Y")
          end(formatString: "Y")
        }
      }
      html
    }

    fragment JobEdge on MarkdownRemarkEdge {
      node {
        ...Job
      }
      next {
        ...Job
      }
    }

    fragment Project on MarkdownRemark {
      frontmatter {
        title
        slug
        role
        company
        overview
        url
      }
      html
    }

    fragment ProjectEdge on MarkdownRemarkEdge {
      node {
        ...Project
      }
      next {
        ...Project
      }
    }

    query AllJobProjects {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/jobs/*" } }
        sort: { fields: frontmatter___date___start, order: DESC }
      ) {
        edges {
          ...JobEdge
        }
      }
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/projects/*" } }
        sort: { fields: frontmatter___order, order: DESC }
      ) {
        group(field: frontmatter___company) {
          edges {
            ...ProjectEdge
          }
        }
      }
    }
  `);
