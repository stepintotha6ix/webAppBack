import { IsArray, IsNumber, IsString, isString } from 'class-validator'
import mongoose from 'mongoose'

export class CreateProductDto {
	@IsNumber()
	price: number
	@IsString()
	title: string
	@IsString()
	description: string
	@IsString()
	image: string
	
}
