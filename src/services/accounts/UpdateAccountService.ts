import { Account } from '../../entities/Account';
import { getRepository } from 'typeorm';

type AccountUpdateRequest = {
  id: string;
  name: string;
};

export class UpdateAccountService {
  async execute({ id, name }: AccountUpdateRequest) {
    const repo = await getRepository(Account);

    const account = await repo.findOne(id);

    if (!account) return new Error('Account not found');
    if (!name) return new Error('Name is required');
    if (typeof name !== 'string') return new Error('name must be a string');
    if (await repo.findOne({ name })) return new Error('This account already exists');

    account.name = name;

    await repo.save(account);

    return account;
  }
}
