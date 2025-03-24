import { Test, TestingModule } from '@nestjs/testing';
import { LigasController } from './ligas.controller';
import { LigasService } from './ligas.service';

describe('LigasController', () => {
  let controller: LigasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LigasController],
      providers: [LigasService],
    }).compile();

    controller = module.get<LigasController>(LigasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
