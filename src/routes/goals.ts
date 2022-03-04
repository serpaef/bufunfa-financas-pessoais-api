import { CreateGoalController } from '../controllers/goals/CreateGoalController';
import { VerifyGoalMiddleware } from '../controllers/goals/VerifyGoalMiddleware';
import { Router } from 'express';

const goals = Router();

goals
  .route('/goals')
    .post(
      new VerifyGoalMiddleware().handle,
      new CreateGoalController().handle
    )

export { goals };