const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

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

