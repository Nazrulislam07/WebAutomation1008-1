@GoogleGmailSignin @regression @smoke
Feature: Gmail Account Sign in activity test
	As a Gmail user,
	I want to Sign in and manage Gmail Account.

Background: Launch the Google web application
    Given I launch the Google home page


Scenario: Checking Google's Gmail Sign In activities
    When  I clicked on the Sign in button on the upper-right corner
	And   I provided my Gmail username and password 
	And   I clicked on the Gmail link
    Then  I signed into my Gmail account successfully

