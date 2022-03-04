import { Goal } from './../../entities/Goal';
import { getRepository } from 'typeorm';

type GetOneGoalRequest = {
  id: string;
};

export class GetOneGoalService {
  async execute({ id }: GetOneGoalRequest) {
    if (!id) return new Error('id is required');

    const repo = getRepository(Goal);

    const goal = await repo.findOne(id);

    if (!goal) return new Error('Goal not found');

    return goal;
  }
}
