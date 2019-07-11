const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const saksPageObj = client.page.saksPageObj()

var references = require('../page_objects/saksPageObj')
var ref = references.elements
var {saksConstants : constants} = client.globals

    When(/^I use masterpass express$/, () => {
        var twoFactorAuthCode

        return client

        .click(ref.masterpass_express_btn.selector)
        .pause(5000)

        .frame('MasterPass_frame')

        .pause(2000)

        .waitForElementVisible(ref.masterpass_login_email_field.selector , constants.timeout_median)

        .setValue(ref.masterpass_login_email_field.selector, 'val')
        .pause(100)
        .setValue(ref.masterpass_login_email_field.selector, 'ida')
        .pause(100)
        .setValue(ref.masterpass_login_email_field.selector, 'tio')
        .pause(100)
        .setValue(ref.masterpass_login_email_field.selector, 'nho')
        .pause(100)
        .setValue(ref.masterpass_login_email_field.selector, 'lde')
        .pause(100)
        .setValue(ref.masterpass_login_email_field.selector, 'rhb')
        .pause(100)
        .setValue(ref.masterpass_login_email_field.selector, 'c@g')
        .pause(100)
        .setValue(ref.masterpass_login_email_field.selector, 'mai')
        .pause(100)
        .setValue(ref.masterpass_login_email_field.selector, 'l.c')
        .pause(100)
        .setValue(ref.masterpass_login_email_field.selector, 'om')
        .click(ref.masterpass_email_continue_btn.selector)

        .pause(5000)
        .frame('wallet')

        .waitForElementVisible(ref.masterpass_login_password_field.selector, constants.timeout_median)
        .setValue(ref.masterpass_login_password_field.selector, 'Welcome1234!')
        .click(ref.masterpass_password_continue_btn.selector)

        .waitForElementVisible(ref.masterpass_auth_field.selector, constants.timeout_median)
        .waitForElementVisible(ref.masterpass_send_email_link.selector, constants.timeout_median)
        .click(ref.masterpass_send_email_link.selector)

        .execute(function() {
                    window.open('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
        })

        .pause(5000)
        .windowHandles(function (result) {
        var temp = result.value[1]
        this.switchWindow(temp)
        })

        .waitForElementVisible('#identifierId', constants.timeout_median)
        .setValue('#identifierId', 'validationholderhbc@gmail.com')
        .click('#identifierNext')

        .waitForElementVisible('input[type="password"]', constants.timeout_median)
        .setValue('input[type="password"]', 'TestAccount1234!')
        .click('#passwordNext')

        .waitForElementVisible('div[style="position: relative; min-height: 100%;"] > div:nth-child(3) > div > div:nth-child(2) > div > div > div > div> div > div > div> div:nth-child(2) > div > div > div > div:nth-child(5)', constants.timeout_median)
        .click('div[style="position: relative; min-height: 100%;"] > div:nth-child(3) > div > div:nth-child(2) > div > div > div > div> div > div > div> div:nth-child(2) > div > div > div > div:nth-child(5)')

        .waitForElementVisible('div[style="position: relative; min-height: 100%;"] > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(3) > div > div > table > tbody > tr', constants.timeout_median)
        .click('div[style="position: relative; min-height: 100%;"] > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(3) > div > div > table > tbody > tr')

        //.pause()
        .waitForElementVisible('p[style="Margin:0;Margin-bottom:10px;color:#4a4a4a;font-family:Helvetica,Arial,sans-serif;font-size:12px;font-weight:normal;line-height:18px;margin:0;margin-bottom:10px;padding:0;text-align:left"]', constants.timeout_median)
        .getText('p[style="Margin:0;Margin-bottom:10px;color:#4a4a4a;font-family:Helvetica,Arial,sans-serif;font-size:12px;font-weight:normal;line-height:18px;margin:0;margin-bottom:10px;padding:0;text-align:left"]', function (result) {
            twoFactorAuthCode = result.value.substring(83,89)
            console.log('Text: ' + twoFactorAuthCode)
        })

        .waitForElementVisible('div[style="position: relative; min-height: 100%;"] > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(3) > div > div > div:nth-child(2) > div:nth-child(3) > div', constants.timeout_median)
        .click('div[style="position: relative; min-height: 100%;"] > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(3) > div > div > div:nth-child(2) > div:nth-child(3) > div')

        .windowHandles(function (result) {
        var temp = result.value[0]
        this.switchWindow(temp)
        })

        .pause(1000)
        .frame(null)
        .frame('MasterPass_frame')
        .frame('wallet')

        .perform(function () {
            client
            .waitForElementVisible('#formly_3_input_uniqueCode_0', constants.timeout_median)
            .setValue('#formly_3_input_uniqueCode_0', twoFactorAuthCode)
            .click('button[data-automation="continue"]')
        })


        .waitForElementVisible('button[data-automation="opt-in"]', constants.timeout_median)
        .click('button[data-automation="opt-in"]')
    })
