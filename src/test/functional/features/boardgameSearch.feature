Feature: Board Game Search

  Scenario: Searching for Harry Potter and the Sorcerer's Stone Trivia Game
  Given I am on the boardgame search page
  When I fill in the search form with valid details
  And I submit the search
  Then I should see link on the result page