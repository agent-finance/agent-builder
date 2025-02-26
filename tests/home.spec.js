import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should render the home page', async ({ page }) => {
    await page.goto('/');
    
    // Check if the main heading exists
    const heading = page.getByRole('heading', { name: 'Agent Builder Platform' });
    await expect(heading).toBeVisible();
    
    // Check for welcome section
    const welcomeHeading = page.getByRole('heading', { name: 'Welcome to Agent Builder' });
    await expect(welcomeHeading).toBeVisible();
    
    // Check for feature sections
    const quickStartHeading = page.getByRole('heading', { name: 'Quick Start' });
    const featuresHeading = page.getByRole('heading', { name: 'Features' });
    await expect(quickStartHeading).toBeVisible();
    await expect(featuresHeading).toBeVisible();
  });

  test('should navigate to dashboard', async ({ page }) => {
    await page.goto('/');
    
    // Click the dashboard link
    const dashboardLink = page.getByRole('link', { name: 'Go to Dashboard' });
    await expect(dashboardLink).toBeVisible();
    
    await dashboardLink.click();
    
    // Check if we're on the dashboard page
    await expect(page).toHaveURL('/dashboard');
    const dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    await expect(dashboardHeading).toBeVisible();
  });
});
