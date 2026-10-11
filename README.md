# Playwright POM Demo

## About the Project
This project demonstrates UI test automation using Playwright with JavaScript and the Page Object Model (POM) design pattern.

## Technologies Used
- JavaScript
- Node.js
- Playwright
- Page Object Model (POM)

## Test Scenarios
- Successful login using valid credentials
- Login validation using invalid credentials
- URL verification after successful login
- Error message visibility verification

## Application Under Test
https://www.saucedemo.com/

## How to Run
Install dependencies:

```bash
npm install
```

Run the login tests in Chromium:

```bash
npx playwright test tests/Demo/login.spec.js --project=chromium
```

Run the tests with the browser visible:

```bash
npx playwright test tests/Demo/login.spec.js --project=chromium --headed
```

## Project Structure

```text
pages/
  login.js
tests/
  Demo/
    login.spec.js
```

## Learning Goals
Practice reusable page objects, locators, user interactions, assertions, and positive and negative login testing.