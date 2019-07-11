@saks_regression
@saks_checkout_regression
Feature:
As a guest user
I would like to checkout with shoprunner express

Scenario: Visit the site & add item to bag
Given I am on the website
And I have an item in my bag 0400088307022;#000000;5

Scenario: Go to the bag page
When I click on the checkout button in the mini-bag
Then I am directed to the bag page

Scenario: Click on shoprunner express
When I click on the shoprunner express checkout button
Then I should see the shoprunner sign in overlay

Scenario: Login to shoprunner
When I login to shoprunner
Then I should be logged into shoprunner

@saks_endSession
Scenario: Place order with shoprunner express
When I place my order on shoprunner
Then I should be redirected to the thank you page