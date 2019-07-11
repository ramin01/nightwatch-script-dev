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

Scenario: I select BOPIS on the bag page
When I select BOPIS on the bag page and enter a zip code
Then I should select the closet store

Scenario: I proceed to checkout
When I proceed to checkout as an unregistered user
Then I should be placed taken to checkout as an unregistered BOPIS user

Scenario: I enter my shipping information
When I submit my BOPIS shipping information
Then My shipping information is accepted

Scenario: I enter my payment information
When I submit my payment information
Then My payment information is accepted

@bay_endSession
Scenario: I place my order
When I place my order
Then I should be redirected to the thank you page