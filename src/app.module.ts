import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { config, typeOrmConfig } from './config/orm.config';
=======
import { config } from './config/orm.config';
>>>>>>> 111eed0cb652437d3e3905f85e8c26fcc94e1ae5
import { KaryawanModule } from './karyawan/karyawan.module';
import { TugasModule } from './tugas/tugas.module';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    EventEmitterModule.forRoot(),
    KaryawanModule,
    TugasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
