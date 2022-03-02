import { UpdateAccountService } from '../../services/accounts/UpdateAccountService';
import { Request, Response } from 'express';

export class UpdateAccountController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const service = new UpdateAccountService();

      const account = await service.execute({ id, name });

      if (account instanceof Error) return res.status(400).json(account.message);

      return res.status(200).json(account);
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
