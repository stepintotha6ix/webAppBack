import { Module } from '@nestjs/common'

import { TelegramModule } from './telegram/telegram.module'
import { TelegrafModule } from 'nestjs-telegraf'
import { ProductModule } from './product/product.module'
import { OrderModule } from './order/order.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { getMongoDbConfig } from './config/mongo.config'
import { FileModule } from './file/file.module'
import { ProductSchema } from './product/product.schema'

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),

		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoDbConfig,
		}),
		TelegramModule,
		TelegrafModule.forRoot({
			token: process.env.TELEGRAM_TOKEN,
		}),
		ProductModule,
		OrderModule,
		FileModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
