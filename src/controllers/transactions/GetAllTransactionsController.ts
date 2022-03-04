import { Request, Response } from 'express';
import { GetAllTransactionsService } from '../../services/transactions/GetAllTransactionsService';

export class GetAllTransactionsController {
  async handle(req: Request, res:Response) {
    try{
      const service = new GetAllTransactionsService();

      const transactions = await service.execute();

      return res.status(200).json(transactions);
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}