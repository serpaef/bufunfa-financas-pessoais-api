import { Request, Response } from 'express';
import { DeleteTypeService } from '../../services/transactionTypes/DeleteTypeService';

export class DeleteTypeController {
  async handle(req: Request, res: Response) {
    try{
      const { id } = req.params;
      
      const service = new DeleteTypeService();

      const type = await service.execute(id);

      if (type instanceof Error) return res.status(404).json(type.message);

      return res.status(204).end();
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
