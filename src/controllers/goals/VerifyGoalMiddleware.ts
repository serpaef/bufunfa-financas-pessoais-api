import { VerifyGoalService } from '../../services/goals/VerifyGoalService';
import { Request, Response, NextFunction } from 'express';

export class VerifyGoalMiddleware {
  handle(req: Request, res: Response, next: NextFunction) {
    const service = new VerifyGoalService();

    const verify = service.execute(req.body);
    
    if (verify instanceof Error) return res.status(400).json(verify.message);
    
    next();
  }
}
