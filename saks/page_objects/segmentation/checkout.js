module.exports = {
    /*********** CHECKOUT ************************************************************************************/
    checkout_shippingAddress_class :{
        selector : '.hbc-checkout__address',
    },
    checkout_shippingMethod_class :{
        selector : '.shipping-method__radiogroup',
    },
    checkout_paymentInfo_class :{
        selector : '.hbc-checkout__payment-info',
    },
    checkout_placeOrder_btn :{
        selector : '#main > div > div > div > div.hbc-checkout__steps > div.hbc-checkout__place-order.hbc-checkout__place-order--fixed > button',
    },
    checkout_lineItemDesc_class :{
        selector : '.hbc-cart-item__short-desc',
    },
    checkout_addressEdit_class :{
        selector : '.hbc-checkout__address-add-edit',
    },
    checkout_existingAddress_css :{
        selector : 'div.hbc-checkout__address-add-edit > div:nth-child(1) > div',
    },
    checkout_addbillingaddress_css:{
        selector : 'div.tab-panel.tab-panel--active.tab-panel--radio > div > form > div.hbc-checkout__address-add-edit > button',
    },
    checkout_promoLineItem_class :{
        selector : '.hbc-cart-item__promo-code-label',
    },
    /*SHIPPING ADDRESS*/
    checkout_fristName_css :{
        selector : '#given-name',
    },
    checkout_lastName_css :{
        selector : '#family-name',
    },
    checkout_address1_css :{
        selector : '#address'
    },
    checkout_city_css :{
        selector : '#address-level2'
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
    checkout_state_css :{ //virginia
        selector : 'div.drop-down-menu.address-form__state > div > select > option:nth-child(51)',
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
    checkout_addressContinue_btn :{
        selector : '.address-form__submit-button',
    },
    checkout_bopis_fristName_css :{
        selector : '#bopis-form-first-name',
    },
    checkout_bopis_lastName_css :{
        selector : '#bopis-form-last-name',
    },
    checkout_bopis_email_css :{
        selector : '#bopis-form-email',
    },
    checkout_bopis_email_class :{
        selector : '.bopis-details__email',
    },
    
    checkout_bopis_textMe:{
        selector:'span[class="checkbox__checkbox-label"]'
    },
    
    checkout_bopis_phone:{
        selector: '#bopis-form-phone'
    },
    
    checkout_bopis_save:{
        selector:'button[data-ref-name="submitBtn"]'
    },
    
    checkout_shippingChange_btn :{
        selector : 'div:nth-child(1) > div > h1 > span.hbc-checkout__change-btn',
    },
    checkout_shippingAddressLine1_css :{
        selector : 'div.hbc-checkout__steps > div:nth-child(1) > div > div > div > div > span:nth-child(2)',
    },
    checkout_shippingaddressCityStateZip_css :{
        selector : 'div.hbc-checkout__steps > div:nth-child(1) > div > div > div > div > span:nth-child(3)',
    },
    checkout_addNewShippingAddress_class :{
        selector : '.hbc-checkout__address-list--add-address',
    },
    checkout_billingAddressLine1_css :{
        selector : 'div.hbc-checkout__steps > div:nth-child(2) > div > div > div > div.hbc-checkout__address > span:nth-child(2)',
    },
    checkout_billingCityStateZip_css :{
        selector : 'div.hbc-checkout__steps > div:nth-child(2) > div > div > div > div.hbc-checkout__address > span:nth-child(3)',
    },
    checkout_shipping_checkmark_class :{
        selector : '#main > div > div > div > div.hbc-checkout__steps > div:nth-child(1) > div > h1 > span.hbc-icon.hbc-icon--check-circle.hbc-checkout__step-check',
    },
    /*ENTER PAYMENT METHOD*/
    checkout_addPayment_class :{
        selector : '.hbc-checkout__add-payment',
    },
    checkout_ccNumber_css :{
        selector : '#ccnumber',
    },
    checkout_expDate_css :{
        selector : '#month',
    },
    checkout_newPaymentCVC_css :{
        selector : '#cvc',
    },
    checkout_ccCVC_css :{
        selector : '#credit-card-cvc',
    },
    checkout_CVC_css :{
        selector : '#cvc',
    },
    checkout_ccName_css :{
        selector : '#nameoncard',
    },
    checkout_paymentContinue_btn :{
        selector : '.hbc-checkout__page-submit-button',
    },
    checkout_paymentFormCont_btn :{
        selector : '.hbc-checkout__page-submit-button',
    },
    checkout_addressFormCont_btn :{
        selector : '.address-form__submit-button',
    },
    
    checkout_paymentSaveAndContinue:{
        selector: '#tab-group > div.tab-panel.tab-panel--radio.tab-panel--active > div > div.hbc-checkout__btn-wrapper > button'
    },
    checkout_addressCont_btn :{
        selector : '.hbc-checkout__shipping-address-save-button',
    },
    
    checkout_add_BillingAddress_btn:{
        selector: '#tab-group > div.tab-panel.tab-panel--radio.tab-panel--active > div > div.hbc-checkout__add-payment > form > div.hbc-checkout__address-add-edit'
    },
    
    checkout_add_BillingAddressSave_btn:{
        selector: 'button[class="hbc-button hbc-button--primary address-form__submit-button"]'
    },
    checkout_paymentCont_btn :{
        selector:'div.tab-panel.tab-panel--active.tab-panel--radio > div > div.hbc-checkout__btn-wrapper > button',
        //selector : '#tab-group > div.container > div.tab-panel.tab-panel--active.tab-panel--radio > div > div.hbc-checkout__btn-wrapper > button',

    },
     checkout_paymentCont_btn2 :{
        //selector:'div.tab-panel.tab-panel--active.tab-panel--radio > div > div.hbc-checkout__btn-wrapper > button',
        selector : '#tab-group > div.container > div.tab-panel.tab-panel--active.tab-panel--radio > div > div.hbc-checkout__btn-wrapper > button',

    },
     checkout_paymentChange_btn :{
        selector : 'div > div.hbc-checkout__steps > div:nth-child(2) > div > h1 > span.hbc-checkout__change-btn',
        //selector : 'div:nth-child(2) > div > h1 > span.hbc-checkout__change-btn',
    },
    checkout_paymentEdit_class :{
        selector : '.hbc-checkout__add-edit',
    },
    checkout_addNewCC_css :{
        selector : ' div.tab-panel.tab-panel--active.tab-panel--radio > div > div.hbc-checkout__add-edit > button',
    },

    checkout_existingCC_css :{
        selector : 'div.hbc-checkout__add-edit > div:nth-child(1)',
    },
    checkout_addNewBillingAddress_css :{
        selector : 'div > form > div.hbc-checkout__address-add-edit > button > span',
    },
    checkout_payment_checkmark_class :{
        selector: '#main > div > div > div > div.hbc-checkout__steps > div:nth-child(2) > div > h1 > span.hbc-icon.hbc-icon--check-circle.hbc-checkout__step-check',
    },

    checkout_amexPWP_learnMore : {
            selector : 'a[href="http://amex.co/saks"]',
    },
    /*SHIPPING METHOD*/
    checkout_shippingMethod_optionB_btn :{
        selector : 'div.radiogroup.radiogroup--stacked.shipping-method__radiogroup > fieldset > label:nth-child(3) > span.radiogroup__radio-button',
    },

    checkout_shippingMethod_optionB_btn_validation :{
        selector : 'div.radiogroup.radiogroup--stacked.shipping-method__radiogroup > fieldset > label:nth-child(5) > span.radiogroup__radio-button',
    },
    checkout_addPaymentCont_btn :{
        selector : 'div.hbc-checkout__page-btn-wrapper > button.hbc-button.hbc-button--primary.hbc-checkout__page-submit-button',
    },
    checkout_shippingMethodShoprunner_css :{
        selector : 'div.radiogroup.radiogroup--stacked.shipping-method__radiogroup.shipping-method__radiogroup--shoprunner > fieldset > label > span.radiogroup__radio-label',
    },
    /* INSTORE PICKUP*/

    checkout_bopis_continue_btn :{
        selector : 'div.bopis-form__submit-button-wrapper > button',
    },
    checkout_bopis_paymentsection_class:{
        selector : '.hbc-checkout__heading',
    },

    checkout_promoCodeDropDown:{
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