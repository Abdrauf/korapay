Feature: Sign Out



  As a User
  I should be able to login and Sign Out



  Background: A User should be able Login
    Then User visit the alphaPay application
    Then User click sign in
    And Inputs Email as "ade@mailinator.com" and password as "M@thematics11"
    Then User clicks on login button
    And I wait for 5000 milliseconds
    Then User should be redirected to the dashboard
    And I wait for 5000 milliseconds

  Scenario: User must have logged in successfully
    Then Click Profile Page
    And I wait for 5000 milliseconds
    Then User click logOut
    And I wait for 3000 milliseconds
    Then Return to sign in Page