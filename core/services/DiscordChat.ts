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
            
            if(!data){
                message.reply("Some error occurred while generating art");
                return;
            }
            
            if (Array.isArray(data) && data.length) {
                /* ------------------------------
                If want to send 4 images at a time

                const concatenatedString = data.join(' ');
                message.reply(concatenatedString);
                ------------------------------ */
                message.reply(data[0]);
            }
        }
    });
}

export { discordInit }


