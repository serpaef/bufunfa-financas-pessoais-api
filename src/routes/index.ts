import { GetOneCategoryController } from './../controllers/categories/GetOneCategoryController';
import { GetAllCategoriesController } from './../controllers/categories/GetAllCategoriesController';
import { CreateCategoryController } from '../controllers/categories/CreateCategoryController';
import { Router } from 'express';

const routes = Router();

routes
  .route('/categories/:id')
    .get(new GetOneCategoryController().handle);

routes
  .route('/categories')
    .post(new CreateCategoryController().handle)
    .get(new GetAllCategoriesController().handle);

export { routes };
