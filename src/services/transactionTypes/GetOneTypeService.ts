import { TransactionType } from './../../entities/TransactionType';
import { getRepository } from 'typeorm';

type GetOneTypeRequest = {
  id: string;
};

export class GetOneTypeService {
  async execute({ id }: GetOneTypeRequest) {
    if (!id) return new Error('id is required');

    const repo = getRepository(TransactionType);

    const type = await repo.findOne(id);

    if (!type) return new Error('Type not found');

    return type;
  }
}
