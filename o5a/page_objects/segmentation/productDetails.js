module.exports = {
    /****** Product Details Page  ******************************************************************************************/   /* TEST ITEM */
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
    pdp_priceCurrency_css: {
        selector : '.product-pricing__price',
    },
    /* PDP COLOR */
    pdp_color_class : {
        selector : '.product-color-options',
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
    pdp_color_optionA_item1_css : { //
        selector : 'div.product-color-options > ul > li:nth-child(1)',
    },
    pdp_color_box : {
        selector : 'li[style="background-color:$colorString;"]',
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
    pdp_size_optionA_item1_css :{ //TEST ITEM:  SELECT FIRST SIZE OPTION
        selector: 'div.product-size-options > ul > li:nth-child(1)',
    },
    pdp_size_optionA_item3_css :{ //TEST ITEM: SHIRT. SELECT FIRST SIZE OPTION
        selector: 'div.product-size-options > ul > li:nth-child(1)',
    },
    pdp_size_box :{
        selector: '#pdp-content-area > div > div > div > div > article > section.product__summary > section > div > div.product-size-options > ul > li:nth-child(n)',
    },
    /* image*/
    pdp_image1_css :{
        selector: '#s7SwatchContainer > div > div > div:nth-child(1)',
    },
    pdp_image2_css :{
        selector: '#s7SwatchContainer > div > div > div:nth-child(2)',
    },

    /* GIFT CARD*/
    pdp_giftcard_denomination_class :{
        selector : '.product-denomination-options',
    },
    pdp_giftcard_denomination_css :{ //$300 denomination option, $400 has inventory too
        selector : 'div.product-denomination-options > ul > li:nth-child(7)',
    },
     /* ************************************************ GIFT CARD ***********************************************************************************/
    giftcard_purchaseOption_class :{
        selector : '.row',
    },
    giftcard_standardCard_css :{
        selector : 'div.CTA.parent.parbase.section > div > a',
    },

    gift_card_200_css: {
        selector : 'div.product-denomination-options > ul > li:nth-child(6)',
    },
}