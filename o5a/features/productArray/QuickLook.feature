Feature:o5a_PA_QuickView
As a user
I want to proceed to product array
And open quicklook for certain items

Scenario: Visit the site
Given I am on the website

Scenario: I click on section in top nav
When I click on section in top nav
Then I should see pa_heading

Scenario: I click on category in top nav 
When I click on category in left nav
Then I should see pa_heading

Scenario: I click on sub_category in top nav 
When I click on sub_category in left nav
Then I should see pa_heading

Scenario: I open quick view for first item in product array
When I open quicklook for item 1
Then I should see the quicklook overlay
And I pause the test 5000

Scenario: I closed quick view for first item in product array
When I click on quicklook close icon
Then I should no longer see the quicklook overlay

Scenario: I open quick view for second item in product array
When I open quicklook for item 6
Then I should see the quicklook overlay
And I pause the test 5000