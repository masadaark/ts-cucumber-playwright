import { Browser, BrowserContext, chromium, LaunchOptions, Page } from "@playwright/test";

class BrowserClass {
    private static _page: Page | undefined;
    private static _browser: Browser | undefined;
    private static _context: BrowserContext | undefined;

    static async setUp(launchOptions: LaunchOptions = { headless: false }) {
        this._browser = await chromium.launch(launchOptions);
        this._context = await this._browser.newContext();
        this._page = await this._context.newPage();
    }

    static async down() {
        await this.closePage()
        await this.closeBrowser()
        await this.closeContext()
    }
    static async closeContext() {
        if (this._context) await this._context.close();
    }
    static async closePage() {
        if (this._page) await this._page.close();
    }
    static async closeBrowser() {
        if (this._browser) await this._browser.close();
    }
    static get page(): Page {
        if (!this._page) throw new Error("Page is not initialized.");
        return this._page;
    }
    static get browser(): Browser {
        if (!this._browser) throw new Error("Browser is not initialized.");
        return this._browser;
    }
    static get context(): BrowserContext {
        if (!this._context) throw new Error("BrowserContext is not initialized.");
        return this._context;
    }
}

export default BrowserClass