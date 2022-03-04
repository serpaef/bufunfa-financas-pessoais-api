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

export { transactions };
