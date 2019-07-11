module.exports = {
    bag_quicklookSize_optionA_item1_css :{ //TEST ITEM: SHIRT. SELECT SECOND SIZE OPTION
        selector :'div.quicklook__content > section.quicklook__product-size-options > div > ul > li:nth-child(2)',
    },

    /* PayPal */
    bag_paypal_login_email :{
        selector : '#email',
    },
    bag_paypal_login_password :{
        selector : '#password',
    },
    bag_paypal_login_btn :{
        selector : '#btnLogin',
    },
    paypal_agree_cta :{
        selector : '#confirmButtonTop',
    },
    bag_paypal_express_btn :{
        selector :'#main > div > div > div > div.shopping-bag.container > div.shopping-bag__footer > div.shopping-bag__third-parties > div.shopping-bag__third-party-buttons > a > span.shopping-bag__logo_paypal'
    },

    /******* Shopping bag *******************************************************************************************/
     bag_header_css :{
        selector :'#bag-tab',
    },
    bag_promoLineItem_class :{
        selector :'.shopping-bag-item__promo-code-label',
    },
    bag_promoLineItem_css :{
        selector :'div.shopping-bag-item__promo-codes > span.shopping-bag-item__promo-code-label',
    },
    bag_itemQty_class :{
        selector :'.spinbox--small',
    },
    bag_itemQtyInput_css :{
        selector :'#qty-input-0',
    },
    bag_checkout_class :{
        selector :'.shopping-bag__btn',
    },
    bag_login_class :{
        selector :'.hbc-login',
    },
    bag_emailEntry_css :{
        selector :'#why-we-need-id',
    },
    bag_passwordEntry_css :{
        selector :'#why-we-need-id-2',
    },
    bag_loginCheckout_btn :{
        selector :'.hbc-login__checkout-btn',
    },
    bag_loginGuestCheckout_btn :{
        selector :'.hbc-login__guest-checkout-btn',
    },
    bag_itemImg_class :{
        selector :'.shopping-bag-item__img',
    },
    bag_itemPrice_class :{
        selector :'.shopping-bag-item__total-price',
    },
    bag_quicklook_class :{
        selector :'.quicklook__content',
    },
    bag_quicklookSize_class :{
        selector :'.quicklook__product-size-options',
    },
    bag_quicklookUpdate_btn :{
        selector :'.quicklook__update-button',
    },
    bag_lineItemVariants_class :{
        selector :'.shopping-bag-item__variants',
    },
    bag_iconRemove_class :{
        selector :'.shopping-bag-item__icon-remove',
    },
    bag_items_class :{
        selector :'.shopping-bag__items',
    },
    bag_emptyMsg_class :{
        selector :'.shopping-bag__no-items--bag',
    },
    

    /*QAS
    QASoverlay:{
        selector : '#jsAddressVerificationLayer',
    },
    QASAddressEntered:{
        selector : '.original-address',
    },
    QASpotentialMatchOne :{
        //selector:'#validate_address_service > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(3)',
        selector:'#validate_address_service > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(3) > label > div > address',
    },
    QASuseSuggAddressButton:{
        selector : '#jsUseSuggested',
    },
    */
    
    bag_promoOnBag :{
        selector :'#main > div > div > div > div.shopping-bag.container > div.shopping-bag__footer > div.shopping-bag__promo-wrapper > div > div'
    },
    
    bag_promoFieldOnBag:{
        selector :'#promo-code-number'
    },
    
    bag_promoDisplayOnBag :{  
        selector: '#main > div > div > div > div.shopping-bag.container > div.shopping-bag__footer > div.shopping-bag__promo-wrapper > div > div > div > div > div > div > ul'
    },
    
    promo_apply_btn :{
        selector :'.hbc-promo-code__submit-btn',
    },
    promo_remove_class :{
        selector : '.hbc-promo-code-display__remove-link',
     },
    orderSummary_price_class :{
        selector :'.hbc-price-display__summary',
    },
    orderSummary_shippingCharge_css :{
        selector : 'div.hbc-price-display__summary > div:nth-child(2) > span.hbc-price-display__summary-price',
    },
    orderSummary_taxCharge_css :{
        selector : 'div.hbc-price-display__summary > div:nth-child(3) > span.hbc-price-display__summary-price',
    },
    orderSummary_total_css :{
        selector : 'div.hbc-price-display__line-item.hbc-price-display__line-item--items-total > span.hbc-price-display__summary-price',
    },
    
    /********************************Bag BOPIS*********************************************/
    bag_bopisRadioButton:{
        selector :'#tab-group > div.tab-panel.tab-panel--inline.tab-panel--active > div > div > div > div.shopping-bag-item__details > div.shopping-bag-item__bopis > div > label:nth-child(2)',
    },
    bag_bopisZipCodeField:{
        selector: '#store-availability-zip-code-input'
    },
    bag_bopisZipCodeSubmit:{
        selector: 'button[class="hbc-button hbc-button--block hbc-button--secondary"]'
    },
    bag_bopisPickUpAtThisStore:{
        selector: 'button[class="hbc-button hbc-button--primary bag-bopis-drawer__select-button"]'
    },
    bag_bopisSelectedStoreLabel:{
        selector: 'span[class="hbc-bag-bopis__radio-label"]'
    },
    /********************************Save For Later Bag*********************************************/
    bag_saveForLaterLink:{
        selector: '#tab-group > div.tab-panel.tab-panel--inline.tab-panel--active > div > div > div > a'
    },
    bag_saveForLaterActive:{
        selector: '#saved-tab'
    },
    
}