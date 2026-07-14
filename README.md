# Beeceptor HTTP Callout Automation

## Overview
This project automates Beeceptor's HTTP Callout feature using Playwright.

## Features
- Login using OTP
- Reuse Beeceptor endpoint
- Create HTTP Callout Rule
- Trigger API request
- Verify response
- Automatically clean up test data by deleting the created rule

## Tech Stack
- Playwright
- JavaScript
- Node.js

## Run

- npm install
- npx playwright test tests/beeceptor.spec.js --headed --project=chromium