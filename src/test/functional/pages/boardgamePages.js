const locators = require('../locators/boardgameLocators');

class BoardGameSearchPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to the boardgame search page
  async goto() {
    await this.page.goto('https://www.boardgamegeek.com/advsearch/boardgame');
  }

  // Fill in the search form using the boardgameSearch data from data.json
  async fillSearchForm(data) {
    await this.page.fill(locators.searchForm.titleInput, data.title);
    await this.page.fill(locators.searchForm.yearMinInput, data.yearPublishedMin);
    await this.page.fill(locators.searchForm.yearMaxInput, data.yearPublishedMax);
    await this.page.selectOption(locators.searchForm.minPlayTimeDropdown, { value: data.minPlayingTime });
    await this.page.selectOption(locators.searchForm.maxPlayTimeDropdown, { value: data.maxPlayingTime });
  }

  // Submit the search form
  async submitSearch() {
    await this.page.click(locators.searchForm.submitButton);
  }


    async getSearchResultLink() {
        const gameLinkLocator = this.page.locator(locators.resultPage.gameLink); // Locator for the game link
        const yearLocator = this.page.locator(locators.resultPage.yearText); // Locator for the year
  
        // Wait for the game link to be visible
        await gameLinkLocator.waitFor({ state: 'visible', timeout: 10000 });
        await yearLocator.waitFor({ state: 'visible', timeout: 10000 });
        // Get the link's text content
        const linkText = await gameLinkLocator.textContent();
        const yearText = await yearLocator.textContent();

        return `${linkText.trim()}${yearText.trim()}`;
      }
}

module.exports = BoardGameSearchPage;
