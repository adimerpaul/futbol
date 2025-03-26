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
  async create(body) {
    const equipo = this.equipoRepository.create({
      name: body.name,
      liga: { id: body.ligaId },
      imagen: body.imagen,
    });
    return await this.equipoRepository.save(equipo);
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

  async update(id: number, body) {
    const equipo = await this.equipoRepository.findOne({ where: { id } });
    if (!equipo) {
      throw new Error(`Equipo with id ${id} not found`);
    }
    equipo.name = body.name;
    if (body.imagen) {
      equipo.imagen = body.imagen;
    }
    return await this.equipoRepository.save(equipo);
  }

  async remove(id: number) {
    console.log('id', id);
    const equipo = await this.equipoRepository.findOne({ where: { id } });
    if (!equipo) {
      throw new Error(`Equipo with id ${id} not found`);
    }
    return await this.equipoRepository.softDelete({ id });
  }
}
