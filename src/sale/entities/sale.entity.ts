import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sale')
export class SaleEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', nullable: false, length: 30, default: '' })
  Product: string;
  @Column({ type: 'varchar', nullable: false, length: 70, default: '' })
  FullName: string;
  @CreateDateColumn() CreatedAt: Date;
  @Column()
  Count: number;
  @Column({ type: 'float' })
  Price: number;
}
