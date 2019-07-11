Feature:LAT_shoprunnerReg
As a registered user
I want to place an order to verify successful checkout workflow
So that I can reach the Thank You page and get the order confirmation number

    Scenario: search by web id 
    Given I am on the website -LAT_shoprunnerReg
    When I enter this product id -LAT_shoprunnerReg
    Then I should be taken to a PDP of this product -LAT_shoprunnerReg

    Scenario: add to bag on PDP
    Given I am on a Product Detail Page -LAT_shoprunnerReg
    When I select a color, size, quantity “1” -LAT_shoprunnerReg
    And click the ADD TO BAG button -LAT_shoprunnerReg
    Then the item appears in the mini cart -LAT_shoprunnerReg

    Scenario: open shoprunner sign in overlay on bag page
    Given I have an item in the mini cart -LAT_shoprunnerReg   
    And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_shoprunnerReg   
    When I click on the Shoprunner SIGN IN button on the top of Bag page -LAT_shoprunnerReg  
    Then shoprunner a sign in overlay pops up -LAT_shoprunnerReg   

    Scenario: sign into shoprunner account
    Given I am on the BAG page with a shoprunner sign in overlay open -LAT_shoprunnerReg   
    When I enter a valid shoprunner account email address and password -LAT_shoprunnerReg   
    And I click on the SECURE SIGN IN button on shoprunner sign in overlay -LAT_shoprunnerReg   
    Then I should see a shoprunner WELCOME BACK message -LAT_shoprunnerReg
    And click CONTINUE SHOPPING to close the shoprunner overlay -LAT_shoprunnerReg
    And validate FREE SHIPPING under order summary -LAT_shoprunnerReg 

    Scenario: log into registered account via bag page
    Given I click on the CHECKOUT button on the Bag page -LAT_shoprunnerReg
    And a sign in overlay pops up -LAT_shoprunnerReg
    When I enter a valid email address and password -LAT_shoprunnerReg
    When I click on the SIGN IN & CHECKOUT button on sign in overlay -LAT_shoprunnerReg
    Then I should be redirected to the REVIEW & SUBMIT page -LAT_shoprunnerReg

    Scenario: place order and reach the THANK YOU PAGE w order confirmation number
    Given I am on the REVIEW & SUBMIT page -LAT_shoprunnerReg
    And FREE SHIPPING appears under both order summary and shipping method -LAT_shoprunnerReg
    When I click on the PLACE ORDER button -LAT_shoprunnerReg
    Then I should be redirected to THANK YOU page -LAT_shoprunnerReg
    And there should be an Order number -LAT_shoprunnerReg