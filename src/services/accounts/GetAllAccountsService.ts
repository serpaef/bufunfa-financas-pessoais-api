import { Account } from '../../entities/Account';
import { getRepository } from 'typeorm';

export class GetAllAccountsService {
  async execute() {
    const repo = getRepository(Account);
    
    const accounts = await repo.find();

    return accounts;
  }
}