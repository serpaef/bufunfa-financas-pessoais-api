import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @Column('varchar')
  name: string;

  @Column('double')
  value: number;
}
