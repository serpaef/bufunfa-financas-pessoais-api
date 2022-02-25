import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransactions1645800327743 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'accountId', type: 'int' },
          { name: 'typeId', type: 'int' },
          { name: 'description', type: 'int' },
          { name: 'categoryId', type: 'int' },
          { name: 'goalId', type: 'int', isNullable: true },
          { name: 'date', type: 'date' },
          { name: 'value', type: 'double' },
        ],
        foreignKeys: [
          {
            name: 'transaction_account',
            columnNames:['accountId'],
            referencedTableName:'accounts',
            referencedColumnNames:['id'],
          },
          {
            name: 'transaction_type',
            columnNames:['typeId'],
            referencedTableName:'transactionTypes',
            referencedColumnNames:['id'],
          },
          {
            name: 'transaction_category',
            columnNames:['categoryId'],
            referencedTableName:'categories',
            referencedColumnNames:['id'],
          },
          {
            name: 'transaction_goal',
            columnNames:['goalId'],
            referencedTableName:'goals',
            referencedColumnNames:['id'],
          },
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
