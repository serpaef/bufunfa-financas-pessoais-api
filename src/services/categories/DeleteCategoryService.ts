import { Category } from '../../entities/Category';
import { getRepository } from 'typeorm';

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category);

    const catToRemove = await repo.findOne(id);

    if (!catToRemove) return new Error ('Category not found');

    return repo.delete(id);
  }
}
