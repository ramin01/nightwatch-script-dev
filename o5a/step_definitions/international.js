const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

    When(/^I click on the ship to button$/, () => {
        return client

        .waitForElementVisible(ref.intl_ship_to.selector, constants.timeout_median, true)
        .click(ref.intl_ship_to.selector)
    })

    Then(/^I should see the context chooser$/, () => {
        return client

        .waitForElementVisible(ref.intl_contextChooser_css.selector, constants.timeout_median)
    })

    When(/^I enter a country (.*?)$/, (countryCode) => {

        var countryDropdownSelector = ref.country_dropdown.selector.replace('$countryCode', countryCode)
        var countryFlag = ref.country_flag.selector.replace('$countryCode', countryCode)

        return client

        .waitForElementVisible(countryDropdownSelector, constants.timeout_median)
        .click(countryDropdownSelector)
        .waitForElementVisible(ref.intl_contextChooser_btn.selector, constants.timeout_median)
        .click(ref.intl_contextChooser_btn.selector)

        .waitForElementPresent(countryFlag, constants.timeout_min)
    })

    Then(/^I shouldnt see the context chooser anymore$/, () => {
        return client

        .waitForElementNotPresent(ref.intl_contextChooser_btn.selector, constants.timeout_median)
    })

    When(/^I close the international welcome mat$/, () => {
        return client

        .waitForElementVisible(ref.intl_welcomemat_btn.selector, constants.timeout_median)
        .click(ref.intl_welcomemat_btn.selector)
    })

    Then(/^I shouldnt see the welcome mat anymore$/, () => {
        return client

        .waitForElementNotPresent(ref.intl_welcomemat_css.selector, constants.timeout_median)
    })

    /****************************************************************************************************/
    /*
    Description: Switch countries. By default this will switch to Canada
    Optional Variable(s): newCountryCode
    Acceptable Use:
        I switch my country
        I switch my country BR
    Note(s):
        Use the country code that you want (unless its CA, then you can just use the default)
    */
    /****************************************************************************************************/
    Given(/^I switch my country ?(.*?)$/, (newCountryCode) => {

        var countryCode = 'CA'

        if(Boolean(newCountryCode))
            countryCode = newCountryCode

        run('When I click on the ship to button')
        run('Then I should see the context chooser')
        run('When I enter a country ' + countryCode + '')
        run('Then I shouldnt see the context chooser anymore')

        if(countryCode !== 'US'){
            run('When I close the international welcome mat')
            run('Then I shouldnt see the welcome mat anymore')
        }

        return client
    })