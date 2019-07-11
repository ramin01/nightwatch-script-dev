@saks_checkout_regression
Feature:
As a guest user
I want to place an order

Scenario: I visit the site and go to PDP
Given I am on the website
When I enter this product id 0400086899113
Then I should be taken to a PDP of this product

Scenario: I select a specific color and size 
When I click on this #000000 product color
And I click on this 10.5 product size
Then I click on the BOPIS radio button
And I enter this zip code 10001 and select the closest store

Scenario: Add BOPIS item to bag from PDP
When I click the BUY ONLINE AND PICK UP button on PDP
Then I should see the item in the mini-bag

Scenario: I go to the bag page
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: I proceed to checkout
When I proceed to checkout as an unregistered user
Then I should be placed taken to checkout as an unregistered BOPIS user

Scenario: I enter my BOPIS information
When I submit my BOPIS information in checkout
Then My BOPIS information is accepted

Scenario: I enter my payment information
When I submit my BOPIS payment information
Then My BOPIS payment information is accepted

@saks_endSession
Scenario: I place my order
When I place my order
Then I should be redirected to the thank you page
And I end my session

