import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { generateArt } from './ai_art_generator';

dotenv.config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageTyping] });
client.login(process.env.DISCORD_TOKEN);

const discordInit = async () => {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user?.tag}!`);
    });

    client.on('messageCreate', async (message) => {
        if (message.author.bot) return;

        if (message.content) {
            message.channel.sendTyping();
            const data = await generateArt(message.content);
            const imageURL = data.toString()

            if (data !== undefined && imageURL) {
                message.reply(imageURL);
            }

        }
    });
}

export { discordInit }


