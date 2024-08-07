# Playwright Test Project

## How to Run the Tests
1. Set Up Playwright with TypeScript
npm init -y
npm install playwright typescript ts-node @types/node
npx playwright install

2. Run the tests:
    npx playwright test

## Test Scanerio
1.Why Tendable Page - Verify Request a Demo button
2.Our Story Page - Verify Request a Demo button
3.Our Solution Page - Verify Request a Demo button
4.Home Page - Verify Request a Demo button
5.Contact Us Page - Verify error message on incomplete form submission

### Steps:
1.Navigate to the Tendable website Why Tendable Page 
2.Navigate to the Tendable website Our Story Page 
3.Navigate to the Tendable website Our Solution Page 
4.Navigate to the Tendable website Home Page 
5.Navigate to the Tendable website Contact Us Page 

### Error Handling:
- The test waits for up to 5, 10 seconds for the error message to appear.
- If the error message does not showing then report the bug.

### Bug Report:
Steps:
1. Bug Title
2. Bug Description
3. Bug steps
4. Actual output
5. Expected output
6. Attchment image and video