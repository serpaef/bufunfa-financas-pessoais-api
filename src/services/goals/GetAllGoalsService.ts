import { Goal } from '../../entities/Goal';
import { getRepository } from 'typeorm';

export class GetAllGoalsService {
  async execute() {
    const repo = getRepository(Goal);

    const goals = await repo.find();

    return goals;
  }
}
