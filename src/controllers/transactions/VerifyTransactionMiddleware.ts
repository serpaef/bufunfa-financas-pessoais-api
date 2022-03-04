import { VerifyTransactionService } from '../../services/transactions/VerifyTransactionService';
import { Request, Response, NextFunction } from 'express';

export class VerifyTransactionMiddleware {
  async handle(req: Request, res: Response, next: NextFunction) {
    const service = new VerifyTransactionService();
    
    const verify = await service.execute(req.body);
    
    if(verify instanceof Error) return res.status(400).json(verify.message);

    next();
  }
}
