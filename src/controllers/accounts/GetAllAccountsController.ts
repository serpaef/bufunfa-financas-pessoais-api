import { Request, Response } from 'express';
import { GetAllAccountsService } from '../../services/accounts/GetAllAccountsService';

export class GetAllAccountsController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetAllAccountsService();

      const accounts = await service.execute();

      return res.status(200).json(accounts);
    } catch (e) {
      return res.status(500).json('Internal Server Error');
    }
  }
}