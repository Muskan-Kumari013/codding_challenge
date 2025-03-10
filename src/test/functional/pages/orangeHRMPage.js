const { Console } = require('console');
const locators = require('../locators/orangeHRMLocators');

class OrangeHRMPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to the login page
  async goToLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com', { timeout: 20000 });
  }

  // Login with valid credentials
  async login(username, password) {
    await this.page.fill(locators.loginPage.usernameInput, username);
    await this.page.fill(locators.loginPage.passwordInput, password);
    await this.page.click(locators.loginPage.loginButton);
  }

  // Verify Dashboard is loaded
  async isDashboardLoaded() {
    await this.page.waitForSelector(locators.dashboard.dashboardHeader, { state: 'visible' });
    const headerText = await this.page.innerText(locators.dashboard.dashboardHeader);
    return headerText.includes('Dashboard');
  }

  // Click the Admin button on the left nav
  async clickAdminButton() {
    await this.page.click(locators.leftNav.adminButton);
  }

  // Verify "Records Found" is visible on the page
  async isRecordsFoundVisible() {
    await this.page.waitForSelector(locators.recordsFound, { state: 'visible' });
    const recordsFound = await this.page.$(locators.recordsFound);
    return recordsFound !== null;
  }

  // Print result for Records Found
  async printRecordsFound() {
    /*const records = await this.page.locator(`${locators.recordsFound} tr`).allTextContents();
    console.log('Records Found:');
    records.forEach((record, index) => {
      if (index > 0) { // Skip the header row
        const [username, userRole, employeeName] = record.split('\n');
        console.log(`Username: ${username}, User Role: ${userRole}, Employee Name: ${employeeName}`);
      }
    });*/
// Wait for the table rows to be present and visible
 // Wait for the table rows to be present and visible
 const rows = await this.page.locator(`${locators.recordsFound} .oxd-table-body .oxd-table-row`);

 const rowCount = await rows.count();
 console.log(`Total rows found: ${rowCount}`);

 // Iterate over each row and extract the required details
 for (let i = 0; i < rowCount; i++) {
   const row = rows.nth(i); // Get the i-th row
   const cells = await row.locator('.oxd-table-cell').allTextContents(); // Get all cells' text content

   // Assuming the order of cells is: Username, User Role, Employee Name, Status
   const [username, userRole, employeeName, status] = cells.map(cell => cell.trim());

   // Print the details of the current row
   console.log(`Username: ${username}, User Role: ${userRole}, Employee Name: ${employeeName}, Status: ${status}`);
 }

  }

  // Click the Profile menu on the top right
  async clickProfileMenu() {
    await this.page.click(locators.profileMenu);
  }

  // Verify the options in the Profile menu
  async verifyProfileMenuOptions() {
// Get the text contents of all the options in the profile menu
const options = await this.page.locator(locators.profileMenuOptions).allTextContents();
    
// Log all options for debugging purposes
console.log("All options: ", options);

// Check if the options contain the expected text
const areOptionsPresent = options.includes('About') && options.includes('Support') && options.includes('Change Password') && options.includes('Logout');

// Log the result
if (areOptionsPresent) {
    console.log("All options are present");
} else {
    console.log("Some options are missing");
}

// Return the result
return areOptionsPresent;
  }

  // Click the Logout button
  async clickLogoutButton() {
    await this.page.click(locators.logoutButton);
  }

  // Verify that the login page is displayed
  async isLoginPageVisible() {
    await this.page.waitForSelector(locators.loginPage.loginButton, { state: 'visible' });
    return await this.page.isVisible(locators.loginPage.loginButton);
    
  }
}

module.exports = OrangeHRMPage;
