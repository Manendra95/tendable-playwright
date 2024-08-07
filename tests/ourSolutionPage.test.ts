import { test, expect } from '@playwright/test';
import { OurSolutionPage } from '../pages/OurSolutionPage';

test('Our Solution Page - Verify Request a Demo button', async ({ page }) => {
  const ourSolutionPage = new OurSolutionPage(page);
  await ourSolutionPage.goto();
  expect(await ourSolutionPage.requestDemoButtonExists()).toBe(true);
});
