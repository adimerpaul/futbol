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
  async create(body) {
    const liga = this.ligasRepository.create(body);
    await this.ligasRepository.save(liga);
    return liga;
  }

  async findAll() {
    const ligas = await this.ligasRepository.find();

    return ligas.map((liga) => ({
      ...liga,
      equipos: 0,
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} ligas`;
  }

  async update(id: number, body) {
    const liga = await this.ligasRepository.findOne({ where: { id } });
    if (!liga) {
      throw new Error('Liga not found');
    }

    await this.ligasRepository.update({ id }, body);
    return this.ligasRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const liga = await this.ligasRepository.findOne({ where: { id } });
    if (!liga) {
      throw new Error('Liga not found');
    }

    await this.ligasRepository.softDelete({ id });
    return liga;
  }
}
