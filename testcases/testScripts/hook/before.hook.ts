import { beforeAll, binding } from "cucumber-tsflow";
import BrowserClass from "../class/playwright_browser.class";


@binding()
export class BeforeHook {
    @beforeAll()
    public async beforeAllHook(): Promise<void> {
        await BrowserClass.setUp()
    }
}