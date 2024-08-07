import { Page } from '@playwright/test';

export class WhyTendablePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/why-tendable');
  }

  async requestDemoButtonExists() {
    return this.page.locator('[class="button "]').isVisible();
  }
}
