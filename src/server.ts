import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const { PORT } = process.env

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });
