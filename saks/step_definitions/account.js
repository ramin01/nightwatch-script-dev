const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const saksPageObj = client.page.saksPageObj()

var references = require('../page_objects/saksPageObj')
var ref = references.elements
var {saksConstants : constants} = client.globals

    /****************** go to accounts **********************************************************/
    When(/^I click on the account button$/, () => {
        return client

        .click(ref.header_welcomeSignin_css.selector)
    })

    Then(/^I should be taken to the login page$/, () => {
        return client

        .waitForElementVisible(ref.acc_loginNewaccount_class.selector, constants.timeout_median)
    })

    /****************************************************************************************************/
    /*
    Description: Login to account from accounts page
    Optional Parameter(s): accountInformation
    Acceptable Use:
        I submit my login information
        I submit my login information myTestAccount@test.com;myPassword

    Note(s): Account information is optional. If you throw in an account then you have to throw a password for
    it to work
    */
    /****************************************************************************************************/
    When(/^I submit my login information ?(.*?)$/, (accountInformation) => {

        var email = constants.defaultEmail
        var password = constants.defaultPassword

        console.log(accountInformation)

        if(Boolean(accountInformation)){
            accountInformation = accountInformation.split(';')

            email = accountInformation[0]
            password = accountInformation[1]
        }

        return client

        .setValue(ref.acc_emailField_css.selector, email)
        .pause(100)

        .setValue(ref.acc_passwordField_css.selector, password)
        .pause(100)

        .click(ref.acc_signin_btn.selector)
    })

    Then(/^I should be taken to the account summary page$/, () => {
        return client

        .waitForElementVisible(ref.acc_pageheader_class.selector,constants.timeout_median)
    })

    Given(/^I login to my account ?(.*?)$/, (accountInformation) => {

        console.log(accountInformation)

        run('When I click on the account button')
        run('Then I should be taken to the login page')

        if(Boolean(accountInformation))
            run('When I submit my login information ' + accountInformation + '')
        else
            run('When I submit my login information')

        run('I should be taken to the account summary page')

        return client
    })