import express from 'express';
const healthRouter = express.Router();  
import {healthCheck} from '../controller/healthCheck.js';


healthRouter.get('/',healthCheck);

export {healthRouter}