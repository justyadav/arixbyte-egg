import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { registerRoutes } from './routes.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(morgan('combined'));
app.use(limiter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'arixbyte-api' });
});

registerRoutes(app);

app.listen(PORT, () => {
  console.log(`ArixByte API running on http://localhost:${PORT}`);
});
