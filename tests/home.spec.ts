import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should render the home page', async ({ page }) => {
    await page.goto('/');
    
    // Check if the main heading exists
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    
    // Add more specific tests based on your home page content
  });

  test('should navigate to dashboard', async ({ page }) => {
    await page.goto('/');
    
    // Assuming you have a dashboard link or button
    const dashboardLink = page.getByRole('link', { name: /dashboard/i });
    await expect(dashboardLink).toBeVisible();
    
    await dashboardLink.click();
    await expect(page).toHaveURL(/.*dashboard/);
  });
});
