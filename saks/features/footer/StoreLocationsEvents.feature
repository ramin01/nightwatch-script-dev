@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

Scenario: "Store Locations & Events" from footer section
When I click on this /locations footer link
Then I should be redirected to bw__SearchHeroVariant2__title landing page and see proper page heading

@saks_endSession
Scenario: "Store Locator" from Store Locations & Events page
When I enter a location in Search a Location edit field
And I click on Search button

