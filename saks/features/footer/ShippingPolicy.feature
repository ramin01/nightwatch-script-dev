@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

Scenario: "Shipping Policy" from footer section
When I click on this /main/static_content.jsp?pageId=shipping footer link
Then I should be redirected to Shipping Policy page

@saks_endSession
Scenario: "You can find out more" from Shipping Policy page 
When I click on find out more link
Then I should be redirected to InternationalShipping page



