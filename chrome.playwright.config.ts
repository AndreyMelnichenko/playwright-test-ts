import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: 'Chrome',
            use: {
                browserName: 'chromium',
                channel: 'chrome',
                screenshot: 'only-on-failure',
                locale: 'en-US',
                launchOptions: {
                    headless: false,
                    slowMo: 150,
                    args: [
                        '--disable-glsl-translator',
                        '--disable-gl-extensions',
                        '--disable-features=TranslateUI',
                        '--disable-extensions',
                    ],
                },
            },
        },
    ],
};
// eslint-disable-next-line import/no-default-export
export default config;
