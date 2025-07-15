import { test, expect } from '@playwright/test'

test('loads homepage and displays header', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Vite + React')).toBeVisible()
})