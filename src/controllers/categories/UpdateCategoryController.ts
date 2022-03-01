import { UpdateCategoryService } from '../../services/categories/UpdateCategoryService';
import { Request, Response } from 'express';

export class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    try{
      const { id } = req.params
      const { name } = req.body;
      
      const service = new UpdateCategoryService();
      
      const category = await service.execute({ id, name });
      
      if (category instanceof Error) return res.status(400).json(category.message);
      
      return res.status(200).json(category);
    } catch ({ message }) {
      console.log(message)
      return res.status(500).json('Internal server error');
    }
  }
}
