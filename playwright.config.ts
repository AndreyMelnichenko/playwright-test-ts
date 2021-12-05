import { devices, PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
    grep: new RegExp(`.*(${process.env.TAG})`, "gm"),
    reporter: [
        ["list"],
        ["./CustomReporter.ts"],
        [
            "html",
            { outputFolder: "html-report" },
        ],
    ],
    retries: 2,
    testDir: ".",
    timeout: process.env.CI === "true" ? 120000 : 30000,
    use: {
        baseURL: process.env.BASE_URL,
        headless: process.env.CI === "true" ? true : false,
        locale: "en-US",
        screenshot: "only-on-failure",
        trace: "retain-on-failure",
        viewport: {
            height: 900,
            width: 1900,
        },
    },
    // tslint:disable-next-line: object-literal-sort-keys
    projects: [
        {
            name: "Desktop Chrome",
            use: {
                browserName: "chromium",
                channel: "chrome",
                launchOptions: {
                    args: [
                        "--disable-dev-shm-usage",
                        "--disable-extensions",
                        "--disable-features=TranslateUI",
                        "--disable-gl-extensions",
                        "--disable-glsl-translator",
                    ],
                    headless: true,
                },
            },
        },
        {
            name: "Desktop Safari",
            use: {
                browserName: "webkit",
            },
        },
        {
            name: "Desktop Firefox",
            use: {
                browserName: "firefox",
            },
        },
        {
            name: "Mobile Chrome",
            use: {
                ...devices["iPhone 12"],
                browserName: "chromium",
                viewport: { width: 390, height: 844 },
            },
        },
        {
            name: "Mobile Safari",
            use: {
                ...devices["iPhone 12"],
            },
        },
    ],
}

export default config
