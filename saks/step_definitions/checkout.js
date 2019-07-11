const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const saksPageObj = client.page.saksPageObj()

var references = require('../page_objects/saksPageObj')
var ref = references.elements
var {saksConstants : constants} = client.globals


/******************************** Submit BOPIS Information **********************************************/
      When(/^I submit my BOPIS information in checkout$/, () => {
          return saksPageObj
        .waitForElementVisible('@checkout_bopis_fristName_css', constants.timeout_median)
        .setValue('@checkout_bopis_fristName_css', constants.checkout_bopis_firstName)
        .setValue('@checkout_bopis_lastName_css', constants.checkout_bopis_lastName)
        .setValue('@checkout_bopis_email_css', constants.checkout_bopis_email)
        .waitForElementVisible('@checkout_bopis_textMe', constants.timeout_median)
        .click('@checkout_bopis_textMe')
        .waitForElementVisible('@checkout_bopis_phone', constants.timeout_median)
        .setValue('@checkout_bopis_phone', constants.checkout_bopis_phone)
        .waitForElementVisible('@checkout_bopis_save', constants.timeout_median)
        .click('@checkout_bopis_save')
        })    

      Then(/^My BOPIS information is accepted$/, () => {
          return saksPageObj
        .waitForElementVisible('@checkout_ccNumber_css', constants.timeout_median)
      })

      When(/^I submit my BOPIS payment information$/, () => {
          return saksPageObj
          
          .setValue('@checkout_ccNumber_css', constants.checkout_ccNumber_optionA)
          .setValue('@checkout_expDate_css', constants.checkout_expDate)
          .setValue('@checkout_CVC_css', constants.checkout_CVC3digits)
          .setValue('@checkout_ccName_css', constants.checkout_ccName)
          .click('@checkout_add_BillingAddress_btn')
          .waitForElementVisible('@checkout_fristName_css', constants.timeout_median)
          .setValue('@checkout_fristName_css', constants.checkout_firstName)
          .setValue('@checkout_lastName_css', constants.checkout_lastName)
          .setValue('@checkout_address1_css', constants.checkout_addressStreet_optionA)
          .setValue('@checkout_city_css', constants.checkout_city_optionA)
          .click('@checkout_state_optionB_css') //state value preselected in pageOjb.js
          .setValue('@checkout_zipCode_css', constants.checkout_zip_optionA)
          .setValue('@checkout_phone_css', constants.checkout_phone_optionC)
          .waitForElementVisible('@checkout_add_BillingAddressSave_btn', constants.timeout_median)
          .click('@checkout_add_BillingAddressSave_btn')
          .waitForElementVisible('@checkout_paymentSaveAndContinue', constants.timeout_median)
          .click('@checkout_paymentSaveAndContinue')
          })
          
    Then(/^My BOPIS payment information is accepted$/, () => {
          return saksPageObj
          .waitForElementVisible('@checkout_payment_checkmark_class', constants.timeout_median)
        
          })
          
          
    /************************** Submit shipping information *****************************************/
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

        return saksPageObj

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
        return saksPageObj

        .waitForElementVisible('@checkout_shipping_checkmark_class', constants.timeout_median)
    })

    /************************** Submit payment information *****************************************/
    When(/^I submit my payment information$/, () => {
        return saksPageObj

        .setValue('@checkout_ccNumber_css', constants.checkout_ccNumber_optionA)
        .setValue('@checkout_expDate_css', constants.checkout_expDate)
        .setValue('@checkout_CVC_css', constants.checkout_CVC3digits)
        .setValue('@checkout_ccName_css', constants.checkout_ccName)
        .click('@checkout_paymentFormCont_btn')
    })

    Then(/^My payment information is accepted$/, () => {
        return saksPageObj

        .waitForElementVisible('@checkout_payment_checkmark_class', constants.timeout_median)
    })

    /******************************** Promo on checkout **********************************************/
    When(/^I enter a promo code ?(.*?) and click Apply$/, (newPromoCode) => {

        var promoCode = constants.promoCode_optionC

        if(Boolean(newPromoCode))
            promoCode = newPromoCode
            
        return saksPageObj

        .waitForElementVisible('@checkout_promoCodeDropDown', constants.timeout_median)
        .click('@checkout_promoCodeDropDown')
        .waitForElementVisible('@checkout_promoCode', constants.timeout_median)
        .setValue('@checkout_promoCode', promoCode)
        .waitForElementVisible('@checkout_promoCodeApply', constants.timeout_median)
        .click('@checkout_promoCodeApply')
    })

    Then(/^My promo code is accepted$/, () => {
        return saksPageObj
        .waitForElementVisible('@checkout_promoCodeAccept', constants.timeout_median)
    })
    
    /********************************  Gift Wrap **********************************************/

    When(/^I gift wrap an item$/, () => {
       return saksPageObj
       .click('@makethisagift')
       .waitForElementPresent('@giftwrapname', constants.timeout_median)
       .setValue ('@giftwrapname', constants.giftwrapnameA)
       .setValue ('@giftwrapmessage', constants.giftwrapmessageA)
       .click('@giftwrapapply')
     })

     Then(/^I should be brought back to the checkout page$/, () => { 
       return saksPageObj
       .waitForElementNotPresent('@giftWrapOverlay', constants.timeout_min)
       .waitForElementVisible('@checkout_placeOrder_btn', constants.timeout_median)
     })
     
     /******************************** Open Gift Card Field **********************************************/
     When(/^I click on Apply Gift Card$/, () => {
         return saksPageObj
         .click('@giftcardfield')
       })

     Then(/^the gift card number field appears$/, () => {
         return saksPageObj
         .waitForElementVisible('@giftcardnumber', constants.timeout_median)
     })

     /******************************** Enter Gift Card **********************************************/
     When(/^I submit a gift card number and pin$/, () => {
         return saksPageObj
         .setValue ('@giftcardnumber', constants.giftcardnumber)
         .setValue ('@giftcardpin', constants.giftcardpin)

       })
    Then(/^I should click Apply$/, () => {
        return saksPageObj
        .click('@giftcardapply')
        .waitForElementPresent('@checkout_placeOrder_btn', constants.timeout_median)
    })
    
    /******************************** Place order **********************************************/
    When(/^I place my order$/, () => {
        return saksPageObj
        .waitForElementVisible('@checkout_placeOrder_btn', constants.timeout_median)
        .click('@checkout_placeOrder_btn')
    })

    Then(/^I should be redirected to the thank you page$/, () => {
        return saksPageObj

        .waitForElementVisible('@thankyou_header_class', constants.timeout_median)
        .waitForElementVisible('@thankyou_orderNumber_css', constants.timeout_median)
        .getText('@thankyou_orderNumber_css', function (result) {
            console.log('Order #: ' + result.value)
        })
    })
    
    