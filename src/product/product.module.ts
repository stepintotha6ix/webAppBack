import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductSchema } from './product.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
		MongooseModule.forFeature([
			{
				schema: ProductSchema,
				name: 'Product',
			},
		]),
	],
})
export class ProductModule {}
