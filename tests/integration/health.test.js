import { test, expect } from '@playwright/test';

const API_URL = process.env.API_URL || 'http://localhost:3000';

test('health check endpoint returns healthy status', async ({ request }) => {
  const response = await request.get(`${API_URL}/api/health`);
  const data = await response.json();

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(data).toHaveProperty('status', 'healthy');
  expect(data).toHaveProperty('timestamp');
  expect(data).toHaveProperty('version');
  expect(data).toHaveProperty('environment');
});
