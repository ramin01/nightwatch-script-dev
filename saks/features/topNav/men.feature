@saks_regression
@saks_topnavcategories_regression
Feature:
As a user
I want to click through the top nav categories

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Men" from top nav
When I click on the top nav link for this 14 category
Then the left nav title should say APPAREL