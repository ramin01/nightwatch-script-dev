@bay_regression
@bay_checkout_regression
Feature:
As a registered user
I want to place an order

Scenario: I visit the site
When I enter the URL
Then I should be taken to the site

Scenario: I go to the bag page
Given I have an item in my bag
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: I proceed to checkout
When I proceed to checkout as a registered user
Then I should be taken to checkout as a registered user

@bay_endSession
Scenario: I place my order
When I place my order
Then I should be redirected to the thank you page