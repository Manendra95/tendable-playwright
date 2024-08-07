import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async requestDemoButtonExists() {
    return this.page.locator('[class="button "]').isVisible();
  }
}
