Feature:LAT_PDPminicartBagINTL
As a user
I want to view the product 
I want to be able to modify product attributes to tailor what I need 

Scenario: change country flag via context chooser
Given I am on the website -LAT_PDPminicartBagINTL
And I open the context chooser by clicking on the country flag in the top nav -LAT_PDPminicartBagINTL
When I select this <country> from the country dropdown menu -LAT_PDPminicartBagINTL
And click on SAVE & CONTINUE SHOPPING -LAT_PDPminicartBagINTL
Then I should see a popupoverlay displaying shipping country change -LAT_PDPminicartBagINTL

Scenario: search by web id 
Given I am on the homepage -LAT_PDPminicartBagINTL
When I enter this product id -LAT_PDPminicartBagINTL
Then I should be taken to a PDP of this product -LAT_PDPminicartBagINTL

Scenario: PDP - switch between images, colors, and size
Given I am on a Product Detail Page that has multiple colors, sizes, and images -LAT_PDPminicartBagINTL
When I alternate between the images, colors, and sizes available -LAT_PDPminicartBagINTL
Then I should see the changes being reflected for the sku -LAT_PDPminicartBagINTL

Scenario: add to bag on PDP
Given I am on a Product Detail Page -LAT_PDPminicartBagINTL
When I select a color, size, quantity “2” -LAT_PDPminicartBagINTL
And click the ADD TO BAG button -LAT_PDPminicartBagINTL
Then I can validate the options color, size, '2', price selected in the mini bag -LAT_PDPminicartBagINTL
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 2       	|

Scenario: change size color of the items on product overlay
Given I have an item in the mini cart -LAT_PDPminicartBagINTL
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_PDPminicartBagINTL
And I access the item overlay by the EDIT button -LAT_PDPminicartBagINTL
When I update the following product information on the overlay -LAT_PDPminicartBagINTL
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 6     		|
And wait for page to refresh -LAT_PDPminicartBagINTL
Then I should see the product information updated on the bagpage: -LAT_PDPminicartBagINTL   
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 6     	|
#And validate calculation change in order total -LAT_PDPminicartBagINTL

Scenario: search by web id #2
Given I am on the saks website -LAT_PDPminicartBagINTL
When I enter this product id or sku -LAT_PDPminicartBagINTL
Then I should be navigated to a PDP of this product -LAT_PDPminicartBagINTL

Scenario: PDP - switch between images, colors, and size
Given I am on a Product Detail Page that has multiple colors, sizes, and images for selected sku -LAT_PDPminicartBagINTL
When I alternate between the images, colors, and sizes available for sku -LAT_PDPminicartBagINTL
Then I should see the changes being reflected -LAT_PDPminicartBagINTL

Scenario: add to bag on PDP
Given I am on a Product Detail Page for a selected sku -LAT_PDPminicartBagINTL
When I select a color, size, quantity “2” for different sku -LAT_PDPminicartBagINTL
And click the ADD TO BAG button in PDP page -LAT_PDPminicartBagINTL
Then I can validate the options color, size, '2', price selected for sku in the mini bag for sku -LAT_PDPminicartBagINTL
#| size    		| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 2       	|

Scenario: bag page renders with correct item amount 
Given I have items in the MINI CART -LAT_PDPminicartBagINTL
When I click on the CHECKOUT button in the mini cart -LAT_PDPminicartBagINTL
Then I should be taken to the the bag page -LAT_PDPminicartBagINTL
And validate multi item info are rendering correctly -LAT_PDPminicartBagINTL

Scenario: remove the items on the bag
Given I have an item on the bag page -LAT_PDPminicartBagINTL
When I click on REMOVE option -LAT_PDPminicartBagINTL
And I confirm the deletion of product -LAT_PDPminicartBagINTL
Then validate total quantity change -LAT_PDPminicartBagINTL

Scenario: change quantity of the item on the bag page
Given I am on the bag page -LAT_PDPminicartBagINTL
When I update the following product information on the bag page -LAT_PDPminicartBagINTL
#| quantity 	| 4    |
Then I should see the product information updated on the bag: -LAT_PDPminicartBagINTL
#| quantity 	| 4    |
#And validate calculation change in order total -LAT_PDPminicartBagINTL

Scenario: apply promo code
Given I have an item on the bag page that is promo eligible -LAT_PDPminicartBagINTL
When I apply this promo code -LAT_PDPminicartBagINTL
Then I should see the discount being applied on the item level -LAT_PDPminicartBagINTL
And validate calculation change in order total -LAT_PDPminicartBagINTL


