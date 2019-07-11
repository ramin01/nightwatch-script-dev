@bay_regression
@bay_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: I visit the site
When I enter the URL
Then I should be taken to the site

@bay_endSession
Scenario: "Order Status" from footer section
When I click on this /account/summary footer link
Then I am redirected to the order-status__title page