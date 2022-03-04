import { Request, Response } from 'express';
import { GetAllTypesService } from '../../services/transactionTypes/GetAllTypesService';

export class GetAllTypesController {
  async handle(req: Request, res: Response) {
    try{
      const service = new GetAllTypesService;

      const types = await service.execute();

      return res.status(200).json(types);
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
