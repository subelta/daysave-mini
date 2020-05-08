import TelegramBot from 'node-telegram-bot-api';
import Agent from 'socks5-https-client/lib/Agent.js';
import { TOKEN } from './config.js';

const bot = new TelegramBot(TOKEN, { polling: true,
        request: {
            agentClass: Agent,
            agentOptions: {
                socksHost: '78.46.200.216',
                socksPort: '12171'
            }
        }
    });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});
