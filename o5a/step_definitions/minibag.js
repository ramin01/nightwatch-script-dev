const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

    /****************** go to bag page **********************************************************/
    When(/^I click on the checkout button in the mini-bag$/, () => {
        return client

        .elements('css selector', ref.minicart_itemDetails_class.selector, results => {
        if(results.value.length > 0){
            client.click(ref.minicart_checkout_btn.selector)}
        else{
            client

            .waitForElementVisible(ref.header_bag_qty_class.selector, constants.timeout_median,true)
            .click(ref.header_bag_qty_class.selector)
            .waitForElementVisible(ref.minicart_itemDetails_class.selector, constants.timeout_median,true)
            .click(ref.minicart_checkout_btn.selector)
            }
        })
    })

    Then(/^I am directed to the bag page$/, () => {
        return o5aPageObj

        .waitForElementVisible('@bag_header_css', constants.timeout_median, true)
    })