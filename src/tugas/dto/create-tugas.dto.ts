import { IsNotEmpty, Length } from 'class-validator';
import { Karyawan } from 'src/karyawan/entities/karyawan.entity';

export class CreateTugasDto {
  @IsNotEmpty({ message: 'The title cannot be empty' })
  @Length(1, 50)
  title: string;

  @IsNotEmpty({ message: 'The description cannot be empty' })
  @Length(1, 200)
  description: string;

  @IsNotEmpty({ message: 'TIDAK BOLEH KOSONG' })
  assignedId: number | null;
}
