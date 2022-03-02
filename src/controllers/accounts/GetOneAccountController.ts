import { GetOneAccountService } from '../../services/accounts/GetOneAccountService';
import { Request, Response } from 'express';

export class GetOneAccountController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const service = new GetOneAccountService();

      const account = await service.execute({ id });

      if (account instanceof Error) return res.status(404).json(account.message);

      return res.status(200).json(account);
    } catch (e) {
      return res.status(500).json('Internal server error');
    }
  }
}
