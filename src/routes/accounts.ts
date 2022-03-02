import { CreateAccountController } from '../controllers/accounts/CreateAccountController';
import { Router } from 'express';

const accounts = Router();

accounts
  .route('/accounts')
    .post(new CreateAccountController().handle);

export { accounts }
