Feature:LAT_PDPminicartBag
As a user
I want to view the product 
I want to be able to modify product attributes to tailor what I need 

Scenario: search by web id 
Given I am on the website -LAT_PDPminicartBag
When I enter this product id -LAT_PDPminicartBag
Then I should be taken to a PDP of this product -LAT_PDPminicartBag

Scenario: PDP - switch between images, colors, and size
Given I am on a Product Detail Page that has multiple colors, sizes, and images -LAT_PDPminicartBag
When I alternate between the images, colors, and sizes available -LAT_PDPminicartBag
Then I should see the changes being reflected for the sku -LAT_PDPminicartBag

Scenario: add to bag on PDP
Given I am on a Product Detail Page -LAT_PDPminicartBag
When I select a color, size, quantity “2” -LAT_PDPminicartBag
And click the ADD TO BAG button -LAT_PDPminicartBag
Then I can validate the options color, size, '2', price selected in the mini bag -LAT_PDPminicartBag
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 2       	|

Scenario: change size color of the items on product overlay
Given I have an item in the mini cart -LAT_PDPminicartBag
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_PDPminicartBag
And I access the item overlay by the EDIT button -LAT_PDPminicartBag
When I update the following product information on the overlay -LAT_PDPminicartBag
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 6     		|
And wait for page to refresh -LAT_PDPminicartBag
Then I should see the product information updated on the bagpage: -LAT_PDPminicartBag   
#| size    	| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 6     	|
#And validate calculation change in order total -LAT_PDPminicartBag


Scenario: search by web id #2
Given I am on the saks website -LAT_PDPminicartBag
When I enter this product id or sku -LAT_PDPminicartBag
Then I should be navigated to a PDP of this product -LAT_PDPminicartBag

Scenario: PDP - switch between images, colors, and size
Given I am on a Product Detail Page that has multiple colors, sizes, and images for selected sku -LAT_PDPminicartBag
When I alternate between the images, colors, and sizes available for sku -LAT_PDPminicartBag
Then I should see the changes being reflected -LAT_PDPminicartBag

Scenario: add to bag on PDP
Given I am on a Product Detail Page for a selected sku -LAT_PDPminicartBag
When I select a color, size, quantity “2” for different sku -LAT_PDPminicartBag
And click the ADD TO BAG button in PDP page -LAT_PDPminicartBag
Then I can validate the options color, size, '2', price selected for sku in the mini bag for sku -LAT_PDPminicartBag
#| size    		| <size>  	|
#| color    	| <color> 	|
#| quantity 	| 2       	|

Scenario: bag page renders with correct item amount 
Given I have items in the MINI CART -LAT_PDPminicartBag
When I click on the CHECKOUT button in the mini cart -LAT_PDPminicartBag
Then I should be taken to the the bag page -LAT_PDPminicartBag
And validate multi item info are rendering correctly -LAT_PDPminicartBag

Scenario: remove the items on the bag
Given I have an item on the bag page -LAT_PDPminicartBag
When I click on REMOVE option -LAT_PDPminicartBag
And I confirm the deletion of product -LAT_PDPminicartBag
Then validate total quantity change -LAT_PDPminicartBag

Scenario: change quantity of the item on the bag page
Given I am on the bag page -LAT_PDPminicartBag
When I update the following product information on the bag page -LAT_PDPminicartBag
#| quantity 	| 4    |
Then I should see the product information updated on the bag: -LAT_PDPminicartBag
#| quantity 	| 4    |
#And validate calculation change in order total -LAT_PDPminicartBag


Scenario: apply promo code
Given I have an item on the bag page that is promo eligible -LAT_PDPminicartBag
When I apply this promo code -LAT_PDPminicartBag
Then I should see the discount being applied on the item level -LAT_PDPminicartBag
And validate calculation change in order total -LAT_PDPminicartBag

Scenario: Estimated tax calculation 
Given I have an item on the bag page that is taxable -LAT_PDPminicartBag
When I enter a shipping Zip Code -LAT_PDPminicartBag
Then I should see calculation change for tax and order total -LAT_PDPminicartBag
