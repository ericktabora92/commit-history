import { Controller, Get, Param } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Controller('commits')
export class CommitsController {
  private octokit: Octokit;
  constructor() {
    this.octokit = new Octokit({
      auth: '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',
    });
  }

  @Get(':owner/:repo')
  async getCommits(@Param('owner') owner: string, @Param('repo') repo: string) {
    const { data } = await this.octokit.repos.listCommits({
      owner,
      repo,
    });

    console.log(data, 'test');

    return data.map((commit) => ({
      sha: commit.sha,
      message: commit.commit.message,
      author: commit.commit.author.name,
      date: commit.commit.author.date,
    }));
  }
}
