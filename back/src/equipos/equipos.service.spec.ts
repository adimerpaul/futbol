import { Test, TestingModule } from '@nestjs/testing';
import { EquiposService } from './equipos.service';

describe('EquiposService', () => {
  let service: EquiposService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquiposService],
    }).compile();

    service = module.get<EquiposService>(EquiposService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
