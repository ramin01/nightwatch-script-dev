@o5a_regression
@o5a_topnavcategories_regression
Feature: 
As a user
I want to proceed to product array and select filter by

Scenario: Visit the site
Given I am on the website

Scenario: "Women's Apparel" from top nav
When I click on the top nav link for this 8 category
Then I should see page breadcrumbs

Scenario: I click on pagination right arrow
When I click pa_paginationRightArrow
Then I should see pa_paginationPageSelected

Scenario: I click on Color in Filter By 
When I click on filter color in Filter By
Then I should see pa_color_panel 

Scenario: I select first color 
When I click on first color
Then I should see apply button

Scenario: I click on apply button
When I click apply button
Then I should see pa_heading
 
Scenario: I click on Size in Filter By 
When I click on filter size in Filter By
Then I should see pa size panel 

Scenario: I select first size
When I click on first size
Then I should see apply button

@o5a_endSession
Scenario: I click on apply button
When I click apply button
Then I should see pa_heading
