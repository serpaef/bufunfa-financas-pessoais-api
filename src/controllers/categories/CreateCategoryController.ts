import { CreateCategoryService } from '../../services/categories/CreateCategoryService';
import { Request, Response } from 'express';

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    try{
      const { name } = req.body;
      
      const service = new CreateCategoryService();
      
      const category = await service.execute({ name });
      
      if (category instanceof Error) return res.status(400).json(category.message);
      
      return res.status(200).json(category);
    } catch ({ message }) {
      console.log(message)
      return res.status(500).json('Internal server error');
    }
  }
}
