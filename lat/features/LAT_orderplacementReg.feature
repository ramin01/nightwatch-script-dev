Feature:LAT_orderplacementReg
As a registered user
I want to place an order to verify successful checkout workflow
So that I can reach the Thank You page and get the order confirmation number

    Scenario: search by web id 
    Given I am on the website -LAT_orderplacementReg
    When I enter this product id -LAT_orderplacementReg
    Then I should be taken to a PDP of this product -LAT_orderplacementReg

    Scenario: add to bag on PDP
    Given I am on a Product Detail Page -LAT_orderplacementReg
    When I select a color, size, quantity “1” -LAT_orderplacementReg
    And click the ADD TO BAG button -LAT_orderplacementReg
    Then the item appears in the mini cart -LAT_orderplacementReg

    Scenario: open sign in overlay on bag page
    Given I have an item in the mini cart -LAT_orderplacementReg
    And I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_orderplacementReg
    When I click on the CHECKOUT button on the Bag page -LAT_orderplacementReg
    Then a sign in overlay pops up -LAT_orderplacementReg

    Scenario: log into registered account via bag page
    Given I am on the BAG page with a sign in overlay open -LAT_orderplacementReg
    And I enter a valid email address and password -LAT_orderplacementReg
    When I click on the SIGN IN & CHECKOUT button on sign in overlay -LAT_orderplacementReg
    Then I should be redirected to the REVIEW & SUBMIT page -LAT_orderplacementReg

    Scenario: place order and reach the THANK YOU PAGE w order confirmation number
    Given I am on the REVIEW & SUBMIT page -LAT_orderplacementReg
    When I click on the PLACE ORDER button -LAT_orderplacementReg
    Then I should be redirected to THANK YOU page -LAT_orderplacementReg
    And there should be an Order number -LAT_orderplacementReg