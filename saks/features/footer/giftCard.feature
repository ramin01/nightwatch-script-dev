@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Gift Cards" from footer section
When I click on this /Gift-Cards footer link
Then I am redirected to the SaksFirst page and I see the purchase button




