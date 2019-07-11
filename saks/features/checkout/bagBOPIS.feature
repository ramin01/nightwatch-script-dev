@saks_checkout_regression
Feature:
As a guest user
I want to place an order

Scenario: I visit the site
Given I am on the website
And I have an item in my bag 0400086899113;#000000;10.5

Scenario: I go to the bag page
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: I select BOPIS on the bag page
When I select BOPIS on the bag page and enter a zip code
Then I should select the closet store

Scenario: I proceed to checkout
When I proceed to checkout as an unregistered user
Then I should be placed taken to checkout as an unregistered user

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