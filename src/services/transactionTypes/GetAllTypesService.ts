import { TransactionType } from '../../entities/TransactionType';
import { getRepository } from 'typeorm';

export class GetAllTypesService {
  async execute() {
    const repo = getRepository(TransactionType);

    const types = await repo.find();

    return types;
  }
}
