@saks_regression
@saks_checkout_regression
Feature:
As a guest user
I want to place an order

Scenario: I visit the site
Given I am on the website
And I have an item in my bag

Scenario: I go to the bag page
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: I proceed to checkout
When I proceed to checkout as an unregistered user
Then I should be taken to checkout as an unregistered user

Scenario: I enter my shipping information
When I submit my shipping information
Then My shipping information is accepted

Scenario: I enter my payment information
When I submit my payment information
Then My payment information is accepted

Scenario: I open gift card field
When I click on Apply Gift Card
Then the gift card number field appears

@saks_endSession
Scenario: I enter a gift card
When I submit a gift card number and pin
Then I should click Apply
