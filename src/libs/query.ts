export const GET_REPOSITORIES_BY_ID = `
query GetRepositories($repoIds: [ID!]!) {
  nodes(ids: $repoIds) {
    ... on Repository {
      name
      id
      description
      stargazerCount
      createdAt
      forkCount
      homepageUrl
      visibility
      url
    
      repositoryTopics(first:10) {
      	nodes {
          topic {
            name
            id
          }
        }  
      }

      primaryLanguage {
        id
        color
        name
      }
      languages(first: 10) {
        totalCount
        nodes {
          color
          id
          name
        }
      }
      defaultBranchRef {
        name
        target {
          ... on Commit {
            id
            history(first: 0) {
              totalCount
            }
          }
        }
      }
    }
  }
}
`