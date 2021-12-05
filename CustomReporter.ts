import { Reporter } from '@playwright/test/reporter';
import { GotRequestClient } from "./src/gotClient"



class CustomReporter implements Reporter {
    private reportStatusList: Promise<any>[] = []

    onBegin(): void {
    }

    onStepEnd(test, result, step): void {
    }

    onTestEnd(test, result): void {
        const apiClient = new GotRequestClient()
        this.reportStatusList.push(
            apiClient.url("https://reqres.in/api/users")
            .method("POST")
            .headers({"Content-Type": "application/json"})
            .body(JSON.stringify(
                {
                    "name": "morpheus",
                    "job": "leader"
                }))
            .send()
            )
        console.log(`${test.title} => ${result.status}`)

    }

    async onEnd(result): Promise<void> {
        await Promise.all(this.reportStatusList).then(function(values) {
                console.log("LOG RESULT: " + values);
            });
    }

    onStdErr(chunk, test, result): void {
    }
}
export default CustomReporter;
