import { Request, Response } from 'express';
import { GetAllGoalsService } from '../../services/goals/GetAllGoalsService';

export class GetAllGoalsController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetAllGoalsService();

      const goals = await service.execute();

      return res.status(200).json(goals);
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
