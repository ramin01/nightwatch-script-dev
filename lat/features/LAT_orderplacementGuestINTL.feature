Feature:LAT_orderplacementGuestINTL
As a guest user
I want to place an order to verify successful checkout workflow
So that I can reach the Thank You page and get the order confirmation number
 
Scenario: change country flag via context chooser
Given I am on the website -LAT_orderplacementGuestINTL
And I open the context chooser by clicking on the country flag in the top nav -LAT_orderplacementGuestINTL
When I select this <country> from the country dropdown menu -LAT_orderplacementGuestINTL
And click on SAVE & CONTINUE SHOPPING -LAT_orderplacementGuestINTL
Then I should see a popupoverlay displaying shipping country change -LAT_orderplacementGuestINTL


Scenario: search by web id 
Given I am on the homepage -LAT_orderplacementGuestINTL
When I enter this product id -LAT_orderplacementGuestINTL
Then I should be taken to a PDP of this product -LAT_orderplacementGuestINTL

Scenario: add to bag
Given I am on a Product Detail Page -LAT_orderplacementGuestINTL
When I select a color, size, quantity “1” -LAT_orderplacementGuestINTL
And click the ADD TO BAG button -LAT_orderplacementGuestINTL
Then the item appears in the mini cart -LAT_orderplacementGuestINTL

Scenario: open sign in overlay on bag page
Given I have an item in the mini cart -LAT_orderplacementGuestINTL
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_orderplacementGuestINTL
When I click on the CHECKOUT button on the Bag page -LAT_orderplacementGuestINTL
Then a sign in overlay pops up -LAT_orderplacementGuestINTL

Scenario: guest checkout – input info on SHIPPING & BILLING page 
Given I am on the BAG page with a sign in overlay open -LAT_orderplacementGuestINTL
And I access the SHIPPING & BILLING page via CHECKOUT AS GUEST -LAT_orderplacementGuestINTL
When I enter First Name, Last Name, Address Line 1, City -LAT_orderplacementGuestINTL
And select a state from the State dropdown menu -LAT_orderplacementGuestINTL
And enter Zip Code, Address, Phone Number -LAT_orderplacementGuestINTL
And click on the CONTINUE CHECKOUT button -LAT_orderplacementGuestINTL
Then I should be redirected to the PAYMENT page -LAT_orderplacementGuestINTL

Scenario: guest checkout – input info on PAYMENT page
Given I am on the PAYMENT page -LAT_orderplacementGuestINTL
When I select a Payment Type from the dropdown menu -LAT_orderplacementGuestINTL
And enter Credit Card Number, Name on Card -LAT_orderplacementGuestINTL
And select Credit Card Expiration Month and Year from the dropdown menu -LAT_orderplacementGuestINTL
And enter Security Code -LAT_orderplacementGuestINTL
And click on the  CHECKOUT button -LAT_orderplacementGuestINTL
Then I should be redirected to the REVIEW & SUBMIT page -LAT_orderplacementGuestINTL

Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the REVIEW & SUBMIT page -LAT_orderplacementGuestINTL
And I entered the security code  -LAT_orderplacementGuestINTL
When I click on the PLACE ORDER button -LAT_orderplacementGuestINTL
Then I should be redirected to THANK YOU page -LAT_orderplacementGuestINTL
And there should be an Order number -LAT_orderplacementGuestINTL