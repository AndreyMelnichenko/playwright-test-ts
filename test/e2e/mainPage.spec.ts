import { test } from "@playwright/test"

test.describe.parallel("Main Page", () => {
    test("test 1 @C1 @smoke", async ({ page }) => {
        console.log("Test 1");
        await page.goto('https://www.google.com.ua/')
        await page.waitForTimeout(1000)
    })

    test("test 11 @C11 @smoke", async ({ page }) => {
        console.log("Test 11");
        await page.goto('https://www.google.com.ua/')
        await page.waitForTimeout(1000)
    })

    test("test 3 @C3 @smoke", async ({ page }) => {
        console.log("Test 3");
        await page.goto('https://www.google.com.ua/')
        await page.waitForTimeout(1000)
    })

    test("test 333 @C333 @smoke", async ({ page }) => {
        console.log("Test 333");
        await page.goto('https://www.google.com.ua/')
        await page.waitForTimeout(1000)
    })
})
