import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'

test('Login Verification successful', async ({ page }) => {

  const Login= new LoginPage(page);

  await Login.gotoLoginpage()
  await Login.login('standard_user', 'secret_sauce')
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
 
  // await page.goto('https://www.saucedemo.com/');
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  // await page.getByRole('button', { name: 'Login' }).click();
});