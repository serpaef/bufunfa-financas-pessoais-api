import { CreateCategoryController } from '../controllers/categories/CreateCategoryController';
import { Router } from 'express';

const routes = Router();

routes.route('/categories').post(new CreateCategoryController().handle);

export { routes };
