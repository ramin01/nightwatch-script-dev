@saks_regression
@saks_productarray_regression
Feature:
As a user
I want to proceed to PDP from the product array and add item to mini bag

Scenario: Visit the site
Given I am on the website

Scenario: "Sale" from top nav
When I click on the top nav link for this 22 category
Then the left nav title should say SHOP BY SALE

Scenario: I click on category in left nav 
When I click on sale category Home in left nav
Then I should see pa_heading

Scenario: I click on pagination right arrow
When I click pagination Right Arrow
Then I should see pagination Page Selected

Scenario: I click on item
When I click on item 1
Then I should see add to bag button

@saks_endSession
Scenario: I click on Add to Bag 
When I click the ADD TO BAG button on PDP
Then I should see the item in the mini-bag
