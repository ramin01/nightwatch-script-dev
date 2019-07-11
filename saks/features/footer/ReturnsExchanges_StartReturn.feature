@saks_regression
@saks_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: Visit the site
Given I am on the website

Scenario: "Returns & Exchanges" from footer section
When I click on this /main/static_content.jsp?pageId=returns-exchanges footer link
Then I should be redirected to ReturnsAndExchanges page

@saks_endSession
Scenario: "Start Return" from Returns & Exchanges page
When I click on StartReturn button
And I switch Nightwatch focus to this tab 1
Then I should be redirected to Returns page