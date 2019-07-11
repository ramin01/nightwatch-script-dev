@saks_regression
@saks_checkout_regression
Feature:
As a guest user
I want to checkout with masterpass express

Scenario: I visit the site
Given I am on the website
And I have an item in my bag

Scenario: I go to the bag page
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: I click on the masterpass express button
When I use masterpass express
Then My payment information is accepted

@saks_endSession
Scenario: I place my order
When I place my order
Then I should be redirected to the thank you page