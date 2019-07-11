Feature:saks_addToMinibag
As a user
I want to proceed to product detail 
So that I can add item to mini Bag

Scenario: Visit the site
When I enter the URL
And I set some AB tests to their default values
Then I should be taken to the site

Scenario: I click on section in top nav
When I click on section in top nav
Then I should see pa_shopbydeasigner_heading

Scenario: I click on category in left nav
When I click on category in left nav
Then I should see pa_heading

Scenario: I click on pagination right arrow
When I click paginationRightArrow
Then I should see paginationPageSelected

Scenario: I click second time on pagination right arrow
When I click paginationRightArrow
Then I should see paginationPageSelected

Scenario: I click on Nursery & Kids room and then add item to bag
When I click on another category in left nav
Then I should see pa_heading

Scenario: I proceed to PDP  
When I click on item 1
Then I should see add to bag button

Scenario: I click on add to bag button 
When I click on Add to Bag button
Then I should see the item in the mini-bag
