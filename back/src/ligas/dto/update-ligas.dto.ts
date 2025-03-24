import { PartialType } from '@nestjs/mapped-types';
import { CreateLigasDto } from './create-ligas.dto';

export class UpdateLigasDto extends PartialType(CreateLigasDto) {}
