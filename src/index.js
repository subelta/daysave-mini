import TelegramBot from 'node-telegram-bot-api';
import { TOKEN } from '../config.js';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
	const { chat, text } = msg;

	switch (text) {
		case '/set_question': {
			bot.sendMessage(chat.id, 'Will set question');
			break;
		}
		case '/set_interval': {
			bot.sendMessage(chat.id, 'Will set interval');
			break;
		}
		case '/stop': {
			bot.sendMessage(chat.id, 'Will stop');
			break;
		}
		case '/restart': {
			bot.sendMessage(chat.id, 'Will restart');
			break;
		}
		default: {
			// console.log(msg);
			bot.sendMessage(chat.id, 'I don\'t understand');
		}
	}
});
