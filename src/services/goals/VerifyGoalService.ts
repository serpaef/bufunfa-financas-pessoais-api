import { Goal } from '../../entities/Goal';
import { getRepository } from 'typeorm';

type GoalRequest = {
  title: string;
  valueToAchieve: number;
  deadline: string; // format: YYYY-MM-DD
}

export class VerifyGoalService {
  async execute({title, valueToAchieve, deadline}: GoalRequest) {
    if (!title) return new Error('title is required');

    if (typeof title !== 'string') return new Error('title must be a string');
    
    if (typeof valueToAchieve !== 'number') return new Error('valueToAchieve must be a number');
    
    if (valueToAchieve < 1) return new Error('valueToAchieve must be greater than or equal to 1');

    const isValid = Date.parse(deadline);

    if (isNaN(isValid)) return new Error('deadline is not in a valid date format.')
  }
}