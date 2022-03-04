import { Transaction } from '../../entities/Transaction';
import { getRepository } from 'typeorm';

export class DeleteTransactionService {
  async execute(id: string) {
    const repo = getRepository(Transaction);

    const transactionToRemove = await repo.findOne(id);

    if (!transactionToRemove) return new Error('Transaction not found');

    return repo.delete(id);
  }
}
