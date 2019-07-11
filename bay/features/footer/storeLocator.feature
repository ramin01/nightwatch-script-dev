@bay_regression
@bay_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: I visit the site
When I enter the URL
Then I should be taken to the site

@bay_endSession
Scenario: "Store Locator" from footer section
When I click on this http://locations.thebay.com/en-ca footer link
#And I close this tab tab 1
And I switch Nightwatch focus to this tab 2
Then I am redirected to the bwt-index-main-title page
