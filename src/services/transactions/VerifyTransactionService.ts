import verifyAccountId from './utils/verifyAccountId';
import verifyCategoryId from './utils/verifyCategoryId';
import verifyDescription from './utils/verifyDescription';
import verifyGoalId from './utils/verifyGoalId';
import verifyTypeId from './utils/verifyTypeId';
import verifyValue from './utils/verifyValue';

type TransactionRequest = {
  accountId: number; // done
  typeId: number;
  description: string;
  categoryId: number;
  goalId: number;
  value: number;
};

export class VerifyTransactionService {
  async execute({
    accountId,
    categoryId,
    goalId,
    description,
    typeId,
    value,
  }: TransactionRequest) {
    try {
      await verifyAccountId(accountId);
      await verifyTypeId(typeId);
      await verifyCategoryId(categoryId);
      await verifyGoalId(goalId);
      verifyDescription(description);
      verifyValue(value);
    } catch (error) {
      return error;
    }
  }
}
