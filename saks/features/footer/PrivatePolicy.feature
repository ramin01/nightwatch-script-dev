@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Privacy Policy" from footer section
When I click on this /main/static_content.jsp?pageId=privacy-policy footer link
Then I should be redirected to Private Policy page



