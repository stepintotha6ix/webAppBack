import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ProductSchema } from 'src/product/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './order.schema';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [
		MongooseModule.forFeature([
			{
				schema: ProductSchema,
				name: 'Product',
			},{
				schema: OrderSchema,
				name: 'Order',
			},
		]),
	],
})
export class OrderModule {}
