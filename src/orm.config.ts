import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'asdqwe123',
  database: 'pttodis',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  logging: true,
  migrations: ['dist/**/*.entity.js'],
  migrationsTableName: 'migration',
};
