import { Request, Response } from 'express';
import { GetOneCategoryService } from '../../services/categories/GetOneCategoryService';

export class GetOneCategoryController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const service = new GetOneCategoryService();
      
      const category = await service.execute({id});

      if (category instanceof Error) return res.status(404).json(category.message);
      
      return res.status(200).json(category);
    } catch (e) {
      return res.status(500).json('Internal server error')
    }
  }
}
