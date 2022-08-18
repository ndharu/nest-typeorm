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
import { TugasService } from './tugas.service';
import { CreateTugasDto } from './dto/create-tugas.dto';
import { UpdateTugasDto } from './dto/update-tugas.dto';

@Controller('tugas')
export class TugasController {
  constructor(private readonly tugasService: TugasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() data: CreateTugasDto) {
    return await this.tugasService.create(data);
  }

  @Get()
  findAll() {
    return this.tugasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tugasService.findOne(+id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() updateTugasDto: UpdateTugasDto,
  ) {
    this.tugasService.update(+id, updateTugasDto);
    return [`id ${id} berhasil di update`, updateTugasDto];
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.tugasService.remove(+id);
    return `tugas dengan id ${id} berhasil di hapus`;
  }
}
