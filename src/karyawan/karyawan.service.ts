import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationId, Repository } from 'typeorm';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { UpdateKaryawanDto } from './dto/update-karyawan.dto';
import { Karyawan } from './entities/karyawan.entity';

@Injectable()
export class KaryawanService {
  constructor(
    @InjectRepository(Karyawan)
    private karyawanRepository: Repository<Karyawan>,
  ) {}

  async create(data: CreateKaryawanDto) {
    return await this.karyawanRepository.save(data);
  }

  findAll(): Promise<Karyawan[]> {
    return this.karyawanRepository.find();
  }

  async findOne(id: number): Promise<Karyawan> {
    return await this.karyawanRepository.findOne({
      relations: ['task'],
      where: { id: id },
    });
  }

  async update(id: number, data: UpdateKaryawanDto) {
    return await this.karyawanRepository.update(id, data);
  }

  remove(id: number) {
    return this.karyawanRepository.delete({ id });
  }
}
