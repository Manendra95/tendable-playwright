import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/ContactUsPage';

test('Contact Us Page - Verify error message on incomplete form submission', async ({ page }) => {
  const contactUsPage = new ContactUsPage(page);
  await contactUsPage.goto();
  await contactUsPage.selectMarketing();
  await contactUsPage.fillForm('Manendra', 'Tendable_QA_Tech_Challenge', '1234567890');
  await contactUsPage.submitForm();
  const errorMessageExists = await contactUsPage.errorMessageExists();
  console.log('Error message visible:', errorMessageExists);
  expect(errorMessageExists).toBeTruthy();
});