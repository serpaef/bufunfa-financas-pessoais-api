import { UpdateTypeService } from '../../services/transactionTypes/UpdateTypeService';
import { Request, Response } from 'express';

export class UpdateTypeController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const service = new UpdateTypeService();

      const type = await service.execute({ id, name });

      if (type instanceof Error) return res.status(400).json(type.message);

      return res.status(200).json(type);
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
