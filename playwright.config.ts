import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  fullyParallel: false,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: 'https://shopee.vn', // <-- Bổ sung dòng này để sửa lỗi navigating to "/"
    channel: 'chrome',
    headless: false,
    launchOptions: {
      args: ['--disable-blink-features=AutomationControlled'],
    },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});