import 'reflect-metadata';
import './database';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { routes } from './routes'

dotenv.config();

const { PORT } = process.env

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });
