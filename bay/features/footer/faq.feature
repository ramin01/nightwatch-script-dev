@bay_regression
@bay_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: I visit the site
When I enter the URL
Then I should be taken to the site

@bay_endSession
Scenario: "Frequently Asked Questions" from footer section
When I click on this /content/content.jsp?pageId=FAQ&sre=FOOTER_FAQ footer link
Then the page title should say FREQUENTLY ASKED QUESTIONS
