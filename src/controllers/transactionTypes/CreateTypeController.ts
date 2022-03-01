import { CreateTypeService } from '../../services/transactionTypes/CreateTypeService';
import { Request, Response } from 'express';

export class CreateTypeController {
  async handle(req: Request, res: Response) {
    try{
      const { name } = req.body;
      
      const service = new CreateTypeService();
      
      const type = await service.execute({ name });
      
      if (type instanceof Error) return res.status(400).json(type.message);
      
      return res.status(200).json(type);
    } catch ({ message }) {
      console.log(message)
      return res.status(500).json('Internal server error');
    }
  }
}
