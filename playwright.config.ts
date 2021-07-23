// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: 'Chrome Stable',
            use: {
                browserName: 'chromium',
                // Test against Chrome Stable channel.
                channel: 'chrome',
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1200, height: 750 },
            }
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
            }
        },
    ],
};
// eslint-disable-next-line import/no-default-export
export default config;