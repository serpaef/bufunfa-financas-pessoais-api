import { Category } from '../../entities/Category';
import { getRepository } from 'typeorm';

type CategoryUpdateRequest = {
  id: string;
  name: string;
}

export class UpdateCategoryService {
  async execute({id, name}: CategoryUpdateRequest) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) return new Error('Category not found');
    if (!name) return new Error('name is required');
    if (typeof name !== 'string') return new Error('name must be a string');
    if (await repo.findOne({name})) return new Error('This category already exists');

    category.name = name;

    await repo.save(category);

    return category;
  }
}