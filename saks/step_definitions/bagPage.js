const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const saksPageObj = client.page.saksPageObj()

var references = require('../page_objects/saksPageObj')
var ref = references.elements
var {saksConstants : constants} = client.globals

    /************************** Proceed to checkout as unregistered user *****************************************/
    When(/^I proceed to checkout as an unregistered user$/, () => {
        return saksPageObj
        .waitForElementVisible('@bag_checkout_class', constants.timeout_median)
        .click('@bag_checkout_class')
        .waitForElementVisible('@bag_loginGuestCheckout_btn', constants.timeout_median)
        .click('@bag_loginGuestCheckout_btn')
    })

    Then(/^I should be taken to checkout as an unregistered user$/, () => {
        return saksPageObj
        .waitForElementVisible('@checkout_fristName_css', constants.timeout_median)
    })
    
    Then(/^I should be placed taken to checkout as an unregistered BOPIS user$/, () => {
        return saksPageObj
        .waitForElementVisible('@checkout_bopis_fristName_css', constants.timeout_median)
    })        

    /************************** Proceed to checkout as registered user *****************************************/
    When(/^I proceed to checkout as a registered user$/, () => {
        return client
        .waitForElementVisible(ref.bag_checkout_class.selector, constants.timeout_median)
        .click(ref.bag_checkout_class.selector)
        .waitForElementVisible(ref.bag_emailEntry_css.selector, constants.timeout_median)
        .setValue(ref.bag_emailEntry_css.selector, constants.defaultEmail)
        .setValue(ref.bag_passwordEntry_css.selector, constants.defaultPassword)
        .click(ref.bag_loginCheckout_btn.selector)
    })

    Then(/^I should be taken to checkout as a registered user$/, () => {
        return client
        .waitForElementVisible(ref.checkout_shipping_checkmark_class.selector, constants.timeout_median)

    })
    

    /************************** BOPIS at Bag *****************************************/

    When(/^I select BOPIS on the bag page and enter a zip code ?(.*?)$/, (newbOPISZipCode) => {
        var bOPISZipCode = constants.bopis_zip

          if(Boolean(newbOPISZipCode))
              bOPISZipCode = newbOPISZipCode

        return saksPageObj
        .waitForElementVisible('@bag_bopisRadioButton', constants.timeout_median)
        .click ('@bag_bopisRadioButton') //This is using a selector with a child, is there a better way to select?
        .waitForElementVisible('@bag_bopisZipCodeField', constants.timeout_median)
        .setValue('@bag_bopisZipCodeField', bOPISZipCode)
        .waitForElementVisible('@bag_bopisZipCodeSubmit', constants.timeout_median)
        .click('@bag_bopisZipCodeSubmit')
        .api.pause(5000)
    })

    Then(/^I should select the closet store$/, () => {
        return saksPageObj
        .waitForElementVisible('@bag_bopisPickUpAtThisStore', constants.timeout_median)
        .click('@bag_bopisPickUpAtThisStore') //Also uses child
        .api.pause(5000)
    })

  /************************** Promo at Bag *****************************************/
    When(/^I add a promo code on the bag page$/, () => {
        return saksPageObj
        .waitForElementVisible('@bag_promoOnBag', constants.timeout_median)
        .click('@bag_promoOnBag')
        .waitForElementVisible('@bag_promoFieldOnBag', constants.timeout_median)
        .setValue('@bag_promoFieldOnBag', constants.promoCode_optionC)
        .waitForElementVisible('@promo_apply_btn', constants.timeout_median)
        .click('@promo_apply_btn')
    })
  
    Then(/^My promo code should be accepted$/, () => {
        return saksPageObj
        .waitForElementVisible('@bag_promoDisplayOnBag', constants.timeout_median)
      
    })
  /******************************** Save For Later at Bag *****************************************/
    When(/^I click Save For Later on an item in bag$/, () => {
        return saksPageObj
        .waitForElementVisible('@bag_saveForLaterLink', constants.timeout_median)
        .click('@bag_saveForLaterLink')
        .api.pause(2000) 
    })
        
    Then(/^I should see the item added to the Save For Later tab$/, () => {
        return saksPageObj
        .waitForElementVisible('@bag_saveForLaterActive', constants.timeout_median)
        .assert.containsText('@bag_saveForLaterActive', constants.bag_SaveForLaterCopy)
    })       
              
    When(/^I click Move to bag on an item in Save For Later$/, () => {
        return saksPageObj
        .waitForElementVisible('@bag_saveForLaterLink', constants.timeout_median)
        .click('@bag_saveForLaterLink') 
        .api.pause(2000)
    })

      Then(/^I should see the item back to Bag tab$/, () => {
        return saksPageObj
        .waitForElementVisible('@bag_header_css',constants.timeout_median)
        .assert.containsText('@bag_header_css', constants.bag_BagCopy)
    })   