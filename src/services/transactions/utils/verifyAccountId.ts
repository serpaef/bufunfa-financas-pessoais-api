import { GetOneAccountService } from '../../accounts/GetOneAccountService';

async function verifyAccountId(accountId: number) {
  if (!accountId) throw new Error('accountId is required');
  if (typeof accountId !== 'number') throw new Error('accountId must be a number');

  const service = new GetOneAccountService();
  const account = await service.execute({ id: ''+accountId });

  if (account instanceof Error) throw new Error('Account not found');
}

export default verifyAccountId;
