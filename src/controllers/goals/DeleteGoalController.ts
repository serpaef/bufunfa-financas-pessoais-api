import { DeleteGoalService } from '../../services/goals/DeleteGoalService';
import { Request, Response } from 'express';
import { endianness } from 'os';

export class DeleteGoalController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const service = new DeleteGoalService();

      const goal = await service.execute(id);

      if (goal instanceof Error) return res.status(404).json(goal.message);

      return res.status(204).end();
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
