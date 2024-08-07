import { Page } from '@playwright/test';

export class OurStoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/our-story');
  }

  async requestDemoButtonExists() {
    return this.page.locator('[class="button "]').isVisible();
  }
}
