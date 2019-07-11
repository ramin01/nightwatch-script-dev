@o5a_regression
@o5a_regression_checkout
Feature:
As a guest user
I want to place an order with a promo code on Bag

Scenario: I visit the site
Given I am on the website
And I have an item in my bag

Scenario: I go to the bag page
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: I enter a promo code at bag
When I add a promo code on the bag page
Then My promo code should be accepted

Scenario: I proceed to checkout
When I proceed to checkout as an unregistered user
Then I should be taken to checkout as an unregistered user
And The promo should appear in checkout page

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