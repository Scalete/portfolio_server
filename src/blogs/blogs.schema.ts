import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogsDocument = Blogs & Document;

@Schema()
export class Blogs {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  author: string;

  @Prop({ default: 0 })
  rank: number;

  @Prop({ default: Date.now })
  date: Date;
}

export const BlogsSchema = SchemaFactory.createForClass(Blogs);