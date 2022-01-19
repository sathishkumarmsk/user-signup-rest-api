// console.log("msk");
import express from 'express';
import http from 'http';
import cors from 'cors';
import signupRouter from './routes/signup';
import console from 'console';
import db from './models';


const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use('/signup', signupRouter)

app.use('/', (req, res) => res.send('msk'));

const server = http.createServer(app);
// server.listen(port, () => console.log(`Running on http://localhost:${port}`));

db.sequelize.sync().then(() => {
    server.listen(port, () => console.log(`Running on http://localhost:${port}`));
}); 
