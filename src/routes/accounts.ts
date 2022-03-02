import { CreateAccountController } from '../controllers/accounts/CreateAccountController';
import { GetAllAccountsController } from '../controllers/accounts/GetAllAccountsController';
import { Router } from 'express';

const accounts = Router();

accounts
  .route('/accounts')
    .post(new CreateAccountController().handle)
    .get(new GetAllAccountsController().handle);

export { accounts }
