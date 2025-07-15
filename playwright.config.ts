import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',           // ✅ only run tests in /tests folder
  timeout: 30 * 1000,           // test timeout per test (30 seconds)
  expect: {
    timeout: 5000               // timeout for expect conditions
  },
  use: {
    baseURL: 'http://localhost:5173', // Vite dev server (adjust if needed)
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  webServer: {
    command: 'npm run dev',     // make sure your dev server is started
    port: 5173,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  }
})