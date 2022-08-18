import { PartialType } from '@nestjs/mapped-types';
import { CreateKaryawanDto } from './create-karyawan.dto';
import { IsNotEmpty, Length } from 'class-validator';

export class UpdateKaryawanDto extends PartialType(CreateKaryawanDto) {
  @IsNotEmpty({ message: 'The name cannot be null!' })
  @Length(3, 50)
  name: string;
}
