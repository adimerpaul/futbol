import { Injectable } from '@nestjs/common';
import { CreateLigasDto } from './dto/create-ligas.dto';
import { UpdateLigasDto } from './dto/update-ligas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ligas } from './entities/ligas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LigasService {
  constructor(
    @InjectRepository(Ligas)
    private ligasRepository: Repository<Ligas>,
  ) {}
  create(createLigasDto: CreateLigasDto) {
    return 'This action adds a new ligas';
  }

  async findAll() {
    return await this.ligasRepository.find({
      select: ['id', 'name'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} ligas`;
  }

  update(id: number, updateLigasDto: UpdateLigasDto) {
    return `This action updates a #${id} ligas`;
  }

  remove(id: number) {
    return `This action removes a #${id} ligas`;
  }
}
