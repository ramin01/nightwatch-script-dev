const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const { After } = require('cucumber');
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var deleteKey = client.globals.latConstants.deleteKey;

var homepageTitle = client.globals.latConstants.homepageTitle;

var product_ID_item1 = client.globals.latConstants.product_ID_item1;
var product_ID_item2 = client.globals.latConstants.product_ID_item2;
var product_desc_item1 = client.globals.latConstants.product_desc_item1;
var product_desc_item2 = client.globals.latConstants.product_desc_item2;

var product_size_optionA_item1 = client.globals.latConstants.product_size_optionA_item1;
var product_qty_optionA_item1 = client.globals.latConstants.product_qty_optionA_item1;
var product_size_optionA_item2 = client.globals.latConstants.product_size_optionA_item2;
var product_color_optionA_item2 = client.globals.latConstants.product_color_optionA_item2;
var product_qty_optionA_Item2 = client.globals.latConstants.product_qty_optionA_Item2;
var product_qty_sum_optionA = client.globals.latConstants.product_qty_sum_optionA;
var product_qty_sum_optionB = client.globals.latConstants.product_qty_sum_optionB;
var bag_pagetitle = client.globals.latConstants.bag_pagetitle;

var Intl_shipping = client.globals.latConstants.Intl_shipping;
var Intl_country_optionA = client.globals.latConstants.Intl_country_optionA;
var Intl_currency_optionA = client.globals.latConstants.Intl_currency_optionA;
var promoCode = client.globals.latConstants.promoCode;
var promoCodeText = client.globals.latConstants.promoCodeText;
var promoSavingsText = client.globals.latConstants.promoSavingsText;
var checkout_zip_optionA = client.globals.latConstants.checkout_zip_optionA;
var product_qty_optionB_item1 = client.globals.latConstants.product_qty_optionB_item1;
var product_size_optionC_item1 = client.globals.latConstants.product_size_optionC_item1;

var timeout_median = client.globals.latConstants.timeout_median
var pauseTime_median = client.globals.latConstants.pauseTime_median
var timeout_max = client.globals.latConstants.timeout_max
var pauseTime_max = client.globals.latConstants.pauseTime_max
var timeout_min = client.globals.latConstants.timeout_min
var pauseTime_min = client.globals.latConstants.pauseTime_min
//CODE IS WORKING FINE JUST NEED TO ADD GIVEN AND THEN SECTIONS
/******* change country flag via context chooser ***************************************************************************/
Given(/^I am on the website -LAT_PDPminicartBagINTL$/, () => {
  return client
    .url(qaUrl)
    .waitForElementVisible('#saksOverlay', timeout_min)
    .click('#saksOverlay')
    .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)
    .waitForElementPresent('.shipping' , timeout_min) //country flag
    .click('#toolbar > div > ul > li.menu-item.shipping > a') //country flag
    .pause(pauseTime_min)
});   
Then(/^I open the context chooser by clicking on the country flag in the top nav -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@intl_shippingpage_class' , timeout_min)
    .waitForElementPresent('@intl_shippingTitle_css' , timeout_min)
    .assert.containsText('@intl_shippingTitle_css', Intl_shipping)
    .waitForElementPresent('@intl_contextChooser_css' , timeout_min)
    .waitForElementPresent('@intl_countryDropdownMenu_css' , timeout_min)
    .click('@intl_countryDropdown_optionA_css') //change country selection in pageObj.js file
});
When(/^I select this <country> from the country dropdown menu -LAT_PDPminicartBagINTL$/, () => {
  return client
    .pause(pauseTime_min)
});
Then(/^click on SAVE & CONTINUE SHOPPING -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .click('@intl_contextChooser_btn')
});
Then(/^I should see a popupoverlay displaying shipping country change -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@intl_welcomemat_css', timeout_min)
    .waitForElementVisible('@intl_welcomematSubheadline_css', timeout_min)
    .assert.containsText('@intl_welcomematSubheadline_css', Intl_country_optionA)
    .waitForElementVisible('@intl_welcomemat_btn', timeout_min)
    .click('@intl_welcomemat_btn')
}); 
/****************** search by web id  ************************************************************/ 

Given(/^I am on the homepage -LAT_PDPminicartBagINTL$/, () => {
  return client
    .pause(pauseTime_min)  
    .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)   
});
When(/^I enter this product id -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .assert.visible('@header_searchBar_class')   
    .setValue('@header_searchBar_class', product_ID_item1) 
    .click('@header_searchSubmit_btn') 
});   
Then(/^I should be taken to a PDP of this product -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@prod_desc_class', timeout_median)
});

/****************** PDP - switch between images, colors, and size  ************************************************************/   

Given(/^I am on a Product Detail Page that has multiple colors, sizes, and images -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@prod_desc_class', timeout_median)
    .assert.containsText('@prod_desc_class', product_desc_item1)
    .waitForElementVisible('@pdp_price_class', timeout_median)
    .waitForElementVisible('@pdp_priceCurrency_css', timeout_median)
    .assert.containsText('@pdp_priceCurrency_css', Intl_currency_optionA)
});
When(/^I alternate between the images, colors, and sizes available -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .assert.visible('@pdp_color_class')
    .assert.visible('@pdp_size_class')
    .click('@pdp_image1_css')
    
    .click('@pdp_size1_css')
    .click('@pdp_size2_css')
    .click('@pdp_size_optionA_item1_css') 
});
Then(/^I should see the changes being reflected for the sku -LAT_PDPminicartBagINTL$/, () => {//NEED TO WRITE SCRIPT FOR CHANGES REFLECTED
  return latPageObj
      .waitForElementVisible('@pdp_sizeValue_css', timeout_min)
      .assert.containsText('@pdp_sizeValue_css', product_size_optionA_item1)
});

/****************** add to bag on PDP ************************************************************/   

Given(/^I am on a Product Detail Page -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@pdp_price_class', timeout_min)
});
When(/^I select a color, size, quantity “2” -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@pdp_size_class', timeout_median)
    .click('@pdp_size1_css')
    .waitForElementVisible('@pdp_qtySpinboxInc_class', timeout_median)
    .click('@pdp_qtySpinboxInc_btn')
});
Then(/^click the ADD TO BAG button -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
      .waitForElementVisible('@pdp_addtobag_btn', timeout_median)
      .click('@pdp_addtobag_btn')  
});
Then(/^I can validate the options color, size, '2', price selected in the mini bag -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@minicart_overlay_css', timeout_median)
    .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
    .assert.containsText('@minicart_itemDetails_css', product_desc_item1)
    .waitForElementVisible('@minicart_itemPrice_css', timeout_min)
    .waitForElementVisible('@minicart_itemQty_css', timeout_min)
    .assert.containsText('@minicart_itemQty_css', product_qty_optionA_item1)
    .waitForElementVisible('@minicart_image_css', timeout_min)
    .waitForElementVisible('@minicart_subtotal_css', timeout_min)
    .assert.containsText('@minicart_subtotal_css', Intl_currency_optionA)
});

/****************** change size of the items on product overlay ************************************************************/  

Given(/^I have an item in the mini cart -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@minicart_checkout_css' , timeout_min)
    .click('@minicart_checkout_css')
});
Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_title_css', timeout_median)
    .assert.containsText('@bag_title_css', bag_pagetitle) 
    .waitForElementVisible('@widebag_itemDesc_class', timeout_min)
    .assert.containsText('@widebag_itemDesc_class', product_desc_item1)   
    .waitForElementVisible('@widebag_itemPrice_class', timeout_min)
    .waitForElementVisible('@orderSummary_total_css', timeout_min)
    .waitForElementPresent('@widebag_itemQtyEntry_class' , timeout_min) 
    .waitForElementPresent('@widebag_items_class', timeout_median)
    .waitForElementPresent('@widebag_editIcon_css', timeout_min)    
    .click('@widebag_editIcon_css')
});
Then(/^I access the item overlay by the EDIT button -LAT_PDPminicartBagINTL$/, () => {
  return client
    .pause(pauseTime_median)
});
When(/^I update the following product information on the overlay -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@quicklook_overlay_class' , timeout_median)
    .waitForElementPresent('@quicklook_desc_css' , timeout_median)
    .assert.containsText('@quicklook_desc_css',product_desc_item1)
    .waitForElementPresent('@quicklook_sizeItem1_css' , timeout_median)
    .click('@quicklook_sizeItem1_css' )
    .waitForElementPresent('@quicklook_apply_btn',timeout_median )
    .click('@quicklook_apply_btn')
});
Then(/^wait for page to refresh -LAT_PDPminicartBagINTL$/, () => {
  return client
    .pause(pauseTime_median)
});
Then(/^I should see the product information updated on the bagpage: -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@widebag_items_class', timeout_median)
    .waitForElementPresent('@widebag_itemSize_css', timeout_median)
    .assert.containsText('@widebag_itemSize_css',product_size_optionC_item1)
});

/****************** search by web id * product2 ************************************************************/ 

Given(/^I am on the saks website -LAT_PDPminicartBagINTL$/, () => {
  return client
    .url(qaUrl)       
    .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)   
});
When(/^I enter this product id or sku -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', product_ID_item2)
    .click('@header_searchSubmit_btn') 
});     
Then(/^I should be navigated to a PDP of this product -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@prod_desc_class', timeout_median)
});

/****************** PDP - switch between images, colors, and size * product2   ************************************************************/   

Given(/^I am on a Product Detail Page that has multiple colors, sizes, and images for selected sku -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@prod_desc_class', timeout_median)
    .assert.containsText('@prod_desc_class', product_desc_item2)
    .waitForElementVisible('@pdp_price_class', timeout_median)
    .waitForElementVisible('@pdp_priceCurrency_css', timeout_median)
    .assert.containsText('@pdp_priceCurrency_css', Intl_currency_optionA)
});
When(/^I alternate between the images, colors, and sizes available for sku -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj  
    .assert.visible('@pdp_color_class')
    .assert.visible('@pdp_size_class')
    .click('@pdp_image1_css')
    .click('@pdp_image2_css')

    .click('@pdp_color_optionA_item2_css')

    .click('@pdp_size1_css')
    .click('@pdp_size_optionA_item2_css')
});
Then(/^I should see the changes being reflected -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@pdp_colorValue_css', timeout_min)
    .assert.containsText('@pdp_colorValue_css', product_color_optionA_item2)   
    .waitForElementVisible('@pdp_sizeValue_css', timeout_min)
    .assert.containsText('@pdp_sizeValue_css', product_size_optionA_item2)
});

/****************** add to bag on PDP ************************************************************/   
Given(/^I am on a Product Detail Page for a selected sku -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@pdp_price_class', timeout_min)
});
When(/^I select a color, size, quantity “2” for different sku -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@pdp_qtySpinboxInc_class', timeout_median)
    .click('@pdp_qtySpinboxInc_class')
});
Then(/^click the ADD TO BAG button in PDP page -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@pdp_addtobag_btn', timeout_median)
    .click('@pdp_addtobag_btn')  
});
Then(/^I can validate the options color, size, '2', price selected for sku in the mini bag for sku -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@minicart_overlay_css', timeout_median)
    .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
    .assert.containsText('@minicart_itemDetails_css', product_desc_item2)
    .waitForElementVisible('@minicart_itemPrice_css', timeout_min)
    .waitForElementVisible('@minicart_itemQty_css', timeout_min)
    .assert.containsText('@minicart_itemQty_css', product_qty_optionA_Item2)
    .waitForElementVisible('@minicart_image_css', timeout_min)
    .waitForElementVisible('@minicart_subtotal_css', timeout_min)
    .assert.containsText('@minicart_subtotal_css', Intl_currency_optionA)
});

/****************** bag page renders with correct item amount * product2 ************************************************************/   

Given(/^I have items in the MINI CART -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@minicart_checkout_css' , timeout_min)
});
When(/^I click on the CHECKOUT button in the mini cart -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .click('@minicart_checkout_css')
});
Then(/^I should be taken to the the bag page -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_title_css', timeout_median)
    .assert.containsText('@bag_title_css', bag_pagetitle) 
    .waitForElementVisible('@widebag_itemDesc_class', timeout_min)
    .assert.containsText('@widebag_itemDesc_class', product_desc_item2)   
    .waitForElementVisible('@widebag_itemPrice_class', timeout_min)
    .waitForElementVisible('@orderSummary_total_css', timeout_min)
    .waitForElementPresent('@widebag_itemQtyEntry_class' , timeout_min)  
});
Then(/^validate multi item info are rendering correctly -LAT_PDPminicartBagINTL$/ , () =>{
  return latPageObj
    .waitForElementVisible('@widebag_headingItemsQty_css', timeout_min) 
    .assert.containsText('@widebag_headingItemsQty_css', product_qty_sum_optionA) 
    .waitForElementVisible('@widebag_itemDesc_class', timeout_min) 
    .assert.containsText('@widebag_itemDesc_class', product_desc_item2)
  });

  /****************** remove the items on the bag ************************************************************/   

Given(/^I have an item on the bag page -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@widebag_items_class', timeout_min)  
    .waitForElementVisible('@widebag_iconRemove_class', timeout_min) 
});
When(/^I click on REMOVE option -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .click('@widebag_iconRemove_class')     
    .waitForElementPresent('@widebag_removeOverlay_css' , timeout_min) 
    .waitForElementPresent('@widebag_removeOverlayConfirm_class' , timeout_min) 
    .click('@widebag_removeOverlayConfirm_class') 
});
Then(/^I confirm the deletion of product -LAT_PDPminicartBagINTL$/, () => {
  return client
    .pause(pauseTime_max)
});
Then(/^validate total quantity change -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@widebag_headingItemsQty_css', timeout_min) 
    .assert.containsText('@widebag_headingItemsQty_css', product_qty_sum_optionB) 
});

/****************** change qty of the items on product overlay ************************************************************/  

Given(/^I am on the bag page -LAT_PDPminicartBagINTL$/,() => {
  return latPageObj
    .waitForElementPresent('@widebag_items_class', timeout_median)
    .waitForElementPresent('@widebag_itemQtyEntry_class' , timeout_min) 
    .click('@widebag_itemQtyEntry_class')
});
When(/^I update the following product information on the bag page -LAT_PDPminicartBagINTL$/, () => {
  client.keys(deleteKey)
  return client
    //.clearValue('input[name=itemQuantity]')
    .setValue('input[name=itemQuantity]', product_qty_optionB_item1)
    .pause(pauseTime_max)
});
Then(/^I should see the product information updated on the bag: -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj  
    .waitForElementVisible('@widebag_headingItemsQty_css', timeout_min) 
    .assert.containsText('@widebag_headingItemsQty_css', product_qty_optionB_item1)
});

/****************** apply promo code************************************************************/  

Given(/^I have an item on the bag page that is promo eligible -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@promo_css' ,timeout_min)
    .waitForElementPresent('@promo_entry_css', timeout_median)
});
When(/^I apply this promo code -LAT_PDPminicartBagINTL$/, () => {
  return client
    .setValue('input[name=promoCode]', promoCode)
});
Then(/^I should see the discount being applied on the item level -LAT_PDPminicartBagINTL$/, () => {
  return latPageObj
    .click('@promo_apply_btn')
    .waitForElementPresent('@widebag_itemPromo_class', timeout_median)
    .assert.containsText('@widebag_itemPromo_class', promoCodeText)
});
Then(/^validate calculation change in order total -LAT_PDPminicartBagINTL$/ , () =>{
  return latPageObj
    .waitForElementPresent('@orderSummary_class', timeout_min)
    .waitForElementPresent('@orderSummary_promoSavings_css', timeout_min)
    .assert.containsText('@orderSummary_promoSavings_css', promoSavingsText)
}); 


