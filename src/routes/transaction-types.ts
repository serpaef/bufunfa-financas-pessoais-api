import { UpdateTypeController } from '../controllers/transactionTypes/UpdateTypeController';
import { DeleteTypeController } from '../controllers/transactionTypes/DeleteTypeController';
import { GetOneTypeController } from '../controllers/transactionTypes/GetOneTypeController';
import { GetAllTypesController } from '../controllers/transactionTypes/GetAllTypesController';
import { CreateTypeController } from '../controllers/transactionTypes/CreateTypeController';
import { Router } from 'express';

const types = Router();

types
  .route('/transaction-types')
    .post(new CreateTypeController().handle)
    .get(new GetAllTypesController().handle);

types
  .route('/transaction-types/:id')
    .get(new GetOneTypeController().handle)
    .delete(new DeleteTypeController().handle)
    .put(new UpdateTypeController().handle);

export { types };
