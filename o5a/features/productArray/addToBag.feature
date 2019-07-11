@o5a_regression
@o5a_topnavcategories_regression
Feature: 
As a user
I want to proceed to PDP from the product array and add item to mini bag

Scenario: Visit the site
Given I am on the website

Scenario: "Women's Apparel" from top nav
When I click on the top nav link for this 8 category
Then I should see page breadcrumbs

Scenario: I click on category  
When I click on category in left nav 
Then I should see pa_heading 

Scenario: I click on sub_category  
When I click on sub_category in left nav 
Then I should see page breadcrumbs

Scenario: I click on first item in product array
When I click on item 2 
Then I should see add to bag button 

@o5a_endSession
Scenario: I click on Add to Bag 
When I click the ADD TO BAG button on PDP
Then I should see the item in the mini-bag
