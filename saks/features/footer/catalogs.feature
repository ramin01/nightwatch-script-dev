@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Catalogs" from footer section
When I click on this /cqc/catalog.jsp footer link
Then I am redirected to the Saks Catalogs page




