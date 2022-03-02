import { UpdateAccountController } from './../controllers/accounts/UpdateAccountController';
import { DeleteAccountController } from './../controllers/accounts/DeleteAccountController';
import { GetOneAccountController } from './../controllers/accounts/GetOneAccountController';
import { CreateAccountController } from '../controllers/accounts/CreateAccountController';
import { GetAllAccountsController } from '../controllers/accounts/GetAllAccountsController';
import { Router } from 'express';

const accounts = Router();

accounts
  .route('/accounts')
    .post(new CreateAccountController().handle)
    .get(new GetAllAccountsController().handle);

accounts
  .route('/accounts/:id')
    .get(new GetOneAccountController().handle)
    .delete(new DeleteAccountController().handle)
    .put(new UpdateAccountController().handle);

export { accounts }
