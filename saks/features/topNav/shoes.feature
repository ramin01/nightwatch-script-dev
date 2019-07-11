@saks_regression
@saks_topnavcategories_regression
Feature:
As a user
I want to click through the top nav categories

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Shoes" from top nav
When I click on the top nav link for this 6 category
Then the left nav title should say SHOES