import { Test, TestingModule } from '@nestjs/testing';
import { AnimeworldService } from './animeworld.service';

describe('AnimeworldService', () => {
  let service: AnimeworldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimeworldService],
    }).compile();

    service = module.get<AnimeworldService>(AnimeworldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
