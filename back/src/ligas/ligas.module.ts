import { Module } from '@nestjs/common';
import { LigasService } from './ligas.service';
import { LigasController } from './ligas.controller';
import { Ligas } from './entities/ligas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Ligas])],
  controllers: [LigasController],
  providers: [LigasService],
})
export class LigasModule {}
