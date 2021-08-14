Feature: Update Profile



  As a User
  I should be able to login and Update Profile



  Background: A User should be able Login
    Given User visit and Login to the alphaPay application


  Scenario: User must have logged in successfully
      Then Click Profile
      Then Enter new full name
      Then Enter new Username
      Then Click Update Details
      Then Click Overview

