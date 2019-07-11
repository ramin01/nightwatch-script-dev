@o5a_regression
@o5a_topnavcategories_regression
Feature: 
As a user
I want to proceed to product array 

Scenario: Visit the site
Given I am on the website

Scenario: "Home" from top nav
When I click on the top nav link for this 20 category
Then I should see page breadcrumbs

Scenario: I click on pagination right arrow
When I click pa_paginationRightArrow
Then I should see pa_paginationPageSelected

Scenario: I click second time on pagination right arrow 
When I click pa_paginationRightArrow
Then I should see pa_paginationPageSelected

@o5a_endSession
Scenario: I click third time on pagination right arrow
When I click pa_paginationRightArrow
Then I should see page breadcrumbs

 