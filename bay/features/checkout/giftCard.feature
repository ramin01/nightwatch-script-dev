@bay_regression
@bay_checkout_regression
Feature:
As a guest user
I want to place an order

Scenario: I visit the site
When I enter the URL
Then I should be taken to the site

Scenario: I go to the bag page
Given I have an item in my bag
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
When I click on Edit on the Gift Card field
Then The gift card pop up appears

@bay_endSession
Scenario: I enter a gift card
When I submit a gift card number and pin
Then I should click Apply and the gift card should be accepted
