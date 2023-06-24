import { Client, GatewayIntentBits } from 'discord.js';
import { getData, messageProcess } from './utils';
import { REST } from '@discordjs/rest';
import dotenv from 'dotenv';

import { OnePieceData } from '@types';

dotenv.config();
const TOKEN = process.env.DISCORD_BOT_TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

if (typeof TOKEN === 'string') {
  const rest = new REST({ version: '10' }).setToken(TOKEN);
}

client.login(TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', async(message) => {
  const data: OnePieceData = await getData();
  const chapterNumber = Math.floor(Math.random() * data.chapters.length);
  const latestChapter = data.chapters[0];

  if(messageProcess(message.content) === 'random') {
    message.reply(data.chapters[chapterNumber].title);
  } else if(messageProcess(message.content) === 'latest chapter') {
    message.reply(latestChapter.title);
  } else if(messageProcess(message.content) === 'notify') {
    message.reply(`The new chapter of One Piece is coming!\n${latestChapter.title}\nLink: https://ww5.mangakakalot.tv/chapter/${latestChapter.id.split('$$')[0]}`);
  }
});
