Feature: Change Password



  As a User
  I should be able to login and Change Password



  Background: A User should be able Login
    Then User visit the alphaPay application
    Then User click sign in
    And Inputs Email as "ade@mailinator.com" and password as "M@thematics11"
    Then User clicks on login button
    And I wait for 5000 milliseconds
    Then User should be redirected to the dashboard
    And I wait for 5000 milliseconds

  Scenario: User must have logged in successfully
    Then Click Profile Icon
    And I wait for 5000 milliseconds
    Then Click Security
    And I wait for 5000 milliseconds
    Then Enter Old Password
    And I wait for 5000 milliseconds
    Then Enter New Password
    And I wait for 5000 milliseconds
    Then Click Change Password
    And I wait for 5000 milliseconds
    Then Click Overview to return to Homepage
