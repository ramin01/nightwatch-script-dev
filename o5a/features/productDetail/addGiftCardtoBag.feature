Feature:o5a_addGiftCardtoBag
As a user
I want to add gift card to Bag

Scenario: Visit the site
Given I am on the website

Scenario: Enter a product
When I enter this product id 0499535450471
Then I should be taken to a PDP of this product

Scenario: Add a product to my cart from PDP
When I click on denomination on PDP
And I click the ADD TO BAG button on PDP
Then I should see the item in the mini-bag
