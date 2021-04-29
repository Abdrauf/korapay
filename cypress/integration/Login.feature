Feature: Authentication



  As a User
  I should be able to login

  Scenario: A User should be able Login
    Then User visit the alphaPay application
    Then User click sign in
    And Inputs Email as "ade@mailinator.com" and password as "M@thematics11"
    Then User clicks on login button
    And I wait for 7000 milliseconds
    Then User should be redirected to the dashboard
    And I wait for 7000 milliseconds
