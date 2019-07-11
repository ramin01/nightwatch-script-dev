Feature:LAT_orderplacementGuest
As a guest user
I want to place an order to verify successful checkout workflow
So that I can reach the Thank You page and get the order confirmation number
 
Scenario: search by web id 
Given I am on the website -LAT_orderplacementGuest
When I enter this product id -LAT_orderplacementGuest
Then I should be taken to a PDP of this product -LAT_orderplacementGuest

Scenario: add to bag
Given I am on a Product Detail Page -LAT_orderplacementGuest
When I select a color, size, quantity “1” -LAT_orderplacementGuest
And click the ADD TO BAG button -LAT_orderplacementGuest
Then the item appears in the mini cart -LAT_orderplacementGuest

Scenario: open sign in overlay on bag page
Given I have an item in the mini cart -LAT_orderplacementGuest
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_orderplacementGuest
When I click on the CHECKOUT button on the Bag page -LAT_orderplacementGuest
Then a sign in overlay pops up -LAT_orderplacementGuest

Scenario: guest checkout – input info on SHIPPING & BILLING page 
Given I am on the BAG page with a sign in overlay open -LAT_orderplacementGuest
And I access the SHIPPING & BILLING page via CHECKOUT AS GUEST -LAT_orderplacementGuest
When I enter First Name, Last Name, Address Line 1, City -LAT_orderplacementGuest
And select a state from the State dropdown menu -LAT_orderplacementGuest
And enter Zip Code, Address, Phone Number -LAT_orderplacementGuest
And click on the CONTINUE CHECKOUT button -LAT_orderplacementGuest
Then I should be redirected to the PAYMENT page -LAT_orderplacementGuest

Scenario: guest checkout – input info on PAYMENT page
Given I am on the PAYMENT page -LAT_orderplacementGuest
When I select a Payment Type from the dropdown menu -LAT_orderplacementGuest
And enter Credit Card Number, Name on Card -LAT_orderplacementGuest
And select Credit Card Expiration Month and Year from the dropdown menu -LAT_orderplacementGuest
And enter Security Code -LAT_orderplacementGuest
And click on the CHECKOUT button -LAT_orderplacementGuest
Then I should be redirected to the REVIEW & SUBMIT page -LAT_orderplacementGuest

Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the REVIEW & SUBMIT page -LAT_orderplacementGuest
When I click on the PLACE ORDER button -LAT_orderplacementGuest
Then I should be redirected to THANK YOU page -LAT_orderplacementGuest
And there should be an Order number -LAT_orderplacementGuest