Feature:LAT_reviewsubmitGuest
As a guest user
I want to view the Review&Submit page
I want to be able to modify product attributes to tailor what I need 

Scenario: search by web id -LAT_reviewsubmitGuest
Given I am on the website -LAT_reviewsubmitGuest
When I enter this product id -LAT_reviewsubmitGuest
Then I should be taken to a PDP of this product -LAT_reviewsubmitGuest

Scenario: add to bag
Given I am on a Product Detail Page -LAT_reviewsubmitGuest
When I select a color, size, quantity “1” -LAT_reviewsubmitGuest
And click the ADD TO BAG button -LAT_reviewsubmitGuest
Then the item appears in the mini cart -LAT_reviewsubmitGuest
 
Scenario: open sign in overlay on bag page
Given I have an item in the mini cart -LAT_reviewsubmitGuest
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_reviewsubmitGuest
When I click on the CHECKOUT button on the Bag page -LAT_reviewsubmitGuest
Then a sign in overlay pops up -LAT_reviewsubmitGuest


Scenario: guest checkout – input info on SHIPPING & BILLING page
Given I am on the BAG page with a sign in overlay open -LAT_reviewsubmitGuest
And I access the SHIPPING & BILLING page via CHECKOUT AS GUEST -LAT_reviewsubmitGuest
When I enter First Name, Last Name, Address Line 1, City -LAT_reviewsubmitGuest
And select a state from the State dropdown menu -LAT_reviewsubmitGuest
And enter Zip Code, Address, Phone Number -LAT_reviewsubmitGuest
And click on the CONTINUE CHECKOUT button -LAT_reviewsubmitGuest
Then I should be redirected to the PAYMENT page -LAT_reviewsubmitGuest

Scenario: guest checkout – input info on PAYMENT page
Given I am on the PAYMENT page -LAT_reviewsubmitGuest
When I select a Payment Type from the dropdown menu -LAT_reviewsubmitGuest
And enter Credit Card Number, Name on Card -LAT_reviewsubmitGuest
And select Credit Card Expiration Month and Year from the dropdown menu -LAT_reviewsubmitGuest
And enter Security Code -LAT_reviewsubmitGuest
And click on the  CHECKOUT button -LAT_reviewsubmitGuest
Then I should be redirected to the REVIEW & SUBMIT page -LAT_reviewsubmitGuest

Scenario: change size, quantity, and color of the items on the bag page
Given I am on the Review&Submit page to update the item info -LAT_reviewsubmitGuest
When I update the following product information on the R&S page: -LAT_reviewsubmitGuest
#| quantity 	| 5       		|
Then I should see the product information updated on the R&S page:  -LAT_reviewsubmitGuest  
#| quantity 	| 5       		|
And validate calculation change in order total -LAT_reviewsubmitGuest



Scenario: change size, quantity, and color of the items on product overlay
Given I am on the Review&Submit page to edit item details -LAT_reviewsubmitGuest
And I access the item overlay by the EDIT button -LAT_reviewsubmitGuest
When I update the following product information on the overlay -LAT_reviewsubmitGuest
#| size    	    | <size>    	|
#| color    	| <color> 	    |
#| quantity 	| 6     		|
And wait for page to refresh -LAT_reviewsubmitGuest
Then I should see the product information change on the R&S page -LAT_reviewsubmitGuest

Scenario: apply promo code from the top of the page
Given  I am on the Review&Submit page that is promo eligible -LAT_reviewsubmitGuest
And I click on the Edit Button in the promo section on the top of the page -LAT_reviewsubmitGuest
And a promo edit overlay opens -LAT_reviewsubmitGuest
When I apply this promo code on the promo edit overlay -LAT_reviewsubmitGuest
And I close the promo edit overlay -LAT_reviewsubmitGuest
Then I should see the discount being applied on the item level -LAT_reviewsubmitGuest
And validate promo change in order total -LAT_reviewsubmitGuest


Scenario: BILLING ADDRESS - enter a new billing address
Given  I am on the Review&Submit page to enter a new billing address -LAT_reviewsubmitGuest
And I click on EDIT under the Billing Address to open the overlay -LAT_reviewsubmitGuest 
When Select a NEW BILLING ADDRESS in the overlay -LAT_reviewsubmitGuest
And complete the billing address form -LAT_reviewsubmitGuest 
And click APPLY to save the billing address changes -LAT_reviewsubmitGuest
Then the page should refresh and reflect the new billing address -LAT_reviewsubmitGuest


Scenario: SHIPPING ADDRESS - enter a new shipping Address
Given  I am on the Review&Submit page to enter a new shipping Address -LAT_reviewsubmitGuest
When I click on EDIT under the Shipping Address to open the overlay -LAT_reviewsubmitGuest 
And Select a NEW SHIPPING ADDRESS in the overlay -LAT_reviewsubmitGuest
And complete the shipping address form -LAT_reviewsubmitGuest 
And click APPLY to save the shipping address changes -LAT_reviewsubmitGuest
Then the page should refresh and reflect the new shipping address -LAT_reviewsubmitGuest



Scenario: PAYMENT TYPE - enter a new Payment Type
Given  I am on the Review&Submit page to enter a new Payment Type -LAT_reviewsubmitGuest
When I click on EDIT under the PAYMENT TYPE to open the overlay -LAT_reviewsubmitGuest 
And select NEW PAYMENT TYPE in the overlay -LAT_reviewsubmitGuest
And wait for page refresh -LAT_reviewsubmitGuest
And complete the payment form -LAT_reviewsubmitGuest
And click APPLY button -LAT_reviewsubmitGuest
Then the page should refresh and reflect the new payment method -LAT_reviewsubmitGuest

Scenario: SHIPPING METHOD
Given  I am on the Review&Submit page to update shipping method -LAT_reviewsubmitGuest
When I select a different shipping methods -LAT_reviewsubmitGuest
Then the page should refresh -LAT_reviewsubmitGuest
And validate shipping method change -LAT_reviewsubmitGuest

Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the REVIEW & SUBMIT page -LAT_reviewsubmitGuest
When I click on the PLACE ORDER button -LAT_reviewsubmitGuest
Then I should be redirected to THANK YOU page -LAT_reviewsubmitGuest
And there should be an Order number -LAT_reviewsubmitGuest