import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
	async createProduct(@Body() orderDto ) {

		return this.orderService.createOrder(orderDto)

    
	}
  @Get()
  async findAll() {
    return this.orderService.findAll();
  }
}
