@o5a_regression
@o5a_topnavcategories_regression
Feature: 
As a user
I want to proceed to different levels of the product array

Scenario: Visit the site
Given I am on the website

Scenario: "Women's Apparel" from top nav
When I click on the top nav link for this 8 category
Then I should see page breadcrumbs

Scenario: I click on category "Apparel"  
When I click on category in left nav
Then I should see pa_heading

Scenario: I click on sub_category "Dresses"   
When I click on sub_category in left nav
Then I should see pa_heading

@o5a_endSession
Scenario: I click on sub_category "Cocktail"  
When I click on sub_categoryCocktail in left nav
Then I should see pa_heading

