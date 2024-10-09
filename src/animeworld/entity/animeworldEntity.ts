// src/animetoons/animetoons.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('animetoons') // This should match the table name in the database
export class Animetoons {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  details: string;
}
