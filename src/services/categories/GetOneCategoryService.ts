import { Category } from '../../entities/Category';
import { getRepository } from 'typeorm';

type GetOneCategoryRequest = {
  id: string;
}

export class GetOneCategoryService {
  async execute({id}: GetOneCategoryRequest) {
    if(!id) return new Error('id is required');
    
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) return new Error('Category not found');

    return category;
  }
}
