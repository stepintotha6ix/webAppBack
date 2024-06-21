import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Order } from './order.schema'

@Injectable()
export class OrderService {
	constructor(
		@InjectModel('Order') private readonly orderModel: Model<Order>
	) {}
	async createOrder(orderDto) {
		
		const newProduct = new this.orderModel({
			totalPrice: orderDto.totalPrice,
			products: orderDto.products,
			image: orderDto.image,
			user: orderDto.user,
		})
		const product = await newProduct.save()
		return product
	}
	async findAll() {
		return this.orderModel.find().exec()
	}
}
