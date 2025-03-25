import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Ligas } from '../../ligas/entities/ligas.entity';

@Entity('equipos')
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false, default: 'default.png' })
  imagen: string;
  @Column({ nullable: false, default: 'Futbol' })
  tipo: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  // liga
  @ManyToOne(() => Ligas, (liga) => liga.equipos)
  liga: Ligas;
}
