import { Controller, Get, Post, Body, Param } from "@nestjs/common";
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

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Blogs> {
    return this.blogsService.findOne(id);
  }

  @Get('recent/two')
  async findLastTwoPosts(): Promise<Blogs[]> {
    return this.blogsService.findLastTwoPosts();
  }
}