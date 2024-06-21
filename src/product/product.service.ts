import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { Product } from './product.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ProductService {
	constructor(
		@InjectModel('Product') private readonly productModel: Model<Product>
	) {}
	async createProduct(productDto: CreateProductDto) {
		const newProduct = new this.productModel({
			price: productDto.price,
			title: productDto.title,
			description: productDto.description,
			image: productDto.image,
			
		})
		const product = await newProduct.save()
		return product
	}



  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
