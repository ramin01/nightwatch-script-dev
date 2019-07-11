@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Buy Online, Pick Up in Store" from footer section
When I click on this /main/static_content.jsp?pageId=bopus_landing_page footer link
Then I should be redirected to BuyOnline page






