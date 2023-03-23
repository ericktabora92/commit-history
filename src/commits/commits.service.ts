import { Injectable } from '@nestjs/common';
import { configureOctokit } from '../config/octokit.config';
import { CommitsResponse } from '../interfaces/commits.interface';

@Injectable()
export class CommitsService {
  private readonly octokit = configureOctokit();

  async getCommits(owner: string, repo: string): Promise<CommitsResponse> {
    const { data } = await this.octokit.repos.listCommits({
      owner,
      repo,
    });

    const commits = data.map((commit) => ({
      sha: commit.sha,
      message: commit.commit.message,
      author: commit.commit.author.name,
      date: commit.commit.author.date,
    }));

    return { commits };
  }
}
