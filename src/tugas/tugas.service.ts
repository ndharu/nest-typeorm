import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTugasDto } from './dto/create-tugas.dto';
import { UpdateTugasDto } from './dto/update-tugas.dto';
import { Tugas } from './entities/tugas.entity';

@Injectable()
export class TugasService {
  constructor(
    @InjectRepository(Tugas)
    private tugasRepository: Repository<Tugas>,
  ) {}

  async create(data: CreateTugasDto) {
    return await this.tugasRepository.save(data);
  }

  findAll(): Promise<Tugas[]> {
    return this.tugasRepository.find({ relations: ['assigned'] });
  }

  findOne(id: number): Promise<Tugas> {
    return this.tugasRepository.findOne({
      relations: ['assigned'],
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: UpdateTugasDto) {
    return await this.tugasRepository.update(id, data);
  }

  remove(id: number) {
    return this.tugasRepository.delete({ id });
  }
}
