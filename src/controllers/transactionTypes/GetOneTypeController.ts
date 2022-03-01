import { GetOneTypeService } from './../../services/transactionTypes/GetOneTypeService';
import { Request, Response } from 'express';

export class GetOneTypeController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const service = new GetOneTypeService();

      const type = await service.execute({ id });

      if (type instanceof Error) return res.status(404).json(type.message);

      return res.status(200).json(type);
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
