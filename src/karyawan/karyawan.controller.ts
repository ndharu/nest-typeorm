import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { KaryawanService } from './karyawan.service';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { UpdateKaryawanDto } from './dto/update-karyawan.dto';

@Controller('karyawan')
export class KaryawanController {
  constructor(private readonly karyawanService: KaryawanService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() data: CreateKaryawanDto) {
    return await this.karyawanService.create(data);
  }

  @Get()
  findAll() {
    return this.karyawanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.karyawanService.findOne(+id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() updateKaryawanDto: UpdateKaryawanDto,
  ) {
    this.karyawanService.update(+id, updateKaryawanDto);
    return [`id ${id} berhasil di update`, updateKaryawanDto];
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.karyawanService.remove(+id);
    return `id ${id} berhasil di hapus`;
  }
}
