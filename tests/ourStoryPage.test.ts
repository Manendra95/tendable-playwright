import { test, expect } from '@playwright/test';
import { OurStoryPage } from '../pages/OurStoryPage';

test('Our Story Page - Verify Request a Demo button', async ({ page }) => {
  const ourStoryPage = new OurStoryPage(page);
  await ourStoryPage.goto();
  expect(await ourStoryPage.requestDemoButtonExists()).toBe(true);
});
