import TelegramBot from 'node-telegram-bot-api';
import Agent from 'socks5-https-client/lib/Agent.js';

import { TOKEN } from '../config.js';
import { PROXY_HOST, PROXY_PORT } from '../config.js';

const bot = new TelegramBot(
	TOKEN,
	{
		polling: true,
		request: {
			agentClass: Agent,
			agentOptions: {
				socksHost: PROXY_HOST,
				socksPort: PROXY_PORT,
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
