Feature:LAT_reviewsubmitRegINTL
As a registered user
I want to view the Review&Submit page
I want to be able to modify product attributes to tailor what I need 

Scenario: change country flag via context chooser
Given I am on the website -LAT_reviewsubmitRegINTL
And I open the context chooser by clicking on the country flag in the top nav -LAT_reviewsubmitRegINTL
When I select this <country> from the country dropdown menu -LAT_reviewsubmitRegINTL
And click on SAVE & CONTINUE SHOPPING -LAT_reviewsubmitRegINTL
Then I should see a popupoverlay displaying shipping country change -LAT_reviewsubmitRegINTL

Scenario: search by web id 
Given I am on the homepage -LAT_reviewsubmitRegINTL
When I enter this product id -LAT_reviewsubmitRegINTL
Then I should be taken to a PDP of this product -LAT_reviewsubmitRegINTL

Scenario: add to bag on PDP
Given I am on a Product Detail Page -LAT_reviewsubmitRegINTL
When I select a color, size, quantity “1” -LAT_reviewsubmitRegINTL
And click the ADD TO BAG button -LAT_reviewsubmitRegINTL
Then the item appears in the mini cart -LAT_reviewsubmitRegINTL


Scenario: open sign in overlay on bag page
Given I have an item in the mini cart -LAT_reviewsubmitRegINTL
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_reviewsubmitRegINTL
When I click on the CHECKOUT button on the Bag page -LAT_reviewsubmitRegINTL
Then a sign in overlay pops up -LAT_reviewsubmitRegINTL
 
Scenario: log into registered account via bag page
Given I am on the BAG page with a sign in overlay open -LAT_reviewsubmitRegINTL
And I enter a valid email address and password -LAT_reviewsubmitRegINTL
When I click on the SIGN IN & CHECKOUT button on sign in overlay   -LAT_reviewsubmitRegINTL
Then I should be redirected to the review page -LAT_reviewsubmitRegINTL

Scenario: change  quantity of the items on the R&B  page
Given I am on the Review&Submit page to update the item info -LAT_reviewsubmitRegINTL
When I update the following product information on the R&S page: -LAT_reviewsubmitRegINTL
#| quantity 	| 5       		|
Then I should see the product information updated on the R&S  page: -LAT_reviewsubmitRegINTL 
#| quantity 	| 5       		|
And validate calculation change in order total -LAT_reviewsubmitRegINTL

Scenario: change size, quantity, and color of the items on product overlay
Given I am on the Review&Submit page to edit item details -LAT_reviewsubmitRegINTL
And I access the item overlay by the EDIT button -LAT_reviewsubmitRegINTL
When I update the following product information on the overlay -LAT_reviewsubmitRegINTL
#| size    	    | <size>    	|
#| color    	| <color> 	    |
#| quantity 	| 6     		|
And wait for page to refresh -LAT_reviewsubmitRegINTL
Then I should see the product information change on the R&S page -LAT_reviewsubmitRegINTL 

Scenario: BILLING ADDRESS - Select an Existing Address
Given  I am on the Review&Submit page to update existing billing address -LAT_reviewsubmitRegINTL
And I click on EDIT under the Billing Address to open the overlay -LAT_reviewsubmitRegINTL
When I Select an Existing Address option in the billing overlay -LAT_reviewsubmitRegINTL
And Select an Existing Address from the dropdwon menu in the billing overlay -LAT_reviewsubmitRegINTL
And click APPLY to save the billing address changes -LAT_reviewsubmitRegINTL
Then the page should refresh and reflect the new billing address -LAT_reviewsubmitRegINTL

Scenario: SHIPPING ADDRESS - Select an Existing Address
Given  I am on the Review&Submit page to update existing shipping address -LAT_reviewsubmitRegINTL
And I click on EDIT under the Shipping Address to open the overlay -LAT_reviewsubmitRegINTL
When I Select an Existing Address option in the shipping overlay -LAT_reviewsubmitRegINTL
And Select an Existing Address from the dropdwon menu in the shipping overlay -LAT_reviewsubmitRegINTL
And click APPLY to save the shipping address changes -LAT_reviewsubmitRegINTL
Then the page should refresh and reflect the new shipping address -LAT_reviewsubmitRegINTL

Scenario: PAYMENT TYPE - Edit Payment Type
Given  I am on the Review&Submit page and to edit payment type -LAT_reviewsubmitRegINTL
And I click on EDIT under the PAYMENT TYPE to open the overlay -LAT_reviewsubmitRegINTL
When I click on Payment Type to open dropdown menu -LAT_reviewsubmitRegINTL
And I select a different card from the dropdown menu -LAT_reviewsubmitRegINTL
And click APPLY button -LAT_reviewsubmitRegINTL
Then the page should refresh and reflect the new payment method -LAT_reviewsubmitRegINTL

Given  I am on the Review&Submit page to update shipping method -LAT_reviewsubmitRegINTL
When I select a different shipping methods -LAT_reviewsubmitRegINTL
Then the page should refresh -LAT_reviewsubmitRegINTL
#And validate shipping method change -LAT_reviewsubmitRegINTL

Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the REVIEW & SUBMIT page -LAT_reviewsubmitRegINTL
When I click on the PLACE ORDER button -LAT_reviewsubmitRegINTL
Then I should be redirected to THANK YOU page -LAT_reviewsubmitRegINTL
And there should be an Order number -LAT_reviewsubmitRegINTL