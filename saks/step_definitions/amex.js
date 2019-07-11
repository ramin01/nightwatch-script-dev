const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const saksPageObj = client.page.saksPageObj()

var references = require('../page_objects/saksPageObj')
var ref = references.elements
var {saksConstants : constants} = client.globals

    //Should have a better way of entering a specific card, but this will do for now
    When(/^I submit an Amex points eligible card$/, () => {
        return client

        .setValue(ref.checkout_ccNumber_css.selector, constants.checkout_ccNumber_amexPWP)
        .setValue(ref.checkout_expDate_css.selector, constants.checkout_expDate_amexPWP)
        .setValue(ref.checkout_CVC_css.selector, constants.checkout_CID_amexPWP)
        .setValue(ref.checkout_ccName_css.selector, constants.checkout_ccName)
        .click(ref.checkout_paymentFormCont_btn.selector)
    })

    Then(/^I should see the amex pwp module$/, () => {
        return client

        .waitForElementVisible(ref.checkout_amexPWP_learnMore.selector, constants.timeout_median)
    })