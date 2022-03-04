import { TransactionType } from '../../entities/TransactionType';
import { getRepository } from 'typeorm';

export class DeleteTypeService {
  async execute(id: string) {
    const repo = getRepository(TransactionType);

    const typeToRemove = await repo.findOne(id);

    if (!typeToRemove) return new Error ('Type not found');

    return repo.delete(id);
  }
}
