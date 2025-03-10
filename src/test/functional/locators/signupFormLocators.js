module.exports = {
    // Title radio buttons
    titleRadio: {
        miss: 'input[name="title"][value="miss"]',
        mr: 'input[name="title"][value="mr"]',
        mrs: 'input[name="title"][value="mrs"]',
    },
    // Input fields
    firstNameInput: '//p/label[text()="First name"]/following-sibling::input',
    lastNameInput: '//label[text()="Last name"]/following-sibling::input',
    emailInput: '//p/label[text()="Email"]/following-sibling::input',
    phoneInput: '//label[text()="Phone number"]/following-sibling::input',
    passwordInput: '//label[text()="Password"]/following-sibling::input',
    confirmPasswordInput: '//label[text()="Confirm your password"]/following-sibling::input',
    countryDropdown: '//label[text()="Country"]/following-sibling::select',
    termsCheckbox: '//p/label/input[@type="checkbox"]',
    submitButton: '//p/button',
};
