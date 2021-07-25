// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    retries: 2,
    workers: process.env.CI ? 4 : 2,
    timeout: 20000,
    use: {
        headless: true,
    },
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
            use: devices['Pixel 5'],
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
