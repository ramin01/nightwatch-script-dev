const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const bayPageObj = client.page.bayPageObj()

var references = require('../page_objects/bayPageObj')
var ref = references.elements
var {bayConstants : constants} = client.globals

    /****************** go to bag page **********************************************************/
    When(/^I click on the checkout button in the mini-bag$/, () => {
        return client

        .elements('css selector', ref.minicart_itemDetails_class.selector, results => {
        if(results.value.length > 0){
            client.click(ref.minicart_checkout_btn.selector)}
        else{ //This else step might not be used
            client

            .waitForElementVisible(ref.header_bag_qty_class.selector, constants.timeout_min, true)
            .click(ref.header_bag_qty_class.selector)
            .waitForElementVisible(ref.minicart_itemDetails_class.selector, constants.timeout_min, true)
            .click(ref.minicart_checkout_btn.selector)
            }
        })
    })

    Then(/^I am directed to the bag page$/, () => {
        return bayPageObj

        .waitForElementVisible('@bag_title_class', constants.timeout_min)
    })