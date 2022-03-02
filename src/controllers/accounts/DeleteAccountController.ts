import { DeleteAccountService } from '../../services/accounts/DeleteAccountService';
import { Request, Response } from 'express';

export class DeleteAccountController {
  async handle(req: Request, res: Response) {
    try {
      const {id} = req.params;

      const service = new DeleteAccountService();

      const account = await service.execute(id);

      if (account instanceof Error) return res.status(404).json(account.message);

      return res.status(204).end();
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
