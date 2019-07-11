module.exports = {
    /****** Product Details Page  ******************************************************************************************/
    /* TEST ITEM */
    pdp_color_optionA_item1_css : { //TEST ITEM: SOCKS. SELECT FIRST COLOR OPTION
        selector : 'div.product-color-options > ul > li:nth-child(1)',
    },
    pdp_color_optionB_item1_css : { //TEST ITEM: SOCKS. SELECT FIRST COLOR OPTION
        selector : 'div.product-color-options > ul > li:nth-child(2)',
    },
    pdp_size_optionA_item1_css :{ //TEST ITEM: SOCKS. SELECT FIRST SIZE OPTION
        selector: 'div.product-size-options > ul > li:nth-child(1)',
    },

    pdp_addtobag_btn: {
        selector : 'div.add-to-bag > div > div > button',
    },
    pdp_qtySpinboxInc_class: {
        selector : '.spinbox__increment',
    },
    pdp_qtySpinboxInc_btn: {
        selector : 'div > button.spinbox__increment',
    },
    pdp_price_class: {
        selector : '.product-pricing',
    },
    /* PDP COLOR */
    pdp_color_class : {
        selector : '.product-color-options',
        //selector:'.product-variant-attribute-values',
    },
    pdp_size_class : {
        selector : '.product-size-options',
    },
    pdp_color1_css : {
        selector : 'div.product-color-options > ul > li:nth-child(1)',
    },
    pdp_color2_css : {
        selector : 'div.product-color-options > ul > li:nth-child(2)',
    },
    pdp_color3_css : {
        selector : 'div.product-color-options > ul > li:nth-child(3)',
    },
    pdp_colorValue_css :{
        selector: ' div.product-color-options > dl > dd',
    },
    /* PDP SIZE */
    pdp_size1_css :{
        selector: 'div.product-size-options > ul > li:nth-child(1)',
    },
    pdp_size2_css :{
        selector: 'div.product-size-options > ul > li:nth-child(2)',
    },
    pdp_size3_css :{
        selector: 'div.product-size-options > ul > li:nth-child(3)',
    },
    pdp_sizeValue_css :{
        selector: ' div.product-size-options > dl > dd',
    },
    /* image*/
    pdp_image1_css :{
        selector: '#s7SwatchContainer > div > div > div:nth-child(1)',
    },
    pdp_image2_css :{
        selector: '#s7SwatchContainer > div > div > div:nth-child(2)',
    },
    pdp_image3_css :{
        selector: '#s7SwatchContainer > div > div > div:nth-child(3)',
    },

    /* GIFT CARD*/
    giftcard_purchase_btn :{
        selector : 'div.sfa-gift-new-button > a',
    },
    giftcard_purchaseoption_class :{
        selector : '.sfa-gift-new-card-options',
    },
    giftcard_purchasePhysical_css :{
        selector : 'div.cta-content.hide-onload.sfa-gift-new-show > div > a.sfa-gift-new-card-standard',
    },
    pdp_giftcard_denomination_class :{
        selector : '.product-denomination-options',
    },
    pdp_giftcard_denomination_optionA_css :{
        selector : 'div.product-denomination-options > ul > li:nth-child(3)',
    },
    /* ************************************************ GIFT CARD ***********************************************************************************/
    giftcard_purchaseOption_class :{
        selector : '.row',
    },
    giftcard_standardCard_css :{
        selector : 'div.CTA.parent.parbase.section > div > a',
    },
}