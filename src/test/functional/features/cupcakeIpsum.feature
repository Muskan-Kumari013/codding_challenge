Feature: Cupcake Ipsum Generator

  Scenario: Generate Cupcake Ipsum with the given settings
    Given I visit the Cupcake website
    Then I should see the page title as the expected title
    When I configure the number of paragraphs
    And I select the appropriate option
    And I enable the checkbox to start with predefined text
    And I should not see the copy button
    When I trigger the generation action
    Then I should see more than one instance of the predefined text on the page
