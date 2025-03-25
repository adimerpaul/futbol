import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Put,
} from '@nestjs/common';
import { LigasService } from './ligas.service';
import { CreateLigasDto } from './dto/create-ligas.dto';
import { UpdateLigasDto } from './dto/update-ligas.dto';

@Controller('ligas')
export class LigasController {
  constructor(private readonly ligasService: LigasService) {}

  @Post()
  create(@Body() body) {
    return this.ligasService.create(body);
  }

  @Get()
  findAll() {
    return this.ligasService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ligasService.findOne(+id);
  // }
  //
  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.ligasService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ligasService.remove(+id);
  }
}
