import fetch from 'node-fetch';

const API_URL = process.env.API_URL || 'http://localhost:3000';

describe('Health Check API', () => {
  it('should return healthy status', async () => {
    const response = await fetch(`${API_URL}/api/health`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveProperty('status', 'healthy');
    expect(data).toHaveProperty('timestamp');
    expect(data).toHaveProperty('version');
    expect(data).toHaveProperty('environment');
  });
});
