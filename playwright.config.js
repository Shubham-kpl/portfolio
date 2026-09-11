// @ts-check
import { defineConfig, devices } from "@playwright/test";

// port and base url
const PORT = 4173;
const BASE_URL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "./tests",
  // this will run all tests inside a spec file in serial
  fullyParallel: false,
  // this will run all the tests in serial
  workers: 1,
  // .only on a test: fails in CI, passes on local
  forbidOnly: !!process.env.CI,
  // flaky test are retried twice in CI, but never in local
  retries: process.env.CI ? 2 : 0,
  // console output locally, plus an HTML report so CI has something to upload
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    // page.goto("/") goes to baseURL
    baseURL: BASE_URL,
    // testIdAttribute: "data-testid",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    // Commented other browsers for now
    // { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    // { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  webServer: {
    command: `node scripts/serve.js ${PORT}`,
    url: BASE_URL,
    // locally use the exising server
    // but fresh server in CI
    reuseExistingServer: !process.env.CI,
  },
});
