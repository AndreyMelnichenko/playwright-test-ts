### How to run

1. `npm i`
1. Run test: `npm test`
1. See `.vscode/launch.json` for debug mode
1. Tu run custom scope use `TAG=@C1 CI=true ./node_modules/.bin/playwright test --config=playwright.config.ts --project='Desktop Chrome' --workers 4 --retries=0`