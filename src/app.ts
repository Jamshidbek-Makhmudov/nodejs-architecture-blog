import express from 'express';
import cors from 'cors';
import { corsUrl } from './config';
import './database'; // initialize database


const app = express();


app.use(express.json({ limit: '10mb' }));
app.use(
  express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }),
);
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

// Routes
app.get("/health-check", (req, res) => {
  res.sendStatus(200);
 })


export default app;
