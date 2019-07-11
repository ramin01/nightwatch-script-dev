Feature:LAT_reviewsubmitReg
As a registered user
I want to view the Review&Submit page
I want to be able to modify product attributes to tailor what I need 

Scenario: search by web id 
Given I am on the website -LAT_reviewsubmitReg
When I enter this product id -LAT_reviewsubmitReg
Then I should be taken to a PDP of this product -LAT_reviewsubmitReg

Scenario: add to bag on PDP
Given I am on a Product Detail Page -LAT_reviewsubmitReg
When I select a color, size, quantity “1” -LAT_reviewsubmitReg
And click the ADD TO BAG button -LAT_reviewsubmitReg
Then the item appears in the mini cart -LAT_reviewsubmitReg


Scenario: open sign in overlay on bag page
Given I have an item in the mini cart -LAT_reviewsubmitReg
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_reviewsubmitReg
When I click on the CHECKOUT button on the Bag page -LAT_reviewsubmitReg
Then a sign in overlay pops up -LAT_reviewsubmitReg
 
Scenario: log into registered account via bag page
Given I am on the BAG page with a sign in overlay open -LAT_reviewsubmitReg
And I enter a valid email address and password -LAT_reviewsubmitReg
When I click on the SIGN IN & CHECKOUT button on sign in overlay -LAT_reviewsubmitReg
Then I should be redirected to the review page -LAT_reviewsubmitReg

Scenario: change  quantity of the items on the R&B  page
Given I am on the Review&Submit page to update the item info -LAT_reviewsubmitReg
When I update the following product information on the R&S page: -LAT_reviewsubmitReg
#| quantity 	| 5       		|
Then I should see the product information updated on the R&S  page: -LAT_reviewsubmitReg 
#| quantity 	| 5       		|
And validate calculation change in order total -LAT_reviewsubmitReg

Scenario: change size, quantity, and color of the items on product overlay
Given I am on the Review&Submit page to edit item details -LAT_reviewsubmitReg
And I access the item overlay by the EDIT button -LAT_reviewsubmitReg
When I update the following product information on the overlay -LAT_reviewsubmitReg
#| size    	    | <size>    	|
#| color    	| <color> 	    |
#| quantity 	| 6     		|
And wait for page to refresh -LAT_reviewsubmitReg
Then I should see the product information change on the R&S page -LAT_reviewsubmitReg 


Scenario: apply promo code from the top of the page 
Given I have an item on the bag page that is promo eligible -LAT_reviewsubmitReg
When I apply this promo code -LAT_reviewsubmitReg
Then I should see the discount being applied on the item level -LAT_reviewsubmitReg
#And validate promo change in order total -LAT_reviewsubmitReg


Scenario: BILLING ADDRESS - Select an Existing Address
Given  I am on the Review&Submit page to update existing billing address -LAT_reviewsubmitReg
And I click on EDIT under the Billing Address to open the overlay -LAT_reviewsubmitReg
When I Select an Existing Address option in the billing overlay -LAT_reviewsubmitReg
And refresh after selecitng existing address -LAT_reviewsubmitReg
And Select an Existing Address from the dropdwon menu in the billing overlay -LAT_reviewsubmitReg
And click APPLY to save the billing address changes -LAT_reviewsubmitReg
Then the page should refresh and reflect the new billing address -LAT_reviewsubmitReg

Scenario: SHIPPING ADDRESS - Select an Existing Address
Given  I am on the Review&Submit page to update existing shipping address -LAT_reviewsubmitReg
And I click on EDIT under the Shipping Address to open the overlay -LAT_reviewsubmitReg
When I Select an Existing Address option in the shipping overlay -LAT_reviewsubmitReg
And Select an Existing Address from the dropdwon menu in the shipping overlay -LAT_reviewsubmitReg
And click APPLY to save the shipping address changes -LAT_reviewsubmitReg
Then the page should refresh and reflect the new shipping address -LAT_reviewsubmitReg

Scenario: PAYMENT TYPE - Edit Payment Type
Given  I am on the Review&Submit page and to edit payment type -LAT_reviewsubmitReg
And I click on EDIT under the PAYMENT TYPE to open the overlay -LAT_reviewsubmitReg
When I click on Payment Type to open dropdown menu -LAT_reviewsubmitReg
And I select a different card from the dropdown menu -LAT_reviewsubmitReg
And click APPLY button -LAT_reviewsubmitReg
Then the page should refresh and reflect the new payment method -LAT_reviewsubmitReg

Given  I am on the Review&Submit page to update shipping method -LAT_reviewsubmitReg
When I select a different shipping methods -LAT_reviewsubmitReg
Then the page should refresh -LAT_reviewsubmitReg
And validate shipping method change -LAT_reviewsubmitReg

Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the REVIEW & SUBMIT page -LAT_reviewsubmitReg
When I click on the PLACE ORDER button -LAT_reviewsubmitReg
Then I should be redirected to THANK YOU page -LAT_reviewsubmitReg
And there should be an Order number -LAT_reviewsubmitReg