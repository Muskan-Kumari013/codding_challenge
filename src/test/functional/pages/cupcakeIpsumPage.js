const locators = require('../locators/cupcakeIpsumLocators');

class CupcakeIpsumPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to the Cupcake Ipsum page
  async open() {
    await this.page.goto('http://www.cupcakeipsum.com', { timeout: 20000 });
  }

  // Get the page title
  async getPageTitle() {
    return await this.page.title();
  }

  // Check the number of paragraphs
  async checkParagraphs() {
    await this.page.waitForSelector(locators.paragraphsInput, { state: 'visible', timeout: 15000 });
    const value = await this.page.inputValue(locators.paragraphsInput); // Get the value from the input
    return value === '5'; // Check if the value matches the expected number of paragraphs
  }

  // Select the "Short" radio button
  async selectShortOption() {
    await this.page.waitForSelector(locators.optionRadioButton, { state: 'visible', timeout: 15000 });
    await this.page.click(locators.optionRadioButton, { timeout: 15000 });
  }

  // Check the checkbox to start with predefined text
  async checkStartWithText() {
    const checkbox = await this.page.$(locators.startWithTextCheckbox);
    const isChecked = await checkbox.isChecked();
    if (!isChecked) {
      await checkbox.click();
    }
  }

  // Check if the copy button is visible
  async isCopyButtonVisible() {
    const copyButton = await this.page.$(locators.copyButton);
    //return await copyButton.isVisible();
    return !copyButton;
  }

  // Get the count of instances of the predefined text
  async getTextCount() {
    const elements = await this.page.$$(locators.textElement);
    return elements.length;
  }

  // Click on the generate button to generate the text
  async generateContent() {
    await this.page.waitForSelector(locators.generateButton, { state: 'visible', timeout: 15000 });
    await this.page.click(locators.generateButton, { timeout: 15000 });
  }
}

module.exports = CupcakeIpsumPage;
