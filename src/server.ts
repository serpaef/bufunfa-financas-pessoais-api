import 'reflect-metadata';
import './database';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { categories, types, accounts, goals, transactions } from './routes'

dotenv.config();

const { PORT } = process.env

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(categories);
app.use(types);
app.use(accounts);
app.use(goals);
app.use(transactions);

app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });
