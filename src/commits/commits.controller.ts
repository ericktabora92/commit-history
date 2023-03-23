import { Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CommitsResponse } from '../interfaces/commits.interface';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get(':owner/:repo')
  async getCommits(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ): Promise<CommitsResponse> {
    return await this.commitsService.getCommits(owner, repo);
  }
}
