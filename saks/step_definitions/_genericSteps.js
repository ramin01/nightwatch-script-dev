const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const saksPageObj = client.page.saksPageObj()

var references = require('../page_objects/saksPageObj')
var ref = references.elements
var {saksConstants : constants} = client.globals

/****************************************************************************************************/
/*
Description: Use this step for any simple click step
Parameter(s): selector
Acceptable Use:

    I click on @checkout_placeOrder_btn
    
Note(s): The @ symbol is REQUIRED
*/
/****************************************************************************************************/

When(/^I click on (\S*?)$/, (selector) => {
    saksPageObj

    .waitForElementVisible(selector, constants.timeout_median, 2000, true)
    .click(selector)

    return
})

/****************************************************************************************************/
/*
Description: Use this step for any simple waitFor step
Parameter(s): selector
Acceptable Use:

    I should see @thankyou_orderNumber_css
    
Note(s): The @ symbol is REQUIRED
*/
/****************************************************************************************************/

Then(/^I should see (\S*?)$/, (selector) => {
    saksPageObj

    .waitForElementVisible(selector, constants.timeout_median, 2000, true)

    return
})