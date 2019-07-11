const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const bayPageObj = client.page.bayPageObj()

var references = require('../page_objects/bayPageObj')
var ref = references.elements
var {bayConstants : constants} = client.globals

    /****************** Set AB test cookies to their default values **************************************/
    When(/^I set some AB tests to their default values$/, () => {
        return client

        .deleteCookie('hbc-optim-saksHomepage')
        .setCookie({ name: 'hbc-optim-saksHomepage', value: 'not-in-test', path: '/' })

        .deleteCookie('hbcviswc')
        .setCookie({ name: 'hbcviswc', value: 'false', path: '/' })

        .deleteCookie('pa_type')
        .setCookie({ name: 'pa_type', value: 'A', path: '/' })

        .refresh()
        .pause(constants.timeout_min)
    })