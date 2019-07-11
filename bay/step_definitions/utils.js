const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const bayPageObj = client.page.bayPageObj()

var references = require('../page_objects/bayPageObj')
var ref = references.elements
var {bayConstants : constants} = client.globals

    /******************************** Refresh page **********************************************/
    When(/^I refresh the page$/, () => {
        return client

        .refresh();
        client.pause(constants.timeout_min)
    })

    /******************************** Delete all cookies **********************************************/
    When(/^I clear all cookies$/, () => {
        return client

        .deleteCookies()
    })

    /****************** Set individual cookie to a specified value ********************************/
    When(/^I set this cookie (.*?)$/, (cookieInfo) => {

        cookieInfo = cookieInfo.split(';')

        var cookieName = cookieInfo[0]
        var cookieValue = cookieInfo[1]

        return client

        .deleteCookie(cookieName)
        .setCookie({ name: cookieName, value: cookieValue, path: '/'})
    })

    /****************** End session to allow running groups better ********************************/
    When(/^I end my session$/, () => {
        return client

        .end()
        .pause(1000)
    })

    /****************** Pausing test for better troubleshooting/test writing ********************************/
    When(/^I pause the test ?(.*?)$/, (pauseTime) => {

        if(!Boolean(pauseTime))
            pauseTime = undefined

        return client

        .pause(pauseTime)
    })
    
    /****************** Switch NightWatch's focus to specified tab ********************************/
    When(/^I switch Nightwatch focus to this tab (.*?)$/, (requestedTabNumber) => {

        return client

        .windowHandles(function (result) {
            var temp = result.value[requestedTabNumber]
            this.switchWindow(temp)
        })
    })