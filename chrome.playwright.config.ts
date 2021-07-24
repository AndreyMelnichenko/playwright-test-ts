import { PlaywrightTestConfig } from '@playwright/test';

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
    ],
};
// eslint-disable-next-line import/no-default-export
export default config;
