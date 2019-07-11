@saks_regression
@saks_productarray_regression
Feature:
As a user
I want to proceed to product array 

Scenario: Visit the site
Given I am on the website

Scenario: "Designers" from top nav
When I click on the top nav link for this 2 category
Then I should be redirected to the Designers list page

@saks_endSession
Scenario: I click on designer name I will be redirected to PA
When I click on designer name
Then I should be redirected to Designer PA
