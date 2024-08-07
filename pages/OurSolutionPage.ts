import { Page } from '@playwright/test';

export class OurSolutionPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/our-solution');
  }

  async requestDemoButtonExists() {
    return this.page.locator('[class="button "]').isVisible();
  }
}
