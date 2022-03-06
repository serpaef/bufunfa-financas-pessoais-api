import { Transaction } from '../../entities/Transaction';
import { getRepository } from 'typeorm';

export class GetAllTransactionsService {
  async execute() {
    const repo = getRepository(Transaction);

    const transactions = await repo.find({relations: ['category', 'goal', 'transactionType']});

    return transactions;
  }
}
