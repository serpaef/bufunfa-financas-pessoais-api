import { Goal } from '../../entities/Goal';
import { getRepository } from 'typeorm';

type GoalUpdateRequest = { 
  id: number;
  value: number;
}

export class UpdateGoalService {
  async execute({id, value}: GoalUpdateRequest) {
    const repo = getRepository(Goal);

    const goal = await repo.findOne(id) || await repo.findOne(1);

    if(!goal) return new Error('ops, no goal found')

    goal.reachedValue += value;

    await repo.save(goal);
  } 
}