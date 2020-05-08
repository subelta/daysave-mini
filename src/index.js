import TelegramBot from 'node-telegram-bot-api';
import Agent from 'socks5-https-client/lib/Agent.js';

import { TOKEN } from '../config.js';

const bot = new TelegramBot(
	TOKEN,
	{
		polling: true,
		request: {
			agentClass: Agent,
			agentOptions: {
				socksHost: '78.46.200.216',
				socksPort: '12171'
			}
		}
	}
);

bot.onText(/\/echo (.+)/, (msg, match) => {
	const chatId = msg.chat.id;
	const resp = match[1];

	bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
	const chatId = msg.chat.id;

	bot.sendMessage(chatId, 'Received your message');
});
