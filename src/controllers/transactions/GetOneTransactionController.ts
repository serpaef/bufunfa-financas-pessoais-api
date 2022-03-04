import { Request, Response } from 'express';
import { GetOneTransactionService } from '../../services/transactions/GetOneTransactionService';

export class GetOneTransactionController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const service = new GetOneTransactionService();

      const transaction = await service.execute({ id });

      if (transaction instanceof Error)
        return res.status(404).json(transaction.message);

      return res.status(200).json(transaction);
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
