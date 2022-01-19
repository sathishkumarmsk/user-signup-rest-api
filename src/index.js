// console.log("msk");
import express from 'express';

const app = express();
const port = 8000;

app.use('/', (req, res) => res.send('msk'));

app.listen(port, () => console.log(`Running on http://localhost:${port}`)); 
/*
import express from 'express';
import http from 'http';
import cors from 'cors';

import db from './models';

import moviesRouter from './routes/movies';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/movies', moviesRouter);

app.use('/', (req, res) => res.send('Hello Chaal'));

const server = http.createServer(app);

db.sequelize.sync().then(() => {
    server.listen(port, () => console.log(`Running on http://localhost:${port}`));
});
*/