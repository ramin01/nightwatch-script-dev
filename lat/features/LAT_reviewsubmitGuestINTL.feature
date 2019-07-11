Feature:LAT_reviewsubmitGuestINTL
As a guest user
I want to view the Review&Submit page
I want to be able to modify product attributes to tailor what I need 

Scenario: change country flag via context chooser
Given I am on the website -LAT_reviewsubmitGuestINTL
And I open the context chooser by clicking on the country flag in the top nav -LAT_reviewsubmitGuestINTL
When I select this <country> from the country dropdown menu -LAT_reviewsubmitGuestINTL
And click on SAVE & CONTINUE SHOPPING -LAT_reviewsubmitGuestINTL
Then I should see a popupoverlay displaying shipping country change -LAT_reviewsubmitGuestINTL

Scenario: search by web id -LAT_reviewsubmitGuestINTL
Given I am on the homepage -LAT_reviewsubmitGuestINTL
When I enter this product id -LAT_reviewsubmitGuestINTL
Then I should be taken to a PDP of this product -LAT_reviewsubmitGuestINTL

Scenario: add to bag
Given I am on a Product Detail Page -LAT_reviewsubmitGuestINTL
When I select a color, size, quantity “1” -LAT_reviewsubmitGuestINTL
And click the ADD TO BAG button -LAT_reviewsubmitGuestINTL
Then the item appears in the mini cart -LAT_reviewsubmitGuestINTL
 
Scenario: open sign in overlay on bag page
Given I have an item in the mini cart -LAT_reviewsubmitGuestINTL
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_reviewsubmitGuestINTL
When I click on the CHECKOUT button on the Bag page -LAT_reviewsubmitGuestINTL
Then a sign in overlay pops up -LAT_reviewsubmitGuestINTL


Scenario: guest checkout – input info on SHIPPING & BILLING page
Given I am on the BAG page with a sign in overlay open -LAT_reviewsubmitGuestINTL
And I access the SHIPPING & BILLING page via CHECKOUT AS GUEST -LAT_reviewsubmitGuestINTL
When I enter First Name, Last Name, Address Line 1, City -LAT_reviewsubmitGuestINTL
And select a state from the State dropdown menu -LAT_reviewsubmitGuestINTL
And enter Zip Code, Address, Phone Number -LAT_reviewsubmitGuestINTL
And click on the CONTINUE CHECKOUT button -LAT_reviewsubmitGuestINTL
Then I should be redirected to the PAYMENT page -LAT_reviewsubmitGuestINTL

Scenario: guest checkout – input info on PAYMENT page
Given I am on the PAYMENT page -LAT_reviewsubmitGuestINTL
When I select a Payment Type from the dropdown menu -LAT_reviewsubmitGuestINTL
And enter Credit Card Number, Name on Card -LAT_reviewsubmitGuestINTL
And select Credit Card Expiration Month and Year from the dropdown menu -LAT_reviewsubmitGuestINTL
And enter Security Code -LAT_reviewsubmitGuestINTL
And click on the  CHECKOUT button -LAT_reviewsubmitGuestINTL
Then I should be redirected to the REVIEW & SUBMIT page -LAT_reviewsubmitGuestINTL

Scenario: change size, quantity, and color of the items on the bag page
Given I am on the Review&Submit page to update the item info -LAT_reviewsubmitGuestINTL
When I update the following product information on the R&S page: -LAT_reviewsubmitGuestINTL
#| quantity 	| 5       		|
Then I should see the product information updated on the R&S page:  -LAT_reviewsubmitGuestINTL  
#| quantity 	| 5       		|
And validate calculation change in order total -LAT_reviewsubmitGuestINTL


Scenario: change size, quantity, and color of the items on product overlay
Given I am on the Review&Submit page to edit item details -LAT_reviewsubmitGuestINTL
And I access the item overlay by the EDIT button -LAT_reviewsubmitGuestINTL
When I update the following product information on the overlay -LAT_reviewsubmitGuestINTL
#| size    	    | <size>    	|
#| color    	| <color> 	    |
#| quantity 	| 6     		|
And wait for page to refresh -LAT_reviewsubmitGuestINTL
Then I should see the product information change on the R&S page -LAT_reviewsubmitGuestINTL

Scenario: BILLING ADDRESS - enter a new billing address
Given  I am on the Review&Submit page to enter a new billing address -LAT_reviewsubmitGuestINTL
And I click on EDIT under the Billing Address to open the overlay -LAT_reviewsubmitGuestINTL 
When Select a NEW BILLING ADDRESS in the overlay -LAT_reviewsubmitGuestINTL
And complete the billing address form -LAT_reviewsubmitGuestINTL 
And click APPLY to save the billing address changes -LAT_reviewsubmitGuestINTL
Then the page should refresh and reflect the new billing address -LAT_reviewsubmitGuestINTL


Scenario: SHIPPING ADDRESS - enter a new shipping Address
Given  I am on the Review&Submit page to enter a new shipping Address -LAT_reviewsubmitGuestINTL
When I click on EDIT under the Shipping Address to open the overlay -LAT_reviewsubmitGuestINTL 
And Select a NEW SHIPPING ADDRESS in the overlay -LAT_reviewsubmitGuestINTL
And complete the shipping address form -LAT_reviewsubmitGuestINTL 
And click APPLY to save the shipping address changes -LAT_reviewsubmitGuestINTL
Then the page should refresh and reflect the new shipping address -LAT_reviewsubmitGuestINTL

Scenario: PAYMENT TYPE - enter a new Payment Type
Given  I am on the Review&Submit page to enter a new Payment Type -LAT_reviewsubmitGuestINTL
When I click on EDIT under the PAYMENT TYPE to open the overlay -LAT_reviewsubmitGuestINTL 
And select NEW PAYMENT TYPE in the overlay -LAT_reviewsubmitGuestINTL
And complete the payment form -LAT_reviewsubmitGuestINTL
And click APPLY button -LAT_reviewsubmitGuestINTL
Then the page should refresh and reflect the new payment method -LAT_reviewsubmitGuestINTL

Given  I am on the Review&Submit page to update shipping method -LAT_reviewsubmitGuestINTL
When I select a different shipping methods -LAT_reviewsubmitGuestINTL
Then the page should refresh -LAT_reviewsubmitGuestINTL
#And validate shipping method change -LAT_reviewsubmitGuestINTL

Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the REVIEW & SUBMIT page -LAT_reviewsubmitGuestINTL
Then I entered the security code  -LAT_reviewsubmitGuestINTL
When I click on the PLACE ORDER button -LAT_reviewsubmitGuestINTL
Then I should be redirected to THANK YOU page -LAT_reviewsubmitGuestINTL
And there should be an Order number -LAT_reviewsubmitGuestINTL
