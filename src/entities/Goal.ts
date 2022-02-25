import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('goals')
export class Goal {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  title: string;

  @Column('double')
  valueToAchieve: number;

  @Column('double')
  reachedValue: number;

  @Column('date')
  start: Date;

  @Column('date')
  deadline: Date;
}
