@bay_regression
@bay_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: I visit the site
When I enter the URL
Then I should be taken to the site

@bay_endSession
Scenario: "Terms & Conditions" from footer section
When I click on this /content/content.jsp?pageId=TermsConditions&sre=FOOTER_TERMSCONDITIONS footer link
Then the page title should say Website Legal Terms and Conditions
