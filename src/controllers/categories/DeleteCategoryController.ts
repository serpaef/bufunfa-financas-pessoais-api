import { DeleteCategoryService } from '../../services/categories/DeleteCategoryService';
import { Request, Response } from 'express';

export class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    try{
      const { id } = req.params;
      
      const service = new DeleteCategoryService();
      
      const category = await service.execute(id);
      
      if (category instanceof Error) return res.status(404).json(category.message);
      
      return res.status(204).end();
    } catch ({ message }) {
      console.log(message)
      return res.status(500).json('Internal server error');
    }
  }
}
