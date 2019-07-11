@saks_regression
@saks_productarray_regression
Feature:
As a user
I want to open quick view from the product array

Scenario: Visit the site
Given I am on the website

Scenario: "Women's Apparel" from top nav
When I click on the top nav link for this 4 category
Then the left nav title should say WOMEN'S APPAREL

Scenario: I click on category Shop All in left nav
When I click on Shop All category in left nav
Then I should see pa_heading

Scenario: I click on pagination right arrow
When I click pagination Right Arrow
Then I should see pagination Page Selected

Scenario: I open quick view for first item in product array
When I open quicklook for item 2
Then I should see the quicklook overlay
And I pause the test 5000

@saks_endSession
Scenario: I open quick view for second item in product array
When I open quicklook for item 4
Then I should see the quicklook overlay
And I pause the test 5000


