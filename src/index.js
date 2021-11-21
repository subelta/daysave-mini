import TelegramBot from 'node-telegram-bot-api';
import { TOKEN } from '../config.js';

const bot = new TelegramBot(TOKEN, { polling: true });

let chatState = {};

bot.setMyCommands([
	{ command: 'set_question', description: 'Will set question' },
	{ command: 'set_interval', description: 'Will set interval' },
	{ command: 'stop', description: 'Will stop' },
	{ command: 'restart', description: 'Will restart' },
]);

bot.on('message', (msg) => {
	const { chat, text } = msg;

	switch (text) {
		// optional: support question and interval as arguments
		case '/set_question': {
			bot.sendMessage(chat.id, 'PLease provide the new question');
			chatState[chat.id] = 'waiting_for_question';
			return;
		}
		case '/set_interval': {
			bot.sendMessage(chat.id, 'PLease provide the new interval');
			chatState[chat.id] = 'waiting_for_interval';
			return;
		}
		case '/stop': {
			bot.sendMessage(chat.id, 'Yeah, will stop');
			return;
		}
		case '/restart': {
			bot.sendMessage(chat.id, 'Yeah, will restart');
			return;
		}
		// default: {
		// 	// console.log(msg);
		// 	bot.sendMessage(chat.id, 'I don\'t understand');
		// }
	}

	if (text && chatState[chat.id] === 'waiting_for_question') {
		bot.sendMessage(chat.id, `Your question is: '${text}'`);
		chatState[chat.id] = 'stand_by';
		return;
	}

	if (text && chatState[chat.id] === 'waiting_for_interval') {
		bot.sendMessage(chat.id, `Your interval is: '${text}'`);
		chatState[chat.id] = 'stand_by';
		return;
	}

	if (text) {
		bot.sendMessage(chat.id, 'I don\'t understand');
	}
});
