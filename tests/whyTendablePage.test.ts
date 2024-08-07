import { test, expect } from '@playwright/test';
import { WhyTendablePage } from '../pages/WhyTendablePage';

test('Why Tendable Page - Verify Request a Demo button', async ({ page }) => {
  const whyTendablePage = new WhyTendablePage(page);
  await whyTendablePage.goto();
  expect(await whyTendablePage.requestDemoButtonExists()).toBe(true);
});
