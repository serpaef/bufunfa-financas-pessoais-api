import { Transaction } from '../../entities/Transaction';
import { getRepository } from 'typeorm';

type GetOneTransactionRequest = {
  id: string;
};

export class GetOneTransactionService {
  async execute({ id }: GetOneTransactionRequest) {
    if (!id) return new Error('id is required');

    const repo = getRepository(Transaction);

    const transaction = await repo.findOne(id, {
      relations: ['category', 'goal', 'transactionType'],
    });

    if (!transaction) return new Error('Transaction not found');

    return transaction;
  }
}
