import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  imageUrl: string;

  @ApiProperty()
  @Column('int')
  weight: number;

  @ApiProperty()
  @Column({ default: true })
  isAvailable: boolean;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
