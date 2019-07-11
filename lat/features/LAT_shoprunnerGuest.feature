Feature:LAT_shoprunnerGuest
As a guest user
I want to place an order to verify successful checkout workflow
So that I can reach the Thank You page and get the order confirmation number
 
Scenario: search by web id 
Given I am on the website -LAT_shoprunnerGuest
When I enter this product id -LAT_shoprunnerGuest
Then I should be taken to a PDP of this product -LAT_shoprunnerGuest

Scenario: add to bag
Given I am on a Product Detail Page -LAT_shoprunnerGuest
When I select a color, size, quantity “1” -LAT_shoprunnerGuest
And click the ADD TO BAG button -LAT_shoprunnerGuest
Then the item appears in the mini cart -LAT_shoprunnerGuest

Scenario: open shoprunner sign in overlay on bag page
Given I have an item in the mini cart -LAT_shoprunnerGuest   
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_shoprunnerGuest   
When I click on the Shoprunner SIGN IN button on the top of Bag page -LAT_shoprunnerGuest   
Then shoprunner a sign in overlay pops up -LAT_shoprunnerGuest   

Scenario: sign into shoprunner account
Given I am on the BAG page with a shoprunner sign in overlay open -LAT_shoprunnerGuest   
When I enter a valid shoprunner account email address and password -LAT_shoprunnerGuest   
And I click on the SECURE SIGN IN button on shoprunner sign in overlay -LAT_shoprunnerGuest   
Then I should see a shoprunner WELCOME BACK message -LAT_shoprunnerGuest
And click CONTINUE SHOPPING to close the shoprunner overlay -LAT_shoprunnerGuest
And validate FREE SHIPPING under order summary -LAT_shoprunnerGuest 

Scenario: guest checkout - sign in overlay on bag page 
Given I am on the BAG page with a sign in overlay open -LAT_shoprunnerGuest
When I click on CHECKOUT AS GUEST button on the overlay -LAT_shoprunnerGuest  
Then I should be taken to the SHIPPING & BILLING page -LAT_shoprunnerGuest

Scenario: guest checkout – input info on SHIPPING & BILLING page 
Given I am on the SHIPPING & BILLING page -LAT_shoprunnerGuest
When I enter First Name, Last Name, Address Line 1, City -LAT_shoprunnerGuest
And select a state from the State dropdown menu -LAT_shoprunnerGuest
And enter Zip Code, Address, Phone Number -LAT_shoprunnerGuest
And click on the CONTINUE CHECKOUT button -LAT_shoprunnerGuest
Then I should be redirected to the PAYMENT page -LAT_shoprunnerGuest

Scenario: guest checkout – input info on PAYMENT page
Given I am on the PAYMENT page -LAT_shoprunnerGuest
When I select a Payment Type from the dropdown menu -LAT_shoprunnerGuest
And enter Credit Card Number, Name on Card -LAT_shoprunnerGuest
And select Credit Card Expiration Month and Year from the dropdown menu -LAT_shoprunnerGuest
And enter Security Code -LAT_shoprunnerGuest
And click on the  CHECKOUT button -LAT_shoprunnerGuest
Then I should be redirected to the REVIEW & SUBMIT page -LAT_shoprunnerGuest

Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the REVIEW & SUBMIT page -LAT_shoprunnerGuest
And FREE SHIPPING appears under both order summary and shipping method -LAT_shoprunnerGuest
When I click on the PLACE ORDER button -LAT_shoprunnerGuest
Then I should be redirected to THANK YOU page -LAT_shoprunnerGuest
And there should be an Order number -LAT_shoprunnerGuest