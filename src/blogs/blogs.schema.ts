import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogsDocument = Blogs & Document;

class Header {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema()
export class Blogs {
  @Prop()
  title: string;

  @Prop()
  shortDescription: string;

  @Prop()
  fullDescription: string;

  @Prop()
  descriptionImg: string;

  @Prop([String])
  categories: string[];

  @Prop([Header])
  headers: Header[];

  @Prop({ default: Date.now })
  date: Date;
}

export const BlogsSchema = SchemaFactory.createForClass(Blogs);