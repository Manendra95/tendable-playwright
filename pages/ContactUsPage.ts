import { Page } from '@playwright/test';

export class ContactUsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/contact-us', { timeout: 60000 });
    }

    async selectMarketing() {
        await this.page.getByRole('button', { name: 'Contact' }).first().click();
    }

    async fillForm(fullName: string, organisationName: string, phone: any): Promise<void> {      
    await this.page.getByLabel('Full Name').fill(fullName);
    await this.page.getByPlaceholder('Organisation Name ', { exact: true }).fill(organisationName);
    await this.page.getByLabel('Cell Phone').fill(phone);
    }

    async submitForm() {
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }
    
    async errorMessageExists(): Promise<boolean> {
        try {
            await this.page.waitForSelector('text=Sorry, there was an error', { timeout: 5000 });
            return await this.page.isVisible('text=Sorry, there was an error');
        } catch (error) {
            console.error('Error message not found:', error);
            return false;
        }
    }
}