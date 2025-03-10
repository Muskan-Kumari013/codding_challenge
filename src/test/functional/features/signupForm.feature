Feature: Signup Form on Marksheet.io

  Scenario: Filling out the signup form as a guest
    Given I am on the signup form page
    When I fill in the signup form with valid details
    And I submit the signup form
    Then I should be redirected to the signup confirmation page