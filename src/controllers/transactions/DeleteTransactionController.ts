import { DeleteTransactionService } from '../../services/transactions/DeleteTransactionService';
import { Request, Response } from 'express';

export class DeleteTransactionController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const service = new DeleteTransactionService();
      const transaction = service.execute(id);

      if (transaction instanceof Error)
        return res.status(404).json(transaction.message);

      return res.status(204).end();
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
