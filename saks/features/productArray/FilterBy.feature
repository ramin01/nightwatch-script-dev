@saks_regression
@saks_productarray_regression
Feature:
As a user
I want to proceed to product array and select filter by

Scenario: Visit the site
Given I am on the website

Scenario: "Women's Apparel" from top nav
When I click on the top nav link for this 4 category
Then the left nav title should say WOMEN'S APPAREL

Scenario: I click on category Shop All in left nav
When I click on Shop All category in left nav
Then I should see pa_heading

Scenario: I click on Color in Filter By 
When I click on filter color in Filter By
Then I should see pa color panel 

Scenario: I select first color 
When I click on first color
Then I should see pa apply button

Scenario: I click on Color in Filter By 
When I click on filter color in Filter By
Then I should see pa color panel

Scenario: I click on apply button
When I click pa apply button
Then I should see pa_heading

Scenario: I click on Size in Filter By 
When I click on filter size in Filter By
Then I should see pa size panel 

Scenario: I select first size
When I click on first size
Then I should see pa apply button

@saks_endSession
Scenario: I click on apply button
When I click pa apply button
Then I should see pa_heading


