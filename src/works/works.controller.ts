import { Controller, Get, Post, Body, Param  } from '@nestjs/common';
import { Works } from './works.schema';
import { WorksService } from './works.service';

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Post()
  async create(@Body() work: Works): Promise<Works> {
    return this.worksService.create(work);
  }

  @Get()
  async findAll(): Promise<Works[]> {
    return this.worksService.findAll();
  }

  @Get('ranked')
  async findWithRank(): Promise<Works[]> {
    return this.worksService.findWithRank();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Works> {
    return this.worksService.findOne(id);
  }
}
