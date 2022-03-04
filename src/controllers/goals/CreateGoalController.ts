import { CreateGoalService } from '../../services/goals/CreateGoalService';
import { Request, Response } from 'express';

export class CreateGoalController {
  async handle(req: Request, res: Response) {
    try {
      const service = new CreateGoalService();

      const goal = await service.execute(req.body);

      return res.status(200).json(goal);
    } catch ({ message }) {
      console.log(message);
      return res.status(500).json('Internal server error');
    }
  }
}
