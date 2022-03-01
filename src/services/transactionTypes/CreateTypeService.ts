import { TransactionType } from './../../entities/TransactionType';
import { getRepository } from 'typeorm';

type TypeRequest = {
  name: string;
}

export class CreateTypeService {
  async execute({ name }: TypeRequest) {
    const repo = getRepository(TransactionType);

    if (!name) return new Error('name is required');
    if (typeof name !== 'string') return new Error('name must be a string');
    if (await repo.findOne({name})) return new Error('Type already exists');

    const type = repo.create({ name });

    await repo.save(type);

    return type;
  }
}
