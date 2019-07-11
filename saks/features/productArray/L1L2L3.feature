@saks_regression
@saks_productarray_regression
Feature:
As a user
I want to proceed to product array L1, L2 and L3

Scenario: Visit the site
Given I am on the website

Scenario: "Kids" from top nav
When I click on the top nav link for this 16 category
Then the left nav title should say BABY

Scenario: I click on category Shop All in left nav
When I click on Shop All category in left nav
Then I should see pa_heading

@saks_endSession
Scenario: I click on Nursery & Kids Room category
When I click on NurseryKidsRoom category in left nav
Then I should see pa_heading




