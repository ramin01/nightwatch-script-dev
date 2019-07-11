const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const saksPageObj = client.page.saksPageObj()

var references = require('../page_objects/saksPageObj')
var ref = references.elements
var {saksConstants : constants} = client.globals

    /******************************** Go to PayPal **********************************************/
    When(/^I prepare PayPal$/, () => {
        return client

        .url('https://www.sandbox.paypal.com/us/home')
    })

    /****************** Go to PayPal express **********************************************************/
    When(/^I click on the paypal express checkout button$/, () =>{
        return saksPageObj

        .waitForElementVisible('@bag_paypal_express_btn', constants.timeout_median)
        .click('@bag_paypal_express_btn')
    })

    Then(/^I should be taken to the paypal checkout portal$/, () => {
        return saksPageObj

        .waitForElementVisible('@bag_paypal_login_email', constants.timeout_median)
        .waitForElementVisible('@bag_paypal_login_password', constants.timeout_median)
        .waitForElementVisible('@bag_paypal_login_btn', constants.timeout_median)
    })

    /******************************** Login to paypal **********************************************/
    When(/^I login to PayPal$/, () => {
        return saksPageObj

        .setValue('@bag_paypal_login_email', 'testAcct1US@test.com')
        .setValue('@bag_paypal_login_password', 'Welcome123!')
        .click('@bag_paypal_login_btn')
    })

    Then(/^I should be logged into my PayPal account$/, () => {
        return client

        //need to make this page object

        .waitForElementVisible(ref.paypal_agree_cta.selector, constants.timeout_median)
    })

    /******************************** Agree to paypal **********************************************/
    When(/^I agree to my order on paypal$/, () => {
        return client

        //need to make this page object

        .pause(5000)
        .execute(function() {
            document.querySelector(ref.paypal_agree_cta.selector).scrollIntoView()
        })

        .click(ref.paypal_agree_cta.selector)
    })