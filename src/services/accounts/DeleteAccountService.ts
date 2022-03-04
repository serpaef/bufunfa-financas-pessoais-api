import { Account } from '../../entities/Account';
import { getRepository } from 'typeorm';

export class DeleteAccountService {
  async execute(id: string) {
    const repo = getRepository(Account);

    const accToRemove = await repo.findOne(id);

    if (!accToRemove) return new Error('Account not found');

    return repo.delete(id);
  }
}
