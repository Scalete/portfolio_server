import { Controller, Get, Post, Body } from '@nestjs/common';
import { Blogs } from './blogs.schema';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  async create(@Body() blog: Blogs): Promise<Blogs> {
    return this.blogsService.create(blog);
  }

  @Get()
  async findAll(): Promise<Blogs[]> {
    return this.blogsService.findAll();
  }

  @Get('ranked')
  async findWithRank(): Promise<Blogs[]> {
    return this.blogsService.findWithRank();
  }
}