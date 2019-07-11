const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

    /******************************** Click on SR express **********************************************/
    When(/^I click on the shoprunner express checkout button$/, () => {
        return o5aPageObj

        .click('@bag_shoprunner_express_btn')
    })

    Then(/^I should see the shoprunner sign in overlay$/, () => {
        return o5aPageObj

        .waitForElementVisible('@bag_shoprunnerSecureSignin_btn', constants.timeout_median)
    })

    /******************************** Login to SR **********************************************/
    When(/^I login to shoprunner$/, () => {
        return o5aPageObj

        .waitForElementVisible('@bag_shoprunnerEmail_css', constants.timeout_median, true)
        .setValue('@bag_shoprunnerEmail_css', 'testtest@test2356422.com')
        .waitForElementVisible('@bag_shoprunnerPassword_css', constants.timeout_median, true)
        .setValue('@bag_shoprunnerPassword_css', 'test2356422')
        .click('@bag_shoprunnerSecureSignin_btn')
    })

    Then(/^I should be logged into shoprunner$/, () => {
        return o5aPageObj

        .waitForElementVisible('@shoprunner_complete_purchase_button', constants.timeout_median)
    })

    /******************************** Place order with SR **********************************************/
    When(/^I place my order on shoprunner$/, () => {
        return client

        .elements('css selector', ref.shoprunner_complete_purchase_button.selector, results => {
            if(results.value.length > 0)
                client.setValue(ref.shoprunner_complete_purchase_button.selector, 123)

        })

        .click(ref.shoprunner_complete_purchase_button.selector)
    })