@saks_regression
@saks_checkout_regression
Feature:
As a guest user
I want to see the amex PWP module

Scenario: I visit the site
Given I am on the website
And I set this cookie showAmexPwPOverride;TRUE
And I have an item in my bag 0400086899113;#000000;10.5

Scenario: I go to the bag page
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: I proceed to checkout
When I proceed to checkout as an unregistered user
Then I should be taken to checkout as an unregistered user

Scenario: I enter my shipping information
When I submit my shipping information
Then My shipping information is accepted

@saks_endSession
Scenario: I enter an amex eligible card
When I submit an Amex points eligible card
Then My payment information is accepted
And I should see the amex pwp module