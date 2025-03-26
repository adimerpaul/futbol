import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import * as sharp from 'sharp';
import * as fs from 'node:fs';
@Controller('equipos')
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, file.fieldname + '-' + extname(file.originalname));
        },
      }),
    }),
  )
  async create(@Body() body, @UploadedFile() file) {
    if (file) {
      // console.log('file', file);
      const compressedImage = 'compressed-' + file.originalname;
      const compressedPath = './uploads/' + compressedImage;
      await sharp(file.path)
        .resize(124)
        // .jpeg({ quality: 80 })
        .png({ compressionLevel: 9 })
        .toFile(compressedPath);

      fs.unlink(file.path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('File deleted');
        }
      });
      body.imagen = compressedImage;
    } else {
      body.imagen = 'default.png';
    }
    // console.log('body', body);
    return this.equiposService.create(body);
  }

  @Get()
  findAll(@Query('ligaId') ligaId) {
    // console.log('ligaId', ligaId);
    return this.equiposService.findAll(ligaId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.equiposService.findOne(+id);
  // }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, file.fieldname + '-' + extname(file.originalname));
        },
      }),
    }),
  )
  async update(@Param('id') id: string, @Body() body, @UploadedFile() file) {
    console.log('file', file);
    if (file) {
      // console.log('file', file);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const exten = extname(file.originalname);
      const compressedImage = 'compressed-' + uniqueSuffix + exten;
      const compressedPath = './uploads/' + compressedImage;
      // console.log('exten', exten);

      await sharp(file.path)
        .resize(124)
        // .jpeg({ quality: 80 })
        .png({ compressionLevel: 9 })
        .toFile(compressedPath);
      // sharp(file.path)
      //   .resize(124)
      //   .jpeg({ quality: 80 })
      //   // .png({ compressionLevel: 9 })
      //   .toFile(compressedPath);

      fs.unlink(file.path, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('File deleted');
        }
      });
      body.imagen = compressedImage;
    } else {
      delete body.imagen;
    }
    return this.equiposService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equiposService.remove(+id);
  }
}
