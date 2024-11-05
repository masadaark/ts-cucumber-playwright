import { binding, given, then } from 'cucumber-tsflow';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';

@binding()
export class LoginFlow {
  private page!: Page;
  private browser!: Browser;
  private context!: BrowserContext;
  @given(`Build Browser`, { timeout: 3000 })
  async StepDedGraphqlRequest(): Promise<void> {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  @given(`Go to Google`, { timeout: 3000 })
  async GotoJenkins(): Promise<void> {
    await this.page.goto('http://www.google.com');
  }

  @given(`Wait for {int} seconds`, { timeout: 30000 })
  async waitFor(delay: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, delay*1000));
  }

  @then(`Close Browser`)
  async closeBrowser(): Promise<void> {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}
