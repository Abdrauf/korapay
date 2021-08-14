Feature: Log Out



  As a User
  I should be able to login and Log Out



  Background: A User should be able Login
    Given User visit and Login to the alphaPay application




  Scenario: User must have logged in successfully
    Then Click Profile Page
    Then User click logOut
    Then Return to sign in Page