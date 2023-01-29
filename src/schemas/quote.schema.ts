import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuoteDocument = HydratedDocument<Quote>;

@Schema()
export class Quote {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);
