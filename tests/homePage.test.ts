import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Home Page - Verify Request a Demo button', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  expect(await homePage.requestDemoButtonExists()).toBe(true);
});
