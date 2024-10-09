import { Module } from '@nestjs/common';
import { AnimeworldService } from './animeworld.service';
import { AnimeworldController } from './animeworld.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animetoons } from './entity/animeworldEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Animetoons])],
  providers: [AnimeworldService],
  controllers: [AnimeworldController]
})
export class AnimeworldModule {}
