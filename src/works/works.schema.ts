import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorksDocument = Works & Document;

@Schema()
export class Works {
  @Prop()
  title: string;

  @Prop()
  shortDescription: string;

  @Prop()
  smallImg: string;

  @Prop()
  link: string;

  @Prop()
  categories: string[];

  @Prop({ default: 0 })
  rank: number;

  @Prop({ default: Date.now })
  date: Date;

  @Prop({ type: [{ title: String, subheaders: [{ title: String, description: String, images: [String] }] }] })
  headers: { title: string; subheaders: { title: string; description: string; images: string[] }[] }[];
}

export const WorksSchema = SchemaFactory.createForClass(Works);