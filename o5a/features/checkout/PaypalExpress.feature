@o5a_regression
@o5a_regression_checkout
Feature:
As a guest user
I want to checkout with paypal express

Scenario: I visit the site
Given I am on the website
And I have an item in my bag

Scenario: I go to the bag page
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: I click on the paypal express button
When I click on the paypal express checkout button
Then I should be taken to the paypal checkout portal

Scenario: I log into paypal
When I login to PayPal
Then I should be logged into my PayPal account

Scenario: I agree to my order
When I agree to my order on paypal
Then My payment information is accepted

@o5a_endSession
Scenario: I place my order
When I place my order
Then I should be redirected to the thank you page