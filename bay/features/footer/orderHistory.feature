@bay_regression
@bay_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: I visit the site
When I enter the URL
Then I should be taken to the site

@bay_endSession
Scenario: "Order History" from footer section
When I click on this /account/order-history footer link
Then I am redirected to the sign-into-account__title page