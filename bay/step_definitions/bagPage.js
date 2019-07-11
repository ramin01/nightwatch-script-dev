const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const bayPageObj = client.page.bayPageObj()

var references = require('../page_objects/bayPageObj')
var ref = references.elements
var {bayConstants : constants} = client.globals

    /************************** Proceed to checkout as unregistered user *****************************************/
    When(/^I proceed to checkout as an unregistered user$/, () => {
        return client
        .waitForElementPresent(ref.bag_checkout_class.selector, constants.timeout_median, true)
        .click(ref.bag_checkout_class.selector)
        .waitForElementPresent(ref.bag_loginGuestCheckout_btn.selector, constants.timeout_median, true)
        .click(ref.bag_loginGuestCheckout_btn.selector)
    })

    Then(/^I should be taken to checkout as an unregistered user$/, () => {
        return client

        .waitForElementPresent(ref.checkout_firstName_css.selector, constants.timeout_min, true)
    })
    
    Then(/^I should be placed taken to checkout as an unregistered BOPIS user$/, () => {
        return bayPageObj
            .waitForElementPresent('@checkout_SB_bill_firstName_css', constants.timeout_median)
    })        

    /************************** Proceed to checkout as registered user *****************************************/
        When(/^I proceed to checkout as a registered user$/, () => {
            return client
          .waitForElementVisible(ref.bag_checkout_class.selector, constants.timeout_median)
          .click(ref.bag_checkout_class.selector)
          .waitForElementVisible(ref.bag_emailEntry_css.selector, constants.timeout_median)
          .setValue(ref.bag_emailEntry_css.selector, constants.username2)
          .setValue(ref.bag_passwordEntry_css.selector, constants.password)
          .click(ref.bag_loginCheckout_btn.selector)            
        })

         Then(/^I should be taken to checkout as a registered user$/, () => {
            return client
          .waitForElementVisible(ref.checkout_SB_navTab_css.selector, constants.timeout_median)
        })

    /************************** BOPIS at Bag *****************************************/

    When(/^I select BOPIS on the bag page and enter a zip code ?(.*?)$/, (newbOPISZipCode) => {
        var bOPISZipCode = constants.BOPIS_zipcode

          if(Boolean(newbOPISZipCode))
              bOPISZipCode = newbOPISZipCode

        return bayPageObj
          .waitForElementPresent('@bag_bopisRadioButton', constants.timeout_median)
          .click ('@bag_bopisRadioButton') //This is using a selector with a child, is there a better way to select?
          .waitForElementPresent('@bag_bopisZipCodeField', constants.timeout_median)
          .setValue('@bag_bopisZipCodeField', bOPISZipCode)
          .waitForElementPresent('@bag_bopisZipCodeSubmit', constants.timeout_median)
          .click('@bag_bopisZipCodeSubmit')
          .waitForElementPresent('@bag_bopisPickUpAtThisStore', constants.timeout_median)
        })

    Then(/^I should select the closet store$/, () => {
        return bayPageObj
          .waitForElementPresent('@bag_bopisPickUpAtThisStore', constants.timeout_median)
          .click('@bag_bopisPickUpAtThisStore') //Also uses child
          .waitForElementPresent('@bag_bopisStoreAccept', constants.timeout_median)
          .click('@bag_bopisStoreAccept')
          .waitForElementNotPresent('@bag_bopisOverlay', constants.timeout_median)
        })
