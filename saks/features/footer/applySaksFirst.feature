@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Apply for SaksFirst Store Card" from footer section
When I click on this https://saks.capitalonecards.com/#/apply footer link
And I switch Nightwatch focus to this tab 1
Then I am redirected to the SaksFirst Store Card application page



