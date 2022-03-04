import { CreateTransactionService } from '../../services/transactions/CreateTransactionService';
import { Request, Response } from 'express';

export class CreateTransactionController {
  async handle(req: Request, res: Response) {
    try {
      const service = new CreateTransactionService();
      
      const transaction = await service.execute(req.body);

      return res.status(200).json(transaction);
    } catch ({message}) {
      console.log(message);
      return res.status(500).json('Internal Server Error');
    }
  }
}
