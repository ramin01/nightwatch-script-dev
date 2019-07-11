@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Order Status & Tracking" from footer section
When I click on this /account/login footer link
Then I should be redirected to CheckOrderStatus page







