import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    retries: 2,
    testDir: '.',
    reporter: [['junit', { outputFile: './test-results/results.xml' }], ['experimental-allure-playwright'], ['line']],
    use: {
        baseURL: 'https://www.poptop.uk.com',
        locale: 'en-US',
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
    },
    projects: [
        {
            name: 'Chrome',
            use: {
                browserName: 'chromium',
                channel: 'chrome',
                screenshot: 'only-on-failure',
                locale: 'en-US',
                launchOptions: {
                    headless: true,
                    slowMo: 50,
                    logger: {
                        isEnabled: (name, severity) => name === 'browser',
                        log: (name, severity, message, args) => console.log(`${name} ${message}`),
                    },
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
