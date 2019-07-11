@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "International" from footer section
When I click on this /main/static_content.jsp?pageId=shipping-international footer link
Then I should be redirected to InternationalShipping page


