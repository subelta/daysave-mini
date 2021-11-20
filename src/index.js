import TelegramBot from 'node-telegram-bot-api';
import { TOKEN } from '../config.js';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.setMyCommands([
	{ command: 'set_question', description: 'Will set question' },
	{ command: 'set_interval', description: 'Will set interval' },
	{ command: 'stop', description: 'Will stop' },
	{ command: 'restart', description: 'Will restart' },
]);

bot.on('message', (msg) => {
	const { chat, text } = msg;

	switch (text) {
		case '/set_question': {
			bot.sendMessage(chat.id, 'Yeah, will set question');
			break;
		}
		case '/set_interval': {
			bot.sendMessage(chat.id, 'Yeah, will set interval');
			break;
		}
		case '/stop': {
			bot.sendMessage(chat.id, 'Yeah, will stop');
			break;
		}
		case '/restart': {
			bot.sendMessage(chat.id, 'Yeah, will restart');
			break;
		}
		default: {
			// console.log(msg);
			bot.sendMessage(chat.id, 'I don\'t understand');
		}
	}
});
