import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactionTypes')
export class TransactionType {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: string;
}
