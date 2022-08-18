import { PartialType } from '@nestjs/mapped-types';
import { CreateTugasDto } from './create-tugas.dto';
import { IsNotEmpty, Length } from 'class-validator';
export class UpdateTugasDto extends PartialType(CreateTugasDto) {
  @IsNotEmpty({ message: 'The title cannot be empty' })
  @Length(1, 50)
  title: string;

  @IsNotEmpty({ message: 'The description cannot be empty' })
  @Length(1, 200)
  description: string;
}
