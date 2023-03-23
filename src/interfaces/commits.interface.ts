interface Commit {
  sha: string;
  message: string;
  author: string;
  date: string;
}

export interface CommitsResponse {
  commits: Commit[];
}
