import express from 'express';
import dotenv from 'dotenv';
import { healthRouter } from './routes/healthCheckRoute';
import { discordInit } from './core/services/DiscordChat';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/',healthRouter)

discordInit();

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})