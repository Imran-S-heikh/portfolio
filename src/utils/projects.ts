import { Octokit } from "octokit";
import { RepoIds } from "./repo-ids";
import { GET_REPOSITORIES_BY_ID } from "@dev/libs/query";
import { Repository } from "./types";

const { PORTFOLIO, RETOMIZER, DEVFINDER, UDDOGTA, SIMPLE_TODO } = RepoIds;

export async function getGithubProjects() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });
  const data = (await octokit.graphql(GET_REPOSITORIES_BY_ID, {
    repoIds: [PORTFOLIO, RETOMIZER, DEVFINDER, UDDOGTA, SIMPLE_TODO],
  })) as { nodes: Repository[] };

  return data.nodes;
}
