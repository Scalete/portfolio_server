import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blogs, BlogsDocument } from './blogs.schema';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Blogs.name) private blogsModel: Model<BlogsDocument>) {}

  async create(blog: Blogs): Promise<Blogs> {
    const createdBlog = new this.blogsModel(blog);
    return createdBlog.save();
  }

  async findAll(): Promise<Blogs[]> {
    return this.blogsModel.find().exec();
  }

  async findOne(id: string): Promise<Blogs> {
    return this.blogsModel.findById(id).exec();
  }

  async findLastTwoPosts(): Promise<Blogs[]> {
    return this.blogsModel.find().sort({ date: -1 }).limit(2).exec();
  }
}