import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'

@Schema()
export class Order {
	_id: mongoose.Types.ObjectId
	@Prop()
	totalPrice: number
	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
	products: mongoose.Types.ObjectId[];
	@Prop({ type: Object })
	user: object
	@Prop({ type: Date, default: Date.now })
	createdAt: Date

	
}
export const OrderSchema = SchemaFactory.createForClass(Order)