const locators = require('../locators/signupFormLocators');

class SignupFormPage {
    constructor(page) {
        this.page = page;
    }

    // Navigate to the signup form page
    async goto() {
        await this.page.goto('https://marksheet.io/html-forms.html', { timeout: 20000 });
    }

    // Select the "Miss" title radio button
    async selectTitleMiss() {
        await this.page.waitForSelector(locators.titleRadio.miss, { state: 'visible', timeout: 15000 });
        await this.page.click(locators.titleRadio.miss, { timeout: 15000 });
    }

    // Fill in the "First name" field
    async fillFirstName(firstName) {
        await this.page.waitForSelector(locators.firstNameInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(locators.firstNameInput, firstName, { timeout: 15000 });
    }

    // Fill in the "Last name" field
    async fillLastName(lastName) {
        await this.page.waitForSelector(locators.lastNameInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(locators.lastNameInput, lastName, { timeout: 15000 });
    }

    // Fill in the "Email" field
    async fillEmail(email) {
        await this.page.waitForSelector(locators.emailInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(locators.emailInput, email, { timeout: 15000 });
    }

    // Fill in the "Phone number" field
    async fillPhone(phone) {
        await this.page.waitForSelector(locators.phoneInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(locators.phoneInput, phone, { timeout: 15000 });
    }

    // Fill in the "Password" field
    async fillPassword(password) {
        await this.page.waitForSelector(locators.passwordInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(locators.passwordInput, password, { timeout: 15000 });
    }

    // Fill in the "Confirm your password" field
    async fillConfirmPassword(confirmPassword) {
        await this.page.waitForSelector(locators.confirmPasswordInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(locators.confirmPasswordInput, confirmPassword, { timeout: 15000 });
    }

    // Select "United States" from the "Country" dropdown
    async selectCountry(country) {
        await this.page.waitForSelector(locators.countryDropdown, { state: 'visible', timeout: 15000 });
        await this.page.selectOption(locators.countryDropdown, { label: country });
    }

    // Check the "I agree to the terms" checkbox
    async checkTerms() {
        await this.page.waitForSelector(locators.termsCheckbox, { state: 'visible', timeout: 15000 });
        await this.page.check(locators.termsCheckbox, { timeout: 15000 });
    }

    // Submit the signup form
    async submitForm() {
        await this.page.waitForSelector(locators.submitButton, { state: 'visible', timeout: 15000 });
        await this.page.click(locators.submitButton, { timeout: 30000 });
        
    }

    // Check if we have been redirected to the confirmation page
    async isOnConfirmationPage() {
    await this.page.waitForURL('https://marksheet.io/signup', { timeout: 30000 });
    const currentURL = await this.page.url();
    console.log("Current URL after form submission: ", currentURL); 
    return currentURL === 'https://marksheet.io/signup'; // Verify the expected URL
    
    }
}

module.exports = SignupFormPage;
