import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 90000, // Global timeout for all tests
    use: {
    baseURL: 'https://www.tendable.com',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  ],
//   reporter: [['list'], ['json', { outputFile: 'results.json' }]],
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
