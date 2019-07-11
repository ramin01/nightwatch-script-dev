@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

@saks_endSession
Scenario: "Website Terms of Use" from footer section
When I click on this /main/static_content.jsp?pageId=website-terms-of-use footer link
Then I should be redirected to Website Terms page



