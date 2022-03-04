import { Transaction } from '../../entities/Transaction';
import { getRepository } from 'typeorm';
import { AddBalanceService } from '../accounts/AddBalanceService';
import { RemoveBalanceService } from '../accounts/RemoveBalanceService';

const DEPOSIT = 1;
const PAYMENT = 2;

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
    
    if (typeId === DEPOSIT) {
      const service = new AddBalanceService();
      await service.execute({id: ''+accountId, value});
    }
    
    if (typeId === PAYMENT) {
      const service = new RemoveBalanceService();
      await service.execute({id: ''+accountId, value});
    }

    const transaction = repo.create(transactionToRegister);

    await repo.save(transaction);

    return transaction;
  }
}
