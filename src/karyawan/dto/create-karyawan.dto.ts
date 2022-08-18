import { IsNotEmpty, Length } from 'class-validator';
export class CreateKaryawanDto {
  @IsNotEmpty({ message: 'The name cannot be null!' })
  @Length(3, 50)
  name: string;
}
