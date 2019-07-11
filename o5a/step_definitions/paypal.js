const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

    /******************************** Prepare PayPal **********************************************/
    When(/^I prepare PayPal$/, () => {
        return client

        .url('https://www.sandbox.paypal.com/us/home')
    })

    /****************** Go to PayPal express **********************************************************/
    When(/^I click on the paypal express checkout button$/, () =>{
        return o5aPageObj

        .waitForElementVisible('@bag_paypal_express_btn', constants.timeout_median, true)
        .click('@bag_paypal_express_btn')
    })

    Then(/^I should be taken to the paypal checkout portal$/, () => {
        return o5aPageObj

        .waitForElementVisible('@bag_paypal_login_email', constants.timeout_median, true)
        .waitForElementVisible('@bag_paypal_login_password', constants.timeout_median, true)
        .waitForElementVisible('@bag_paypal_login_btn', constants.timeout_median, true)
    })

    /******************************** Login to paypal **********************************************/
    When(/^I login to PayPal$/, () => {
        return o5aPageObj

        .setValue('@bag_paypal_login_email', 'testAcct1US@test.com')
        .setValue('@bag_paypal_login_password', 'Welcome123!')
        .click('@bag_paypal_login_btn')
    })

    Then(/^I should be logged into my PayPal account/, () => {
        return client

        .waitForElementVisible(ref.paypal_agree_cta.selector, constants.timeout_median, true)
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