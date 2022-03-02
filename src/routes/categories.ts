import { UpdateCategoryController } from '../controllers/categories/UpdateCategoryController';
import { DeleteCategoryController } from '../controllers/categories/DeleteCategoryController';
import { GetOneCategoryController } from '../controllers/categories/GetOneCategoryController';
import { GetAllCategoriesController } from '../controllers/categories/GetAllCategoriesController';
import { CreateCategoryController } from '../controllers/categories/CreateCategoryController';
import { Router } from 'express';

const categories = Router();

categories
  .route('/categories')
    .post(new CreateCategoryController().handle)
    .get(new GetAllCategoriesController().handle);

categories
  .route('/categories/:id')
    .get(new GetOneCategoryController().handle)
    .delete(new DeleteCategoryController().handle)
    .put(new UpdateCategoryController().handle);

export { categories }
