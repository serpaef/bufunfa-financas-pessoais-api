import { Account } from '../../entities/Account';
import { getRepository } from 'typeorm';

type RemoveBalanceRequest = {
  id: string;
  value: number;
};

export class RemoveBalanceService {
  async execute({id, value}: RemoveBalanceRequest) {
    const repo = await getRepository(Account);

    const account = await repo.findOne(id);

    if (!account) return new Error('Account not found');

    account.balance -= value;

    await repo.save(account);

    return account;
  }
}
