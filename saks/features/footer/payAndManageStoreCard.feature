@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Pay and Manage Store Card" from footer section
When I click on the Pay and Manage Store Card link from the footer
Then I am redirected to the SaksFirst Store Card sign in page



