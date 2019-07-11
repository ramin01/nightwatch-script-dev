@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Bridal Salon" from footer section
When I click on Bridal Salon link
Then I should be redirected to Bridal Salon Page  
