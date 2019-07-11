module.exports = {
    /******* Shopping bag *******************************************************************************************/
    bag_checkout_class:{
        selector: '#jsStartCheckout'
    },
    
    bag_loginGuestCheckout_btn:{
        selector: '#jsCheckoutRemediationGuestCheckout'
    },
    
    /******* Bag BOPIS *******************************************************************************************/
    bag_bopisOverlay:{
        selector: 'body > div.ui-widget-overlay.ui-front'
    },
    
    bag_bopisRadioButton:{
        selector: 'div > div.bag-group.bopus-bag-group.change-fulfillment > div > form > fieldset > div:nth-child(2) > input'
    },

    bag_bopisZipCodeField:{
        selector: 'input[class="zipcode js-zipcode quantity"]'
    },
    
    bag_bopisZipCodeSubmit:{
        selector: '#store-availability'
    },
    
    bag_bopisPickUpAtThisStore:{
        selector: '#store-results > div:nth-child(1) > div > label > input'
    },
    bag_bopisStoreAccept:{
        selector: '#do-edit-bopis-line'
    },
    
    //Everything below is objects from Saks page objects
    bag_title_class :{
        selector :'.masthead-saksbag-title',
    },
    bag_checkout_css :{
        selector :'#jsStartCheckout',
    },
    bag_checkout_cartMerge_css :{
        selector :'#jsEnterCheckout',
    },
    bag_loginOverlay_css :{
        selector :'#jsLoginWrap',
    },
    bag_lineItemVariants_class :{
        selector :'.shopping-bag-item__variants',  //size/color
    },
    bag_emptyMsg_class :{
        selector :'.widebag-empty-message',
    },
    bag_zipEntry_css :{
        selector :'#jsBagZipCode',
    },
    bag_shipppingMethod_optionB_css :{
        selector :'#jsSelectShippingMethod > option:nth-child(2)', //express shipping
    },
    /* login overlay on bag page*/
    bag_emailEntry_css :{
        selector :'#loginEmail',
    },
    bag_passwordEntry_css :{
        selector :'#loginPass',
    },
    bag_loginCheckout_btn :{
        selector :'#jsQuickCheckout',
    },
    bag_loginGuestCheckout_btn :{
        selector :'#jsCheckoutRemediationGuestCheckout',
    },
    /* promo section on bag page & checkout page*/
    promo_css :{
        selector :'#add_promo_code_service',
    },
    promo_entry_css :{
        selector :'#promoCodeEntry',
    },
    promo_apply_btn :{
        selector :'#promoApply > span',
    },
    /* order summary section on bag page & checkout page*/
    orderSummary_class :{
        selector :'.order-summary',
    },
    orderSummary_promoSavings_css :{
        selector : '#jsVal-promoTotalLabel',
    },
    orderSummary_taxCharge_css :{
        selector : '#jsVal-tax',
    },
    orderSummary_total_css :{
        selector : '#jsVal-grandTotal',
    },
    orderSummary_shippingCharge_css :{
        selector : '#jsVal-shippingCost',
    },
}