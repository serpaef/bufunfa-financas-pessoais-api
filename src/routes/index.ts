import { UpdateTypeController } from '../controllers/transactionTypes/UpdateTypeController';
import { DeleteTypeController } from '../controllers/transactionTypes/DeleteTypeController';
import { GetOneTypeController } from '../controllers/transactionTypes/GetOneTypeController';
import { GetAllTypesController } from '../controllers/transactionTypes/GetAllTypesController';
import { CreateTypeController } from '../controllers/transactionTypes/CreateTypeController';
import { UpdateCategoryController } from '../controllers/categories/UpdateCategoryController';
import { DeleteCategoryController } from '../controllers/categories/DeleteCategoryController';
import { GetOneCategoryController } from '../controllers/categories/GetOneCategoryController';
import { GetAllCategoriesController } from '../controllers/categories/GetAllCategoriesController';
import { CreateCategoryController } from '../controllers/categories/CreateCategoryController';
import { Router } from 'express';

const routes = Router();

routes
  .route('/categories')
    .post(new CreateCategoryController().handle)
    .get(new GetAllCategoriesController().handle);

routes
  .route('/categories/:id')
    .get(new GetOneCategoryController().handle)
    .delete(new DeleteCategoryController().handle)
    .put(new UpdateCategoryController().handle);

routes
  .route('/transaction-types')
    .post(new CreateTypeController().handle)
    .get(new GetAllTypesController().handle);

routes
  .route('/transaction-types/:id')
    .get(new GetOneTypeController().handle)
    .delete(new DeleteTypeController().handle)
    .put(new UpdateTypeController().handle);

export { routes };
