module.exports = {
    /******* Shopping bag *******************************************************************************************/

    bag_header_css :{
        selector :'#bag-tab',
    },
    bag_promoLineItem_class :{
        selector :'.shopping-bag-item__promo-code-label',
    },
    bag_itemQty_class :{
        selector :'.spinbox--small',
    },
    bag_itemQtyInput_css :{
        selector :'#qty-input-0',
    },
    bag_itemImg_class :{
        selector :'.shopping-bag-item__img-container',
    },
    bag_itemPrice_class :{
        selector :'.shopping-bag-item__total-price',
    },
    bag_items_class :{
        selector :'.shopping-bag__items',
    },
    bag_checkout_class :{
        selector :'.shopping-bag__btn',
    },
    bag_login_class :{
        selector :'.hbc-login',
    },
    bag_lineItemVariants_class :{ //size/color
        selector :'.shopping-bag-item__variants',
    },
    bag_iconRemove_class :{
        selector :'.shopping-bag-item__icon-remove',
    },
    bag_emptyMsg_class :{
        selector :'.shopping-bag__no-items--bag',
    },
    /* Promo on Bag*/
    
    bag_promoOnBag :{
        selector :'#main > div > div > div > div.shopping-bag.container > div.shopping-bag__footer > div.shopping-bag__promo-wrapper > div > div'
    },
    
    bag_promoFieldOnBag:{
        selector :'#promo-code-number'
    },
    
    bag_promoAcceptOnBag :{
        selector: '#main > div > div > div > div.shopping-bag.container > div.shopping-bag__footer > div.shopping-bag__promo-wrapper > div > div > div > div > div > form > div.hbc-promo-code__submit-btn-wrapper > button'
    },
    
    bag_promoDisplayOnBag :{  
        selector: '#main > div > div > div > div.shopping-bag.container > div.shopping-bag__footer > div.shopping-bag__promo-wrapper > div > div > div > div > div > div > ul'
    },
    
    /* login/quickview drawer on bag page*/
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
    bag_quicklook_class :{
        selector :'.hbc-quicklook__drawer',
    },
    bag_quicklookSize_class :{
        selector :'.hbc-quicklook__product-size-options',
    },
    bag_quicklookUpdate_btn :{
        selector :'.hbc-quicklook__update-button',
    },
    bag_quicklookSize_optionB_item1_css :{ //TEST ITEM: SHIRT. SELECT SECOND SIZE OPTION
        selector :'div.quicklook__content > section.quicklook__product-size-options > div > ul > li:nth-child(2)',
    },

    /* PayPal */
    bag_paypal_express_btn :{
        selector :'#main > div > div > div > div.shopping-bag.container > div.shopping-bag__footer > div.shopping-bag__third-parties > div.shopping-bag__third-party-buttons > a > span.shopping-bag__logo_paypal'
    },
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


    /* order summary section on bag page & checkout page*/
    ordersummary_price_class :{
        selector :'.hbc-price-display__summary',
    },
    orderSummary_shippingCharge_css :{
        selector : 'div.hbc-price-display__summary > div:nth-child(2) > span.hbc-price-display__summary-price',
    },
    orderSummary_taxCharge_css :{
        selector : 'div.hbc-price-display__summary > div:nth-child(3) > span.hbc-price-display__summary-price',
    },
    order_total_css :{
        selector : 'div.hbc-price-display__line-item.hbc-price-display__line-item--items-total > span.hbc-price-display__summary-price',
    },
    
    /********************************Save For Later Bag*********************************************/
    bag_saveForLaterLink:{
        selector: '#tab-group > div.tab-panel.tab-panel--inline.tab-panel--active > div > div > div > a'
    },
    bag_saveForLaterActive:{
        selector: '#saved-tab'
    },
}