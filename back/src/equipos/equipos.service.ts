import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(Equipo)
    private equipoRepository: Repository<Equipo>,
  ) {}
  create(createEquipoDto: CreateEquipoDto) {
    return 'This action adds a new equipo';
  }

  async findAll(ligaId) {
    if (!ligaId) {
      return await this.equipoRepository.find();
    }
    // console.log('ligaId', ligaId);
    const equipos = await this.equipoRepository.find({
      where: { liga: { id: ligaId } },
    });

    return equipos.map((equipo) => ({
      ...equipo,
      ultimos5: ['Ganó', 'Perdió', '', 'Empate', 'Perdió'],
    }));
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} equipo`;
  // }

  update(id: number, updateEquipoDto: UpdateEquipoDto) {
    return `This action updates a #${id} equipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipo`;
  }
}
