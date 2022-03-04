import { Request, Response } from 'express';
import { GetOneGoalService } from '../../services/goals/GetOneGoalService';

export class GetOneGoalController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const service = new GetOneGoalService();

      const goal = await service.execute({ id });

      if (goal instanceof Error) return res.status(404).json(goal.message);

      return res.status(200).json(goal);
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
