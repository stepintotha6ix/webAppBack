import { Controller } from '@nestjs/common'
import { TelegramService } from './telegram.service'
import { InjectBot, Start, Update } from 'nestjs-telegraf'
import { Context, Markup, Telegraf } from 'telegraf'
const webAppUrl = 'https://23f3-95-70-20-79.ngrok-free.app'

@Update()
export class TelegramUpdate {
	constructor(
		@InjectBot() private readonly bot: Telegraf<Context>,
		private readonly telegramService: TelegramService
	) {}


  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply("Hi friend!", 
      Markup.inlineKeyboard([
        Markup.button.webApp('Сделать заказ', `${webAppUrl}`),
      ])
    )
  }
}
