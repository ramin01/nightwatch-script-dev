module.exports = {
    /*********** CHECKOUT ************************************************************************************/
    checkout_shippingAddress_class :{
        selector : '.hbc-checkout__address',
    },
    checkout_paymentInfo_class :{
        selector : '.hbc-checkout__payment-info',
    },
    checkout_placeOrder_btn :{
        selector : '.hbc-checkout__checkout-btn',
    },
    checkout_lineItemDesc_class :{
        selector : '.hbc-cart-item__short-desc',
    },
    checkout_addressEdit_class :{
        selector : '.hbc-checkout__address-add-edit',
    },
    checkout_existingAddress_css :{
        selector : 'div.hbc-checkout__address-add-edit > div:nth-child(2) > div',
    },
    checkout_promoLineItem_class :{
        selector : '.hbc-cart-item__promo-code-label',
    },
    checkout_addressFormCont_btn :{
        selector : '.address-form__submit-button',
    },

    checkout_promoCodeDropDown :{
        selector: '#main > div > div > div > div.hbc-checkout__extra-sections > div.hbc-checkout__promo-wrapper > div'
    },
    
    checkout_promoCode :{
        selector: '#promo-code-number'
    },
    checkout_promoCodeApply:{
        selector: '#main > div > div > div > div.hbc-checkout__extra-sections > div.hbc-checkout__promo-wrapper > div > div > div> div > div > form > div.hbc-promo-code__submit-btn-wrapper > button'
    },

    checkout_promoCodeAccept:{
        selector: '#main > div > div > div > div.hbc-checkout__extra-sections > div.hbc-checkout__promo-wrapper > div > div > div > div > div > div > ul > li'
    },
    
    giftcardfield :{
        selector: '#main > div > div > div > div.hbc-checkout__extra-sections > div.hbc-checkout__gift-card-form > div'
    },

    giftcardnumber :{
        selector: '#gift-card-number'
    },
    giftcardpin :{
      selector: '#gift-card-pin'
    },

    giftcardapply :{
      //selector: '#uipanel__1556661162221--content > div > form > div.hbc-gift-card__submit-btn-wrapper > button',
      selector: '#main > div > div > div > div.hbc-checkout__extra-sections > div.hbc-checkout__gift-card-form > div > div > div > div > form > div.hbc-gift-card__submit-btn-wrapper > button'
    },

    /*************************************Gift Wrap**********************************/

    makethisagift :{
      selector: '#main > div > div > div > div.hbc-checkout__bag-wrapper > div > div > div > div > div > ul > li > span'
    },

    giftwrapname :{
      selector: '#hbc-gift-option-gift-recipient'
    },

    giftwrapmessage :{
      selector: '#hbc-gift-option-gift-message'

    },

    giftwrapapply :{
      selector: 'body > div > div > div.hbc-modal__dialog > div > div > form > div.upsert-gift-option-form__form-row--button > button'
    },

    giftWrapOverlay:{
        selector: 'div[class="gift-option-dialog-modal hbc-modal hbc-modal--enter hbc-modal--full-width hbc-modal--fade-animation"]'
      
    },

    /*SHIPPING ADDRESS*/
    checkout_fristName_css :{
        selector : '#given-name',
    },
    checkout_lastName_css :{
        selector : '#family-name',
    },
    checkout_address1_css :{
        selector : '#address',
    },
    checkout_city_css :{
        selector : '#address-level2',
    },
    checkout_zipCode_css :{
        selector : '#postal-code',
    },
    checkout_phone_css :{
        selector : '#tel',
    },
    checkout_email_css :{
        selector : '#address-form-email',
    },
    checkout_state_optionA_css :{ //virginia
        selector : 'div.drop-down-menu.address-form__state > div > select > option:nth-child(51)',
    },
    checkout_state_optionB_css :{ //NJ
        selector : 'div.drop-down-menu.address-form__state > div > select > option:nth-child(33)',
    },
    checkout_state_optionC_css : { //NY
        selector : 'div.drop-down-menu.address-form__state > div > select > option:nth-child(35)',
    },
    checkout_stateINTL_optionA_css :{ //ONATARIO
        selector : 'div.drop-down-menu.address-form__state > div > select > option:nth-child(10)',
    },
    checkout_addressCont_btn :{
        selector : '.hbc-checkout__shipping-address-save-button',
    },
    checkout_shippingChange_btn :{
        selector : 'div:nth-child(1) > div > h1 > span.hbc-checkout__change-btn',
    },
    checkout_shippingSecondaryAddress_btn :{
        selector: '#main > div > div > div > div.hbc-checkout__steps > div:nth-child(1) > div > div > div > div.hbc-checkout__address-add-edit > button'
    },
    
    checkout_shippingAddressLine1_css :{
        selector : 'div.hbc-checkout__steps > div:nth-child(1) > div > div > div > div > span:nth-child(2)',
    },
    checkout_shippingCityStateZip_css :{
        selector : 'div:nth-child(1) > div > div > div > div > span:nth-child(3)',
    },
    checkout_addNewShippingAddress_class :{
        selector : '.hbc-checkout__address-list--add-address',
    },
    checkout_shipping_checkmark_class :{
        selector : '#main > div > div > div > div.hbc-checkout__steps > div:nth-child(1) > div > h1 > span.hbc-icon.hbc-icon--check-circle.hbc-checkout__step-check',
    },





    /*PAYMENT METHOD & BILLING*/
    checkout_ccRadioButton :{
        selector: '#tab-group > div.tab-labels-container > ul > li.tab-label.tab-label--radio.tab-label--active'
    },
    checkout_addPayment_class :{
        selector : '.hbc-checkout__add-payment',
    },
    checkout_ccNumber_css :{
        selector : '#ccnumber',
    },
    checkout_expDate_css :{
        selector : '#month',
    },
    checkout_CVC_css :{
        selector : '#cvc',
    },
    checkout_ccCVC_css :{
        selector : '#credit-card-cvc',
    },
    checkout_ccName_css :{
        selector : '#nameoncard',
    },
    checkout_paymentFormCont_btn :{
        selector : '.hbc-checkout__page-submit-button',
    },
    checkout_paymentCont_btn :{
        selector : 'div.tab-panel.tab-panel--active.tab-panel--radio > div > div.hbc-checkout__btn-wrapper > button',
    },
    checkout_paymentChange_btn :{
        selector : 'div:nth-child(2) > div > h1 > span.hbc-checkout__change-btn',
    },
    checkout_paymentEdit_class :{
        selector : '.hbc-checkout__add-edit',
    },
    checkout_addNewCC_css :{
        selector : ' div.tab-panel.tab-panel--active.tab-panel--radio > div > div.hbc-checkout__add-edit > button',
    },
    checkout_existingCC_css :{
        selector : 'div.hbc-checkout__add-edit > div:nth-child(2)',
    },
    checkout_billingAddressLine1_css :{
        selector : ' div.hbc-checkout__steps > div:nth-child(2) > div > div > div > div.hbc-checkout__address > span:nth-child(2)',
    },
    checkout_billingCityStateZip_css :{
        selector : 'div.hbc-checkout__steps > div:nth-child(2) > div > div > div > div.hbc-checkout__address > span:nth-child(3)',
    },
    
    checkout_changeBillingAddress :{
        selector: '#main > div > div > div > div.hbc-checkout__steps > div:nth-child(2) > div > h1 > span.hbc-checkout__change-btn'
    },
    checkout_addNewBillingAddress_css :{
        selector : '#tab-group > div.tab-panel.tab-panel--radio.tab-panel--active > div > form > div.hbc-checkout__address-add-edit > button',
    },
    
    checkout_addPaymentCont_btn :{
        selector : 'div.hbc-checkout__page-btn-wrapper > button.hbc-button.hbc-button--primary.hbc-checkout__page-submit-button',
    },
    checkout_payment_checkmark_class :{
        selector: '#main > div > div > div > div.hbc-checkout__steps > div:nth-child(2) > div > h1 > span.hbc-icon.hbc-icon--check-circle.hbc-checkout__step-check',
    },

    checkout_paymentCheckBox :{
        selector: '#tab-group > div.tab-panel.tab-panel--radio.tab-panel--active > div > form > div > div > label > input'
    },

    /*SHIPPING METHOD*/
    checkout_shippingMethod_class :{
        selector : '.shipping-method__radiogroup',
    },

    checkout_shippingLoading :{
        selector : '#main > div > div > div > div.hbc-checkout__steps > div.shipping-method.hbc-checkout__page shipping-method__loading'
      },

    checkout_shippingDoneLoading:{
        selector: '#main > div > div > div > div.hbc-checkout__steps > div.shipping-method.hbc-checkout__page > form > div.radiogroup.radiogroup--stacked.shipping-method__radiogroup > fieldset > label:nth-child(2)'

    },

    checkout_shippingMethod_Rush:{
        selector: '#main > div > div > div > div.hbc-checkout__steps > div.shipping-method.hbc-checkout__page > form > div.radiogroup.radiogroup--stacked.shipping-method__radiogroup > fieldset > label:nth-child(3)'

    },

    checkout_shippingMethodShoprunner_css :{ //shoprunner
        selector : 'div.radiogroup.radiogroup--stacked.shipping-method__radiogroup.shipping-method__radiogroup--shoprunner > fieldset > label > span.radiogroup__radio-label',
    },
    checkout_shippingMethod_optionB_btn :{ //select 2nd shipping method
        selector : 'div.radiogroup.radiogroup--stacked.shipping-method__radiogroup > fieldset > label:nth-child(3) > span.radiogroup__radio-button',
    },


    /******************************** Thank You page*****************************************************************************************/
    thankyou_header_class: {
        selector : '.hbc-checkout-thankyou__wrapper__text-heading',
    },
    thankyou_details_css: {
        selector : 'div > p.hbc-checkout-thankyou__wrapper__text-details > span',
    },
    thankyou_orderNumber_css: {
        selector : '#main > div > div > div > p.hbc-checkout-thankyou__wrapper__text-details > span > a',
    },


}