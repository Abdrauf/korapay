Feature: Sign Up



  As User


  Scenario: I want to be able to sign Up
    Then User visit the alphaPay application
    And I wait for 5000 milliseconds
    Then Click Sign Up
    And I wait for 3000 milliseconds
    And Fill the sign Up form
    And I wait for 5000 milliseconds
    Then User click create account
    And I wait for 5000 milliseconds
    Then User should be redirect to the Dashboard
