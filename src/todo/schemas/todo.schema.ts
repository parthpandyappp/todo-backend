import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true })
  todo: string;

  @Prop()
  isCompleted?: boolean;

  @Prop({ required: true })
  createdAt: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
