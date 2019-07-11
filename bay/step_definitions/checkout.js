const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const bayPageObj = client.page.bayPageObj()

var references = require('../page_objects/bayPageObj')
var ref = references.elements
var {bayConstants : constants} = client.globals


/******************************** Submit BOPIS Information **********************************************/
    When(/^I submit my BOPIS shipping information$/, () => {
        return bayPageObj
        .waitForElementPresent('@checkout_SB_bill_firstName_css', constants.timeout_median)
        .click('@checkout_RS_newBillCountry_optionA_css')
        .setValue('@checkout_SB_bill_firstName_css', constants.checkout_firstName)
        .setValue('@checkout_SB_bill_lastName_css', constants.checkout_lastName)
        .setValue('@checkout_SB_bill_addressLine1_css', constants.checkout_addressStreet_optionA)
        .setValue('@checkout_SB_bill_city_css', constants.checkout_city_optionA)
        .setValue('@checkout_SB_bill_zip_css', constants.checkout_zip_optionA)
        .setValue('@checkout_SB_bill_email_css', constants.username)
        .click('@checkout_billState_optionB_css')
        .setValue('@checkout_phone_css', constants.checkout_phone)
        .waitForElementPresent('@checkout_SB_bill_continue_css', constants.timeout_median)
        .click('@checkout_SB_bill_continue_css')
    })    
            
    /************************** Submit shipping information *****************************************/
    When(/^I submit my shipping information$/, () => {
        return bayPageObj
        .waitForElementPresent('@checkout_firstName_css', constants.timeout_median)
        .setValue('@checkout_firstName_css', constants.checkout_firstName)
        .setValue('@checkout_lastName_css', constants.checkout_lastName)
        .setValue('@checkout_addressLine1_css', constants.checkout_addressStreet_optionA)
        .setValue('@checkout_city_css', constants.checkout_city_optionA)
        .click('@checkout_state_optionA_css') //state value preselected in pageOjb.js
        .setValue('@checkout_zip_css', constants.checkout_zip_optionA)
        .setValue('@checkout_SB_email_css', constants.username)
        .setValue('@checkout_phone_css', constants.checkout_phone)
        .waitForElementPresent('@checkout_addressFormCont_btn', constants.timeout_median)
        .click('@checkout_addressFormCont_btn')
    })

    Then(/^My shipping information is accepted$/, () => {
        return bayPageObj
        .waitForElementVisible('@checkout_ccNumber_css', constants.timeout_median)
    })

    /************************** Submit payment information *****************************************/
    When(/^I submit my payment information$/, () => {
        return bayPageObj
        .waitForElementVisible('@checkout_paymentSelection', constants.timeout_median)
        .click('@checkout_paymentType_optionB_css')
        .setValue('@checkout_ccNumber_css', constants.checkout_ccNumber_optionB)
        .setValue('@checkout_ccName_css', constants.checkout_ccName)
        .click('@checkout_ccMonth_optionA_css')
        .click('@checkout_ccYear_optionA_css')
        .setValue('@checkout_CVV_css', constants.checkout_CVC3digits)
        .click('@checkout_P_continue_btn')
    })

    Then(/^My payment information is accepted$/, () => {
        return bayPageObj
        .waitForElementVisible('@checkout_RS_placeOrder_btn', constants.timeout_median)
    })
    /******************************** Gift Card **********************************************/
    When(/^I click on Edit on the Gift Card field$/, () => {
        return client
        .waitForElementVisible(ref.checkout_RS_giftCard_css.selector, constants.timeout_median)
        .click(ref.checkout_RS_giftCard_css.selector)
    })

    Then(/^The gift card pop up appears$/, () => {
        return client
        .waitForElementVisible(ref.checkout_RS_giftCardNumber_css.selector, constants.timeout_median)
    })
        
    When(/^I submit a gift card number and pin$/, () => {
        return client
        .setValue(ref.checkout_RS_giftCardNumber_css.selector, constants.giftcard_number)
        .setValue(ref.checkout_RS_giftCardPIN_css.selector, constants.giftcard_pin)
    })

    Then(/^I should click Apply and the gift card should be accepted$/, () => {
        return client
        .waitForElementVisible(ref.checkout_RS_giftCardApply.selector, constants.timeout_median)
        .click(ref.checkout_RS_giftCardApply.selector)
        .waitForElementVisible(ref.checkout_RS_placeOrder_btn.selector, constants.timeout_median)
    })
    /******************************** Place order **********************************************/
    When(/^I place my order$/, () => {
        return bayPageObj
        .waitForElementVisible('@checkout_RS_placeOrder_btn', constants.timeout_median)
        .click('@checkout_RS_placeOrder_btn')
    })

    Then(/^I should be redirected to the thank you page$/, () => {
        return bayPageObj
        .waitForElementVisible('@thankyou_header_class', constants.timeout_median)
    })

    
    