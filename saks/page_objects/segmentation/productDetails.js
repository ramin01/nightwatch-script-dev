module.exports = {
    /****** Product Detail Page  ******************************************************************************************/
    pdp_color_optionA_item1_css : { //TEST ITEM
        selector : 'div.product-color-options > ul > li:nth-child(1)',
    },
    pdp_size_optionA_item1_css :{ //TEST ITEM
        selector: 'div.product-size-options > ul > li:nth-child(1)',
    },
    pdp_color_optionA_item2_css : { //TEST ITEM
        selector : 'div.product-color-options > ul > li:nth-child(2)',
    },
    pdp_size_optionA_item2_css :{ //TEST ITEM
        selector: 'div.product-size-options > ul > li:nth-child(2)',
    },
    pdp_color_optionA_item3_css : { //TEST ITEM
        selector : 'div.product-color-options > ul > li:nth-child(1)',
    },
    pdp_size_optionA_item3_css :{ //TEST ITEM
        selector: 'div.product-size-options > ul > li:nth-child(3)',
    },
    pdp_color_optionA_item5_css : { //TEST ITEM
        selector : 'div.product-color-options > ul > li:nth-child(2)',
    },
    pdp_size_optionA_item5_css :{ //TEST ITEM
        selector: 'div.product-size-options > ul > li:nth-child(1)',
    },
    pdp_size_box :{
        selector: '#pdp-content-area > div > div > div > div > article > section.product__summary > section > div > div.product-size-options > ul > li:nth-child(n)',
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
    pdp_priceCurrency_css: {
        selector : 'div > div:nth-child(3) > div > dl > dd > span:nth-child(1)',
    },
    /* PDP COLOR */
    pdp_color_class : {
        //selector : '.product-color-options',
        selector:'.product-variant-attribute-values',
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
        selector: ' div > div.product-color-options > dl > dd',
    },
    pdp_color_box : {
        selector : 'li[style="background-color:$colorString;"]',
    },
    /* PDP SIZE */
    pdp_size_class : {
        selector : '.product-size-options',
    },
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
    /* GIFT  CARD */
    pdp_giftcard_denomination_class :{
        selector : '.product-denomination-options',
    },
    pdp_giftcard_denomination_optionA_css :{
        selector : 'div.product-denomination-options > ul > li:nth-child(1)',
    },
    gift_card_200_css: {
        selector : 'div.product-denomination-options > ul > li:nth-child(2)',
    },

    /*  BOPIS  */
    pdp_bopis_pickUpInStore_css :{
        selector:'div > div:nth-child(5) > form > div > fieldset > label:nth-child(3) > span.radiogroup__radio-button',
    },
    pdp_bopis_zipcodeEntry_css:{
        selector:'#store-availability-zip-code-input',
      },
      pdp_bopis_checkStores_btn:{
        selector:'#pdp-content-area > div > div > div > div > article > section.product__summary > section > div > div:nth-child(5) > div > div > form > button',
      },
      pdp_bopis_pickUpInStoreResult_class:{
        selector:'.pick-up-in-store-results__store-name',
     },
     pdp_bopis_pickUpInStoreRadio_btn:{
        selector:'.pick-up-in-store-radiogroup__radio-button',
    },
    pdp_bopis_btn:{
        selector:'div > div:nth-child(5) > div > button',

    pdp_bopisRadioButton:{
        selector: '#pdp-content-area > div > div > div > div > article > section.product__summary > section > div > div:nth-child(6) > form > div > fieldset > label:nth-child(3) > span.radiogroup__radio-button'
    },
    pdp_bopisZipCodeField:{
        selector: '#store-availability-zip-code-input'
    },
    pdp_bopisZipCodeSubmit:{
        selector:'#pdp-content-area > div > div > div > div > article > section.product__summary > section > div > div:nth-child(6) > div > div > form > button > span'
      
    },
    pdp_bopisBuyOnlineAndPickUp:{
        selector: '#pdp-content-area > div > div > div > div > article > section.product__summary > section > div > div:nth-child(6) > div > button'
    },
    
    /* Overlay */
    
    pdp_overlay:{
        selector:'#ui-minibag-svc > div > div > div.drawer__backdrop.drawer__backdrop--show'
    },          
 }
 }