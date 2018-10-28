@GitHubRepoTest
Feature: GitHub Repo Test
As a GitHub Lover,
I want to check my friends' GitHub repositories.

Background:
    Given I launch the GitHub home page url

Scenario Outline: Selecting different github_usernames and checking a specific repository there
    When I login to my github account with "ictergurutest" and "Dh@k@1000" as my username and password
    When I goto my friends' github accounts using their "<github_usernames>"
	Then I select the available repositories
    Then I verify the existance of the "<expected_repository>" in the github account 

    Examples:
      	|github_usernames|expected_repository|
		|icterguru|WebAutomation1001|
		|icterguru|WebAutomation1004|
		|icterguru|WebAutomation1005|
		

		
#Feature: Google Footer Link Test
#As a Google tester I want to test Google Footer Links
#Given I go to Google Home page
#
#Scenario: Privacy Link test
#When I click on the Privacy link
#Then I see the Privacy page
# 
#Scenario: Terms Link test
#When I click on the Terms link
#Then I see the Terms page
# 
#Scenario: Settings Link test
#When I click on the Settings link
#Then I see the Settings page
#


#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

 
 #
  #
#
#@tag
#Feature: Title of your feature
  #I want to use this template for my feature file
#
  #@tag1
  #Scenario: Title of your scenario
    #Given I want to write a step with precondition
    #And some other precondition
    #When I complete action
    #And some other action
    #And yet another action
    #Then I validate the outcomes
    #And check more outcomes
#
  #@tag2
  #Scenario Outline: Title of your scenario outline
    #Given I want to write a step with <name>
    #When I check for the <value> in step
    #Then I verify the <status> in step
#
    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
      