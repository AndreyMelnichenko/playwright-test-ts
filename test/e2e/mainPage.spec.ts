import { test } from "@playwright/test"

test.describe.parallel("Main Page", () => {
    test("test 1 @C222 @smoke", async () => {
        console.log("Test 1");
    })

    test("test 2 @C333 @smoke", async () => {
        console.log("Test 2");
    })
})
