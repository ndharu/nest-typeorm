import { Tugas } from 'src/tugas/entities/tugas.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('karyawan')
export class Karyawan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @OneToMany(() => Tugas, (tugas: Tugas) => tugas.assigned, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  task: Tugas[];
}
