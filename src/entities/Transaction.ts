import { Goal } from './Goal';
import { Category } from './Category';
import { TransactionType } from './TransactionType';
import { Account } from './Account';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  accountId: number;

  @ManyToOne(() => Account)
  @JoinColumn({name: 'accountId'})
  account: string;

  @Column('int')
  typeId: number;

  @ManyToOne(() => TransactionType)
  @JoinColumn({name: 'typeId'})
  transactionType: string;

  @Column('varchar')
  description: string;

  @Column('int')
  categoryId: number;

  @ManyToOne(() => Category)
  @JoinColumn({name: 'categoryId'})
  category: string;

  @Column('int')
  goalId: number;

  @ManyToOne(() => Goal)
  @JoinColumn({name: 'goalId'})
  goal: string;

  @Column('date')
  date: Date;

  @Column('double')
  value: number;
}
