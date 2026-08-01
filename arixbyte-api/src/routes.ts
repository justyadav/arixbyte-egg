import { Router, type Express } from 'express';

const api = Router();

/**
 * @openapi
 * /api/auth/health:
 *   get:
 *     summary: Health check for auth service
 *     responses:
 *       200:
 *         description: OK
 */

api.get('/auth/health', (_req, res) => {
  res.json({ message: 'auth service ready' });
});

api.post('/auth/register', (_req, res) => {
  res.status(201).json({ message: 'registration endpoint ready' });
});

api.post('/auth/login', (_req, res) => {
  res.json({ message: 'login endpoint ready' });
});

api.post('/auth/logout', (_req, res) => {
  res.json({ message: 'logout endpoint ready' });
});

api.post('/auth/verify-email', (_req, res) => {
  res.json({ message: 'email verification endpoint ready' });
});

api.post('/auth/forgot-password', (_req, res) => {
  res.json({ message: 'forgot password endpoint ready' });
});

api.post('/auth/reset-password', (_req, res) => {
  res.json({ message: 'password reset endpoint ready' });
});

api.post('/auth/2fa/enable', (_req, res) => {
  res.json({ message: '2fa endpoint ready' });
});

api.get('/servers', (_req, res) => {
  res.json({ servers: [] });
});

api.post('/servers', (_req, res) => {
  res.status(201).json({ message: 'server creation endpoint ready' });
});

api.post('/servers/:id/power', (_req, res) => {
  res.json({ message: 'power control endpoint ready' });
});

api.get('/billing/invoices', (_req, res) => {
  res.json({ invoices: [] });
});

api.post('/billing/checkout', (_req, res) => {
  res.status(201).json({ message: 'checkout endpoint ready' });
});

api.get('/support/tickets', (_req, res) => {
  res.json({ tickets: [] });
});

api.post('/support/tickets', (_req, res) => {
  res.status(201).json({ message: 'ticket creation endpoint ready' });
});

api.get('/monitoring/overview', (_req, res) => {
  res.json({ overview: { cpu: 24, ram: 48, disk: 65 } });
});

export function registerRoutes(app: Express) {
  app.use('/api', api);
}
