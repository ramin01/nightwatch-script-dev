Feature:LAT_account
As a registered user
I want to access the account page
I want to be able to view and modify account info

Scenario: log into registered account via account page
Given I am on the accounts page -LAT_account
When I SIGN IN with a valid email and password -LAT_account
Then I should be on the account summary page -LAT_account
And validate account information is correct -LAT_account

Scenario: account page rendering 
Given I am signed into my account -LAT_account
When I click on each account page: Account Summary, Order History, Shipping Address, Billing Address, Payment, Settings -LAT_account
Then I should see each page rendering -LAT_account

Scenario: sign out of registered account via top nav 
Given I am signed into my account -LAT_account
When I hover over <welcome, xxx> -LAT_account
And click on <Not xxx Sign out> from the dropdown> -LAT_account
Then I should be sign out of my account -LAT_account
And the top nav should reflect <Welcome, Sign In> -LAT_account
