const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

    /****************************************************************************************************/
    /*
    Description: Add promo code in bag
    Optional Variable(s): newPromoCode
    Acceptable Use:
        I add a promo code on the bag page
        I add a promo code SHIP99 on the bag page
    Note(s):
        Promo code is optional. Use whatever promo code instead of SHIP99 if desired.
    */
    /****************************************************************************************************/
    When(/^I add a promo code ?(.*?) on the bag page$/, (newPromoCode) => {
      
        var promoCode = constants.promoCode_optionB

        if(Boolean(newPromoCode))
          promoCode = newPromoCode      
                  
        return o5aPageObj
        .waitForElementVisible('@bag_promoOnBag', constants.timeout_median)
        .click('@bag_promoOnBag')
        .setValue('@bag_promoFieldOnBag', promoCode)
        .waitForElementVisible('@bag_promoAcceptOnBag', constants.timeout_median)
        .click('@bag_promoAcceptOnBag')
    })

    Then(/^My promo code should be accepted$/, () => {
        return o5aPageObj
        .waitForElementVisible('@bag_promoDisplayOnBag', constants.timeout_median)
    })
    
    /************************** Proceed to checkout as unregistered user *****************************************/
    When(/^I proceed to checkout as an unregistered user$/, () => {
        return o5aPageObj
        .waitForElementVisible('@bag_checkout_class', constants.timeout_median, true)
        .click('@bag_checkout_class')
        .waitForElementVisible('@bag_loginGuestCheckout_btn', constants.timeout_median, true)
        .click('@bag_loginGuestCheckout_btn')
    })

    Then(/^I should be taken to checkout as an unregistered user$/, () => {
        return o5aPageObj
        .waitForElementVisible('@checkout_fristName_css', constants.timeout_median)
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
    
    /******************** Promo code from bag should appear in checkout *****************************************/
    Then(/^The promo should appear in checkout page$/, () => {
        return o5aPageObj
        .waitForElementVisible('@checkout_promoCodeAccept', constants.timeout_median)
    })
    
    /******************************** Save For Later at Bag *****************************************/
    When(/^I click Save For Later on an item in bag$/, () => {
        return o5aPageObj
        .waitForElementVisible('@bag_saveForLaterLink', constants.timeout_median)
        .click('@bag_saveForLaterLink')  
        .api.pause(1000)
    })

     Then(/^I should see the item added to the Save For Later tab$/, () => {
        return o5aPageObj
        .waitForElementVisible('@bag_saveForLaterActive', constants.timeout_median)
        .assert.containsText('@bag_saveForLaterActive', constants.bag_SaveForLaterCopy)
    })       

    When(/^I click Move to bag on an item in Save For Later$/, () => {
        return o5aPageObj
        .waitForElementVisible('@bag_saveForLaterLink', constants.timeout_median)
        .click('@bag_saveForLaterLink') 
        .api.pause(1000)
    })

     Then(/^I should see the item back to Bag tab$/, () => {
        return o5aPageObj
        .waitForElementVisible('@bag_header_css',constants.timeout_median)
        .assert.containsText('@bag_header_css', constants.bag_BagCopy)
    })