@o5a_regression
@o5a_topnavcategories_regression
Feature:
As a user
I want to click through the top nav categories

Scenario: Visit the site
Given I am on the website

@o5a_endSession
Scenario: "Beauty" from top nav
When I click on the top nav link for this 14 category
Then I should see page breadcrumbs