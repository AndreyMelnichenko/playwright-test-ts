// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    retries: 2,
    workers: process.env.CI ? 4 : 2,
    timeout: 20000,
    use: {
        headless: true,
        baseURL: 'https://www.poptop.uk.com',
        locale: 'en-US',
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
    },
    testDir: '.',
    reporter: [['junit', { outputFile: './test-results/results.xml' }], ['experimental-allure-playwright'], ['line']],
    projects: [
        {
            name: 'Chrome',
            use: {
                browserName: 'chromium',
                // Test against Chrome Stable channel.
                channel: 'chrome',
                screenshot: 'only-on-failure',
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1200, height: 750 },
            },
        },
        // Test against mobile viewports.
        {
            name: 'Mobile Chrome',
            use: {
                ...devices['iPhone 12'],
                browserName: 'chromium',
                viewport: { width: 390, height: 669 },
            },
        },
        {
            name: 'Mobile Safari',
            use: devices['iPhone 12'],
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 800, height: 600 },
            },
        },
    ],
};
// eslint-disable-next-line import/no-default-export
export default config;
