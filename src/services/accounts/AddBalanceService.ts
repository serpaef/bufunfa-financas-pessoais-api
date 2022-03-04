import { Account } from '../../entities/Account';
import { getRepository } from 'typeorm';

type AddBalanceRequest = {
  id: string;
  value: number;
};

export class AddBalanceService {
  async execute({id, value}: AddBalanceRequest) {
    const repo = await getRepository(Account);

    const account = await repo.findOne(id);

    if (!account) return new Error('Account not found');

    account.balance += value;

    await repo.save(account);

    return account;
  }
}
