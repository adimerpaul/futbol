import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LigasService } from './ligas.service';
import { CreateLigasDto } from './dto/create-ligas.dto';
import { UpdateLigasDto } from './dto/update-ligas.dto';

@Controller('ligas')
export class LigasController {
  constructor(private readonly ligasService: LigasService) {}

  // @Post()
  // create(@Body() createLigasDto: CreateLigasDto) {
  //   return this.ligasService.create(createLigasDto);
  // }

  @Get()
  findAll() {
    return this.ligasService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ligasService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLigasDto: UpdateLigasDto) {
  //   return this.ligasService.update(+id, updateLigasDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ligasService.remove(+id);
  // }
}
