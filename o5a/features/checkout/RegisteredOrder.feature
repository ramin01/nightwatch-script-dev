@o5a_regression
@o5a_regression_checkout
Feature:
As a registered user
I want to place an order

Scenario: I visit the site
Given I am on the website
And I have an item in my bag

Scenario: I go to the bag page
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: I proceed to checkout as a registered user
When I proceed to checkout as a registered user
Then I should be taken to checkout as a registered user

@o5a_endSession
Scenario: I place my order
When I place my order
Then I should be redirected to the thank you page