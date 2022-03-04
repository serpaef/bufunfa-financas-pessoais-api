import { Goal } from '../../entities/Goal';
import { getRepository } from 'typeorm';

export class DeleteGoalService {
  async execute(id: string) {
    const repo = getRepository(Goal);

    const goalToRemove = await repo.findOne(id);

    if (!goalToRemove) return new Error('Goal not found');

    return repo.delete(id);
  }
}
