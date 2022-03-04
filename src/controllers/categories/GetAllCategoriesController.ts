import { Request, Response } from 'express';
import { GetAllCategoriesService } from '../../services/categories/GetAllCategoriesService';

export class GetAllCategoriesController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetAllCategoriesService();
      
      const categories = await service.execute();
      
      return res.status(200).json(categories);
    } catch (e) {
      return res.status(500).json('Internal server error')
    }
  }
}
