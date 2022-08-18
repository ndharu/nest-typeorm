import { Karyawan } from 'src/karyawan/entities/karyawan.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('tugas')
export class Tugas {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Karyawan, (karyawan: Karyawan) => karyawan.task)
  assigned: Karyawan[];

  @Column()
  assignedId: number;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 200 })
  description: string;
}
