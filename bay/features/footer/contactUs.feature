@bay_regression
@bay_footerlinks_regression
Feature:
As a user
I want to click through footer links

Scenario: I visit the site
When I enter the URL
Then I should be taken to the site

@bay_endSession
Scenario: "Contact Us" from footer section
When I click on this /content/content.jsp?pageId=ContactUsEmail&sre=FOOTER_CONTACTUS footer link
And I switch Nightwatch focus to this tab 1
Then the page title should say Contact Us
