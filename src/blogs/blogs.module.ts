import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Blogs, BlogsSchema } from './blogs.schema';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Blogs.name, schema: BlogsSchema }])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}