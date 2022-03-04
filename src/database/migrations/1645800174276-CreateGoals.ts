import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateGoals1645800174276 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'goals',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'title', type: 'varchar' },
          { name: 'valueToAchieve', type: 'double' },
          { name: 'reachedValue', type: 'double' },
          { name: 'start', type: 'date' },
          { name: 'deadline', type: 'date' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('goals');
  }
}
