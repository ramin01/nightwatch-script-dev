const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

    /****************** search by web id *********************************************************/
    When(/^I enter the URL$/, () => {
        return client

        .url(constants.qaUrl)
        .pause(constants.timeout_min/2) //Initial pause prevents a lot of test hangups
    })

    Then(/^I should be taken to the site$/, () => {
        return client

        .elements('css selector','#saksOverlay', results => {
        if(results.value.length > 0)
        client.click('#saksOverlay')
    })
        client
        .waitForElementPresent('body', constants.timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
        .assert.title(constants.homepageTitle)
    })

    /*
    Description: This given will take you to the QA site in one step.

    Note: Removing AB tests is integrated into this to ensure consistent testing. Responsive product array for some
    reason still turns on, but theres not much I can do to fix that.
    */
    Given(/^I am on the website$/, () => {

        run('When I enter the URL')
        run('And I set some AB tests to their default values')
        run('Then I should be taken to the site')

        return client
    })