import { DeleteTransactionController } from './../controllers/transactions/DeleteTransactionController';
import { GetOneTransactionController } from './../controllers/transactions/GetOneTransactionController';
import { GetAllTransactionsController } from './../controllers/transactions/GetAllTransactionsController';
import { CreateTransactionController } from './../controllers/transactions/CreateTransactionsController';
import { VerifyTransactionMiddleware } from './../controllers/transactions/VerifyTransactionMiddleware';
import { Router } from 'express';

const transactions = Router();

transactions
  .route('/transactions')
    .post(
      new VerifyTransactionMiddleware().handle,
      new CreateTransactionController().handle
    )
    .get( new GetAllTransactionsController().handle);

transactions
  .route('/transactions/:id')
    .get(new GetOneTransactionController().handle)
    .delete( new DeleteTransactionController().handle);

export { transactions };
