@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "SaksFirst" from footer section
When I click on this /SaksFirst footer link
Then I am redirected to the SaksFirst page




