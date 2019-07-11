const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const bayPageObj = client.page.bayPageObj()

var references = require('../page_objects/bayPageObj')
var ref = references.elements
var {bayConstants : constants} = client.globals

    /****************** add to bag from pdp (no size or color)*********************************************/
    When(/^I click the ADD TO BAG button on PDP$/, () => {
        return bayPageObj

        .click('@pdp_addtobag_btn')
    })

    /*When(/^I click the BUY ONLINE AND PICK UP button on PDP$/, () => { //Case for BOPIS PDP
        return bayPageObj

        .click('@pdp_bopisBuyOnlineAndPickUp')
    })
    */
    
    Then(/^I should see the item in the mini-bag/, () => {
        return bayPageObj

        .waitForElementVisible('@minicart_itemDetails_class', constants.timeout_median)
    })

    /****************************************************************************************************/
    /*
    Description: Click on a given product color
    Variable(s): colorCode
    Acceptable Use:
        I click on this #000000 product color
    Note(s): To find the color code just inspect the color box that you'd like to use, and there will be
    a 6 digit code
    */
    /****************************************************************************************************/
/*    When(/^I click on this (.*?) product color$/, (colorCode) => {
        var colorSelector = ref.pdp_color_box.selector.replace('$colorString', colorCode)

        return client

        .waitForElementVisible(colorSelector, constants.timeout_median)
        .click(colorSelector)
    })
*/
    /****************************************************************************************************/
    /*
    Description: Click on a given product size
    Variable(s): productSize
    Acceptable Use:
        I click on this 6 product size
    Note(s):
        This only supports SIZE BOXES. The dropdown support will hopefully come soon
    */
    /****************************************************************************************************/
/*    When(/^I click on this (.*?) product size$/, (productSize) => {

        return client

        .elements('css selector', ref.pdp_size_box.selector, results => {
            for(var i=1; i<results.value.length+1; i++)
                compareSizes(i) //need to use a function because of a pass by reference issue

            function compareSizes (i){
                return client

                //would be much more attractive to use a wrapper
                .getText(ref.pdp_size_box.selector.replace('(n)', '(' + i + ') > span'), results => {

                if(results.value === productSize)
                    client.click(ref.pdp_size_box.selector.replace('(n)', '(' + i + ') > span'))
                })
            }
        })
    })
  */  
/**********************************BOPIS on PDP*****************************************************************
    When(/^I click on the BOPIS radio button$/, () => {
    return bayPageObj
    .waitForElementVisible('@pdp_bopisRadioButton', constants.timeout_median)
    .click('@pdp_bopisRadioButton')

})

    Then(/^I enter this zip code ?(.*?) and select the closest store$/, (newBopisZipCode) => {
    var bopisZipCode = constants.bopis_zip
    if(Boolean(newBopisZipCode))
                bopisZipCode = newBopisZipCode                  
    return bayPageObj
    .waitForElementVisible('@pdp_bopisZipCodeField', constants.timeout_median)
    .setValue('@pdp_bopisZipCodeField', bopisZipCode)
    .waitForElementVisible('@pdp_bopisZipCodeSubmit', constants.timeout_median)
    .click('@pdp_bopisZipCodeSubmit')
    .waitForElementVisible('@pdp_bopisBuyOnlineAndPickUp', constants.timeout_median)
    .click('@pdp_bopisBuyOnlineAndPickUp')

})
*/
    /****************************************************************************************************/
    /*
    Description: Add to bag from any page.
    Optional Parameter(s): productID, colorCode, productSize
    Acceptable Use:
        I added an item to my bag
        I added an item to my bag 0400088307022;#000000;5
        I added an item to my bag 0400088428410;-1;-1

    Note(s): All parameters are optional. If you don't pass any parameters then this will use the default
    item set in globals.js. If you do pass in an productID, then you have to pass a colorCode and productSize.
    If the item doesn't have a color or size option, then pass a -1 in for both parameters as shown in the example
    */
    /****************************************************************************************************/

    Given(/^I have an item in my bag ?(.*?)$/, (productAttributes) => {

        if(Boolean(productAttributes)){

            productAttributes = productAttributes.split(';')

            run('When I enter this product id ' + productAttributes[0] + '')
            run('Then I should be taken to a PDP of this product')

            if(productAttributes[1] !== '-1')
                run('And I click on this ' + productAttributes[1] +' product color')

            if(productAttributes[2] !== '-1')
                run('And I click on this ' + productAttributes[2] + ' product size')
        }

        else{

            run('When I enter this product id')
            run('Then I should be taken to a PDP of this product')
        }

        run('When I click the ADD TO BAG button on PDP')
        run('Then I should see the item in the mini-bag')

        return client
    })
    
    