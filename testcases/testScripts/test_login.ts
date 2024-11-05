import { binding, given, then } from 'cucumber-tsflow';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';
import BrowserClass from './class/playwright_browser.class';

@binding()
export class LoginFlow {

  @given(`Go to Google`, { timeout: 3000 })
  async GotoJenkins(): Promise<void> {
    await BrowserClass.page.goto('http://www.google.com');
  }

  @given(`Wait for {int} seconds`, { timeout: 30000 })
  async waitFor(delay: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, delay*1000));
  }

  @then(`Close Browser`)
  async closeBrowser(): Promise<void> {
    await BrowserClass.down()
  }
}
