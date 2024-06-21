import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'

@Schema()
export class Product {
	_id: mongoose.Types.ObjectId
	@Prop()
	price: number
	@Prop()
	title: string
	@Prop()
	description: string
	@Prop()
	image: string
	@Prop({ type: Date, default: Date.now })
	createdAt: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product)