Feature:LAT_PAQVQAS
As a user
I want to sort through products and add to bag on product array
and make sure that the address entered is validated during checkout

Scenario: product array - sort by and filter by 
Given I am on the website -LAT_PAQVQAS
And I am taken to a Product Array page via a search keywords -LAT_PAQVQAS
When I select a <sortby dropdown> from the Sort By option -LAT_PAQVQAS
And select a <refine group> and its <parameters> from the Filter By option -LAT_PAQVQAS
Then I should see product array assortment change -LAT_PAQVQAS
And validate order sequencing change -LAT_PAQVQAS

Scenario: product array - pagination 
Given I am on a <Product Array page> -pagination -LAT_PAQVQAS
When I click on next page -LAT_PAQVQAS
Then I should be taken to page two of this product array -LAT_PAQVQAS
And validate product array content change -LAT_PAQVQAS

Scenario: product array -leftnav
Given I am on a <Product Array page> -leftnav -LAT_PAQVQAS
When I click on a <category> in the left nav -LAT_PAQVQAS
Then I should be taken to this <category> product array -LAT_PAQVQAS
#And validate product array contents change -LAT_PAQVQAS

Scenario: add to bag on quickview + mini cart validation 
Given I am taken to a Product Arraypage via a search keywords -QUICKVIEW -LAT_PAQVQAS
And I open a product quickview overlay -LAT_PAQVQAS
When I select a <color>, <size>, quantity “1” -LAT_PAQVQAS
And click the ADD TO BAG button -LAT_PAQVQAS
Then the item appears in the mini cart -LAT_PAQVQAS
#And validate product info -LAT_PAQVQAS

Scenario: open sign in overlay on bag page
Given I have an item in the mini cart -LAT_PAQVQAS
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_PAQVQAS
When I click on the CHECKOUT button on the Bag page -LAT_PAQVQAS
Then a sign in overlay pops up -LAT_PAQVQAS

Scenario: proceed as guest checkout via bag page
Given I am on the BAG page with a sign in overlay open -LAT_PAQVQAS
When I click on CHECKOUT AS GUEST  button on sign in overlay -LAT_PAQVQAS
Then I should be redirected to the SHIPPING & BILLING page -LAT_PAQVQAS

Scenario: guest checkout – input info on SHIPPING & BILLING page
Given I am on the SHIPPING & BILLING page -LAT_PAQVQAS
When I enter First Name, Last Name, Address Line 1, City -LAT_PAQVQAS
And select a state from the State dropdown menu -LAT_PAQVQAS
And enter Zip Code, Address, Phone Number -LAT_PAQVQAS
And click on the CONTINUE CHECKOUT button -LAT_PAQVQAS
Then I should see a QAS overlay -LAT_PAQVQAS

Scenario: QAS overlay - suggested address selection 
Given I am on the SHIPPING & BILLING  page with a QAS overlay open -LAT_PAQVQAS
And with one of the suggest addresses radio button selected -LAT_PAQVQAS
When I click on USE SUGGESTED ADDRESS  button from the overlay -LAT_PAQVQAS
Then I should be redirected to the PAYMENT page -LAT_PAQVQAS
