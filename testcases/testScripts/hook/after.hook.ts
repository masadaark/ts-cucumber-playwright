import { afterAll, binding } from "cucumber-tsflow";

@binding()
export class AfterHook {
    @afterAll()
    public async afterAllHook(): Promise<void> {

    }
}