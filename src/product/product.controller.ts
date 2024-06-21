import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
	async createProduct(@Body() productDto: CreateProductDto) {

		return this.productService.createProduct(productDto)
	}

  @Get()
  async findAll() {
    return this.productService.findAll();
  }
}
