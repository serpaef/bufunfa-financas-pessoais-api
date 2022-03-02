import { CreateAccountService } from '../../services/accounts/CreateAccountService';
import { Request, Response } from 'express';

export class CreateAccountController {
  async handle(req: Request, res: Response) {
    try {
      const { name } = req.body;

      const service = new CreateAccountService();

      const account = await service.execute(name);

      if (account instanceof Error) return res.status(400).json(account.message);

      return res.status(200).json(account);
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
