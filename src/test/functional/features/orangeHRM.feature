Feature: OrangeHRM Login and Navigation

  Scenario: Login, Navigate and Logout in OrangeHRM
    Given I navigate to the OrangeHRM login page
    When I login with valid credentials
    Then I should be directed to the Dashboard
    When I click on the Admin button on the left
    Then I should see Records Found on the page
    And I print the result displayed for Records Found
    When I click on the profile on the top-right corner
    Then I should see About, Support, Change Password, and Logout options
    When I click on Logout
    Then I should be logged out and directed to the login page
