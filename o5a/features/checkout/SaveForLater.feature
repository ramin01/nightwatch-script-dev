@o5a_regression
@o5a_regression_checkout
Feature:
As a guest user
I want to place an order

Scenario: I visit the site
Given I am on the website
And I have an item in my bag

Scenario: I go to the bag page
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: I set an item to save for later
When I click Save For Later on an item in bag
Then I should see the item added to the Save For Later tab

Scenario: I set an item back to bag from Save For Later
When I click Move to bag on an item in Save For Later
Then I should see the item back to Bag tab

Scenario: I proceed to checkout
When I proceed to checkout as an unregistered user
Then I should be taken to checkout as an unregistered user

Scenario: I enter my shipping information
When I submit my shipping information
Then My shipping information is accepted

Scenario: I enter my payment information
When I submit my payment information
Then My payment information is accepted

@o5a_endSession
Scenario: I place my order
When I place my order
Then I should be redirected to the thank you page