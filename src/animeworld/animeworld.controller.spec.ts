import { Test, TestingModule } from '@nestjs/testing';
import { AnimeworldController } from './animeworld.controller';

describe('AnimeworldController', () => {
  let controller: AnimeworldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimeworldController],
    }).compile();

    controller = module.get<AnimeworldController>(AnimeworldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
