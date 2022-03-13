import { Transaction } from '../../entities/Transaction';
import { getRepository } from 'typeorm';
import { AddBalanceService } from '../accounts/AddBalanceService';
import { RemoveBalanceService } from '../accounts/RemoveBalanceService';

const RECEIPT = 1;
const EXPENSE = 2;

type TransactionRequest = {
  accountId: number;
  typeId: number;
  description: string;
  categoryId: number;
  goalId?: number;
  value: number;
};

export class CreateTransactionService {
  async execute({
    accountId,
    typeId,
    description,
    categoryId,
    goalId,
    value,
  }: TransactionRequest) {
    const repo = getRepository(Transaction);

    const transactionToRegister = {
      accountId,
      typeId,
      description,
      categoryId,
      goalId,
      date: new Date(Date.now()),
      value,
    };
    
    if (typeId === RECEIPT) {
      const service = new AddBalanceService();
      await service.execute({id: ''+accountId, value});
    }
    
    if (typeId === EXPENSE) {
      const service = new RemoveBalanceService();
      await service.execute({id: ''+accountId, value});
    }

    const transaction = repo.create(transactionToRegister);

    await repo.save(transaction);

    return transaction;
  }
}
