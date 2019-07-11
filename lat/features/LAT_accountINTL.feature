Feature:LAT_accountINTL
As a registered user
I want to access the account page
I want to be able to view and modify account info

Scenario: change country flag via context chooser
Given I am on the website -LAT_accountINTL
And I open the context chooser by clicking on the country flag in the top nav -LAT_accountINTL
When I select this <country> from the country dropdown menu -LAT_accountINTL
And click on SAVE & CONTINUE SHOPPING -LAT_accountINTL
Then I should see a popupoverlay displaying shipping country change -LAT_accountINTL
 
Scenario: log into registered account via account page
Given I am on the accounts page -LAT_accountINTL
When I SIGN IN with a valid email and password -LAT_accountINTL
Then I should be on the account summary page -LAT_accountINTL
And validate account information is correct -LAT_accountINTL

Scenario: account page rendering 
Given I am signed into my account -LAT_accountINTL
When I click on each account page: Account Summary, Order History, Shipping Address, Billing Address, Payment, Settings -LAT_accountINTL
Then I should see each page rendering -LAT_accountINTL

Scenario: sign out of registered account via top nav 
Given I am signed into my account -LAT_accountINTL
When I hover over <welcome, xxx> -LAT_accountINTL
And click on <Not xxx Sign out> from the dropdown> -LAT_accountINTL
Then I should be sign out of my account -LAT_accountINTL
And the top nav should reflect <Welcome, Sign In> -LAT_accountINTL