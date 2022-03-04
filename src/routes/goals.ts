import { DeleteGoalController } from './../controllers/goals/DeleteGoalController';
import { GetOneGoalController } from './../controllers/goals/GetOneGoalController';
import { GetAllGoalsController } from '../controllers/goals/GetAllGoalsController';
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
    .get( new GetAllGoalsController().handle);

goals
  .route('/goals/:id')
    .get( new GetOneGoalController().handle)
    .delete( new DeleteGoalController().handle);

export { goals };
