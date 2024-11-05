import { binding, given } from 'cucumber-tsflow';
import { chromium } from '@playwright/test';

@binding()
export class LoginFlow {
  private page!: import('@playwright/test').Page;

  @given(`Build Browser`, { timeout: 3000 })
  async StepDedGraphqlRequest(): Promise<void> {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
  }

  @given(`Go to Google`, { timeout: 3000 })
  async GotoJenkins(): Promise<void> {
    await this.page.goto('www.google.com');
  }
}
