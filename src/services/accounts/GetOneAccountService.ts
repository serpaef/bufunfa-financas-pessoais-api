import { Account } from '../../entities/Account';
import { getRepository } from 'typeorm';

type GetOneAccountRequest = {
  id: string;
};

export class GetOneAccountService {
  async execute({ id }: GetOneAccountRequest) {
    if (!id) return new Error('id is required');

    const repo = getRepository(Account);

    const account = await repo.findOne(id);

    if (!account) return new Error('Account not found');

    return account;
  }
}
