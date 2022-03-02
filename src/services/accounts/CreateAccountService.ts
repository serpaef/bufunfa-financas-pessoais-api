import { Account } from '../../entities/Account';
import { getRepository } from 'typeorm';

type AccountRequest = {
  name: string;
  value: number;
}
export class CreateAccountService {
  async execute(name: string) {
    const repo = getRepository(Account);

    if (!name) return new Error('name is required');
    if (typeof name !== 'string') return new Error('name must be a string');

    const accountReq = {
      name,
      balance: 0.00,
    }

    const account = repo.create(accountReq);

    await repo.save(account);

    return account;
  }
}
