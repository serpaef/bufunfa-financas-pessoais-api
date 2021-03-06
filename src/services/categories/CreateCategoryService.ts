import { Category } from '../../entities/Category';
import { getRepository } from 'typeorm';

type CategoryRequest = {
  name: string;
}

export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    const repo = getRepository(Category);

    if (!name) return new Error('name is required');
    if (typeof name !== 'string') return new Error('name must be a string');
    if (await repo.findOne({name})) return new Error('Category already exists');

    const category = repo.create({ name });

    await repo.save(category);

    return category;
  }
}
