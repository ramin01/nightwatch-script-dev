Feature:LAT_topnavFooterINTL
As a user
I want to check that the elements in the header and footer are rendering,
And be able to navigate to other pages via header and footer

Scenario: change country flag via context chooser
Given I am on the website -LAT_topnavFooterINTL
And I open the context chooser by clicking on the country flag in the top nav -LAT_topnavFooterINTL
When I select this <country> from the country dropdown menu -LAT_topnavFooterINTL
And click on SAVE & CONTINUE SHOPPING -LAT_topnavFooterINTL
Then I should see a popupoverlay displaying shipping country change -LAT_topnavFooterINTL

Scenario: Header top nav dropdowns and url are rendering
Given I am on the homepage -LAT_topnavFooterINTL
And hover over the top nav menu -LAT_topnavFooterINTL    
And the top nav menu is rendering -LAT_topnavFooterINTL    
When I click on a category from the <category page name> drop-down in the Top Nav bar -LAT_topnavFooterINTL    
Then I should be taken to the <subcategory name> page -LAT_topnavFooterINTL    

Scenario: Footer and URL are rendering 
Given I am on the LT homepage -LAT_topnavFooterINTL 
And I scroll down to page footer -LAT_topnavFooterINTL  
When I click on <this CTA link> in the page footer -LAT_topnavFooterINTL   
Then I should be taken to <this CTA link> page -LAT_topnavFooterINTL   