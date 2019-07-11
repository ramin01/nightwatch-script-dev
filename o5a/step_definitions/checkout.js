const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

    /****************************************************************************************************/
    /*
    Description: Enter either domestic or international shipping information
    Optional Variable(s): varsContext
    Acceptable Use:
        I submit my shipping information
        I submit my shipping information INTL
    Note(s):
        This is a temporary way of switching the country context. Ideally the test should set a context
        variable that changes which constants are imported
    */
    /****************************************************************************************************/
    When(/^I submit my shipping information ?(.*?)$/, (varsContext) => {
        if(varsContext === 'INTL'){
            var address_line1 = constants.checkout_addressStreetINTL_optionC
            var city = constants.checkout_cityINTL_optionC
            var zipOrPostalCode = constants.checkout_zipINTL_optionC
            var stateOrProvinceSelector = ref.checkout_stateINTL_optionA_css.selector
        }
        else{
            var address_line1 = constants.checkout_addressStreet_optionC
            var city = constants.checkout_city_optionC
            var zipOrPostalCode = constants.checkout_zip_optionC
            var stateOrProvinceSelector = ref.checkout_state_optionC_css.selector
        }

        return o5aPageObj

        .setValue('@checkout_fristName_css', constants.checkout_firstName)
        .setValue('@checkout_lastName_css', constants.checkout_lastName)
        .setValue('@checkout_address1_css', address_line1)
        .setValue('@checkout_city_css', city)
        .click(stateOrProvinceSelector) //state value preselected in pageOjb.js
        .setValue('@checkout_zipCode_css', zipOrPostalCode)
        .setValue('@checkout_email_css', constants.username)
        .setValue('@checkout_phone_css', constants.checkout_phone_optionC)
        .click('@checkout_addressFormCont_btn')
    })

    Then(/^My shipping information is accepted$/, () => {
        return o5aPageObj
        .waitForElementVisible('@checkout_shipping_checkmark_class', constants.timeout_median)
    })
    
    /************************** Changing shipping information *****************************************/
    When(/^I change my shipping address$/, () => {
        return o5aPageObj
        .waitForElementVisible('@checkout_shippingChange_btn', constants.timeout_median)
        .click('@checkout_shippingChange_btn')
        .waitForElementVisible('@checkout_shippingSecondaryAddress_btn', constants.timeout_median)
        .click('@checkout_shippingSecondaryAddress_btn')
        .setValue('@checkout_fristName_css', constants.checkout_firstNameB)
        .setValue('@checkout_lastName_css', constants.checkout_lastNameB)
        .setValue('@checkout_address1_css', constants.checkout_addressStreet_optionB)
        .setValue('@checkout_city_css', constants.checkout_city_optionB)
        .click('@checkout_state_optionB_css') //state value preselected in pageOjb.js
        .setValue('@checkout_zipCode_css', constants.checkout_zip_optionB)
        .setValue('@checkout_phone_css', constants.checkout_phone_optionB)
        .click('@checkout_addressFormCont_btn')
    })
        
    Then(/^My new shipping information is accepted$/, () => {
        return o5aPageObj
        .waitForElementVisible('@checkout_shipping_checkmark_class', constants.timeout_median)
    })

    /************************** Submit payment information *****************************************/
    When(/^I submit my payment information$/, () => {
        return o5aPageObj
        .waitForElementVisible('@checkout_ccNumber_css', constants.timeout_median, true)
        .setValue('@checkout_ccNumber_css', constants.checkout_ccNumber_optionA)
        .setValue('@checkout_expDate_css', constants.checkout_expDate)
        .setValue('@checkout_CVC_css', constants.checkout_CVC3digits)
        .setValue('@checkout_ccName_css', constants.checkout_ccName)
        .click('@checkout_paymentFormCont_btn')
    })

    Then(/^My payment information is accepted$/, () => {
        return o5aPageObj

        .waitForElementVisible('@checkout_payment_checkmark_class', constants.timeout_median)
    })
    /******************************** Change Billing Information **********************************************/
    When(/^I change my billing information$/, () => {
        return o5aPageObj
        .waitForElementVisible('@checkout_changeBillingAddress', constants.timeout_median)
        .click('@checkout_changeBillingAddress')
        .waitForElementVisible('@checkout_addNewBillingAddress_css', constants.timeout_median)
        .click('@checkout_addNewBillingAddress_css')
        
        .setValue('@checkout_fristName_css', constants.checkout_firstNameB)
        .setValue('@checkout_lastName_css', constants.checkout_lastNameB)
        .setValue('@checkout_address1_css', constants.checkout_addressStreet_optionB)
        .setValue('@checkout_city_css', constants.checkout_city_optionB)
        .click('@checkout_state_optionB_css') //state value preselected in pageOjb.js
        .setValue('@checkout_zipCode_css', constants.checkout_zip_optionB)
        .setValue('@checkout_phone_css', constants.checkout_phone_optionB)
        .click('@checkout_addressFormCont_btn')
        
    })

    Then(/^My new billing information is accepted$/, () => {
        return o5aPageObj
        .waitForElementVisible('@checkout_ccRadioButton', constants.timeout_median)
        .click('@checkout_paymentFormCont_btn')
    })
    
    /****************************************************************************************************/
    /*
    Description: Add promo code in checkout
    Optional Variable(s): newPromoCode
    Acceptable Use:
        I enter a promo code and click Apply
        I enter a promo code SHIP99 and click Apply
    Note(s):
        Promo code is optional. Use whatever promo code instead of SHIP99 if desired.
    */
    /****************************************************************************************************/
    When(/^I enter a promo code ?(.*?) and click Apply$/, (newPromoCode) => {

        var promoCode = constants.promoCode_optionB

        if(Boolean(newPromoCode))
            promoCode = newPromoCode
            
        return o5aPageObj

        .waitForElementVisible('@checkout_promoCodeDropDown', constants.timeout_median)
        .click('@checkout_promoCodeDropDown')
        .waitForElementVisible('@checkout_promoCode', constants.timeout_median)
        .setValue('@checkout_promoCode', promoCode)
        .waitForElementVisible('@checkout_promoCodeApply', constants.timeout_median)
        .click('@checkout_promoCodeApply')
    })
    
    Then(/^My promo code is accepted$/, () => {
        return o5aPageObj
        .waitForElementVisible('@checkout_promoCodeAccept', constants.timeout_median)

})

    /******************************** Place order **********************************************/
    When(/^I place my order$/, () => {
        return o5aPageObj

        .waitForElementVisible('@checkout_placeOrder_btn', constants.timeout_median)
        .click('@checkout_placeOrder_btn')
    })

    Then(/^I should be redirected to the thank you page$/, () => {
        return o5aPageObj

        .waitForElementVisible('@thankyou_header_class', constants.timeout_median)
        .waitForElementVisible('@thankyou_orderNumber_css', constants.timeout_median)
        .getText('@thankyou_orderNumber_css', function (result) {
            console.log('Order #: ' + result.value)
        })
    })
    
    /******************************** Open Gift Card Field **********************************************/
    When(/^I click on Apply Gift Card$/, () => {
        return o5aPageObj
        .click('@giftcardfield')
      })

    Then(/^the gift card number field appears$/, () => {
        return o5aPageObj
        .waitForElementVisible('@giftcardnumber', constants.timeout_median)
    })

    /******************************** Enter Gift Card **********************************************/
    When(/^I submit a gift card number and pin/, () => {
        return o5aPageObj
        .setValue ('@giftcardnumber', constants.giftcardnumber)
        .setValue ('@giftcardpin', constants.giftcardpin)

      })
   Then(/^I should click Apply$/, () => {
       return o5aPageObj
       .click('@giftcardapply')
       .waitForElementPresent('@checkout_placeOrder_btn', constants.timeout_median)
   })

   /********************************  Gift Wrap **********************************************/

    When(/^I gift wrap an item$/, () => {
       return o5aPageObj
       .click('@makethisagift')
       .waitForElementPresent('@giftwrapname', constants.timeout_median)
       .setValue ('@giftwrapname', constants.giftwrapnameA)
       .setValue ('@giftwrapmessage', constants.giftwrapmessageA)
       .click('@giftwrapapply')
     })

     Then(/^I should be brought back to the checkout page$/, () => { 
       return o5aPageObj
       .waitForElementNotPresent('@giftWrapOverlay', constants.timeout_min)
       .waitForElementVisible('@checkout_placeOrder_btn', constants.timeout_median)
     })

     /******************************** Changing Shipping Method **********************************************/
     When(/^I click on a new shipping method/, () => {
        return o5aPageObj
        .waitForElementVisible('@checkout_shippingMethod_Rush', constants.timeout_median)
        .click('@checkout_shippingMethod_Rush')
      })

      Then(/^I should see the radio button selected and the correct shipping price/, () => { 
        return client
        .pause(5000)
        .assert.containsText(ref.orderSummary_shippingCharge_css.selector, constants.shippingCharge_rush)
        
      })
