import { Octokit } from '@octokit/rest';

export function configureOctokit() {
  return new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
}
