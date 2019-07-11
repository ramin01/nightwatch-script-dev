Feature:LAT_topnavFooterGC
As a user
I want to check that the elements in the header and footer are rendering,
So that I can navigate to other pages including gift card page
and be able to place an order with a standard gift card

Scenario: Header top nav dropdowns and url are rendering
Given I open <website homepage> -LAT_topnavFooterGC
And hover over the top nav menu -LAT_topnavFooterGC
And the top nav menu is rendering -LAT_topnavFooterGC
When I click on a category from the <category page name> drop-down in the Top Nav bar -LAT_topnavFooterGC
Then I should be taken to the <subcategory name> page -LAT_topnavFooterGC

Scenario: navigate to gift card product array via footer 
Given I am on the website -LAT_topnavFooterGC
And I am taken to the GiftCard page -LAT_topnavFooterGC
When I click on purchase -LAT_topnavFooterGC
And select PHYSICAL gift card option -LAT_topnavFooterGC
Then I should be taken to a gift card product array page -LAT_topnavFooterGC

Scenario: add to bag
Given I am on a gift card product array page -LAT_topnavFooterGC
And I navigate to a gift card PDP via product array selection -LAT_topnavFooterGC
When I select a denomination, quantity “1” -LAT_topnavFooterGC
And click the ADD TO BAG button -LAT_topnavFooterGC
Then the item appears in the mini cart -LAT_topnavFooterGC

Scenario: open sign in overlay on bag page
Given I have an item in the mini cart -LAT_topnavFooterGC
And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_topnavFooterGC
When I click on the CHECKOUT button on the Bag page -LAT_topnavFooterGC
Then a sign in overlay pops up -LAT_topnavFooterGC
 
Scenario: log into registered account via bag page
Given I am on the BAG page with a sign in overlay open -LAT_topnavFooterGC
And I enter a valid email address and password -LAT_topnavFooterGC
When I click on the SIGN IN & CHECKOUT button on sign in overlay -LAT_topnavFooterGC
Then I should be redirected to the REVIEW & SUBMIT page -LAT_topnavFooterGC
         	
Scenario: place order and reach the THANK YOU PAGE w order confirmation number
Given I am on the REVIEW & SUBMIT page -LAT_topnavFooterGC
When I click on the PLACE ORDER button -LAT_topnavFooterGC
Then I should be redirected to THANK YOU page -LAT_topnavFooterGC
And there should be an Order number -LAT_topnavFooterGC


