import { Goal } from '../../entities/Goal';
import { getRepository } from 'typeorm';

type GoalRequest = {
  title: string;
  valueToAchieve: number;
  deadline: string; // format: YYYY-MM-DD
}

export class CreateGoalService {
  async execute({title, valueToAchieve, deadline}: GoalRequest) {
    const repo = getRepository(Goal);

    const goalToRegister = {
      title,
      valueToAchieve,
      reachedValue: 0,
      start: new Date(Date.now()),
      deadline,
    }

    const goal = repo.create(goalToRegister);

    await repo.save(goal);

    return goal;
  }
}
