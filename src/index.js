import TelegramBot from 'node-telegram-bot-api';
import { TOKEN } from '../config.js';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
	const chatId = msg.chat.id;
	const resp = match[1];

	bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
	const chatId = msg.chat.id;

	bot.sendMessage(chatId, 'Received your message');
});
