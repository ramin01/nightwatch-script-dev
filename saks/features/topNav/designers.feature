@saks_regression
@saks_topnavcategories_regression
Feature:
As a user
I want to click through the top nav categories

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Designers" from top nav
When I click on the top nav link for this 2 category
Then I should be redirected to the Designers list page