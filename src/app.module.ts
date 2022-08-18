import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config/orm.config';
import { KaryawanModule } from './karyawan/karyawan.module';
import { TugasModule } from './tugas/tugas.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), KaryawanModule, TugasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
