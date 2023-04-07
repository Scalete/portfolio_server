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
  categories: string[];

  @Prop({ default: 0 })
  rank: number;

  @Prop({ default: Date.now })
  date: Date;
}

export const WorksSchema = SchemaFactory.createForClass(Works);