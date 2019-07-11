Feature:LAT_PAQVINTL
As a user
I want to sort through products and add to bag on product array
and make sure that the address entered is validated during checkout

Scenario: change country flag via context chooser
Given I am on the website -LAT_PAQVINTL
And I open the context chooser by clicking on the country flag in the top nav -LAT_PAQVINTL
When I select this <country> from the country dropdown menu -LAT_PAQVINTL
And click on SAVE & CONTINUE SHOPPING -LAT_PAQVINTL
Then I should see a popupoverlay displaying shipping country change -LAT_PAQVINTL

Scenario: product array - sort by and filter by 
Given I am on the homepage -LAT_PAQVINTL
And I am taken to a Product Array page via a search keywords -LAT_PAQVINTL
When I select a <sortby dropdown> from the Sort By option -LAT_PAQVINTL
And select a <refine group> and its <parameters> from the Filter By option -LAT_PAQVINTL
Then I should see product array assortment change -LAT_PAQVINTL
And validate order sequencing change -LAT_PAQVINTL

Scenario: product array - pagination 
Given I am on a <Product Array page> -pagination -LAT_PAQVINTL
When I click on next page -LAT_PAQVINTL
Then I should be taken to page two of this product array -LAT_PAQVINTL
And validate product array content change -LAT_PAQVINTL

Scenario: product array -leftnav
Given I am on a <Product Array page> -leftnav -LAT_PAQVINTL
When I click on a <category> in the left nav -LAT_PAQVINTL
Then I should be taken to this <category> product array -LAT_PAQVINTL
#And validation product array contents change -LAT_PAQVINTL

Scenario: add to bag on quickview + mini cart validation 
Given I am taken to a Product Arraypage via a search keywords -QUICKVIEW -LAT_PAQVINTL
And I open a product quickview overlay -LAT_PAQVINTL
When I select a <color>, <size>, quantity “1” -LAT_PAQVINTL
And click the ADD TO BAG button -LAT_PAQVINTL
Then the item appears in the mini cart -LAT_PAQVINTL
And validate product info -LAT_PAQVINTL

