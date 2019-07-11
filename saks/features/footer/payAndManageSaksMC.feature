@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Pay and Manage Saks Mastercard" from footer section
When I click on the Pay and Manage Saks MasterCard link from the footer
Then I am redirected to the Saks MasterCard sign in page



