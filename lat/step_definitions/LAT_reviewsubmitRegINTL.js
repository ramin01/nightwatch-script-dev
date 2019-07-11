const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var deleteKey = client.globals.latConstants.deleteKey;

var homepageTitle = client.globals.latConstants.homepageTitle;
var username2INTL = client.globals.latConstants.username2INTL;
var password = client.globals.latConstants.password;
var product_ID_item1 = client.globals.latConstants.product_ID_item1;
var product_desc_item1 = client.globals.latConstants.product_desc_item1;
var bag_pagetitle = client.globals.latConstants.bag_pagetitle;
var product_qty_optionA_item1 = client.globals.latConstants.product_qty_optionA_item1;
var product_size_optionC_item1 = client.globals.latConstants.product_size_optionC_item1;
var thankyou_header =client.globals.latConstants.thankyou_header;
var thankyou_orderNumber =client.globals.latConstants.thankyou_orderNumber;
var checkout_addressStreetINTL_optionB= client.globals.latConstants.checkout_addressStreetINTL_optionB;
var checkout_cityINTL_optionB = client.globals.latConstants.checkout_cityINTL_optionB;
var checkout_zipINTL_optionB= client.globals.latConstants.checkout_zipINTL_optionB;
var checkout_paymentTypeINTL_optionB =client.globals.latConstants.checkout_paymentTypeINTL_optionB;
var checkout_CVC3digits =client.globals.latConstants.checkout_CVC3digits;
var checkout_shippingMethod =client.globals.latConstants.checkout_shippingMethod;

var Intl_shipping = client.globals.latConstants.Intl_shipping;
var Intl_country_optionA = client.globals.latConstants.Intl_country_optionA;
var Intl_currency_optionA = client.globals.latConstants.Intl_currency_optionA;

var timeout_median = client.globals.latConstants.timeout_median
var pauseTime_median = client.globals.latConstants.pauseTime_median
var timeout_max = client.globals.latConstants.timeout_max
var pauseTime_max = client.globals.latConstants.pauseTime_max
var timeout_min = client.globals.latConstants.timeout_min
var pauseTime_min = client.globals.latConstants.pauseTime_min
/******* change country flag via context chooser ***************************************************************************/

Given(/^I am on the website -LAT_reviewsubmitRegINTL$/, () => {
    return client
        .url(qaUrl)
        .waitForElementVisible('#saksOverlay', timeout_median)
        .click('#saksOverlay')
        .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
        .assert.title(homepageTitle)
        .waitForElementPresent('.shipping' , timeout_min) //country flag
        .click('#toolbar > div > ul > li.menu-item.shipping > a') //country flag
        .pause(pauseTime_min)
});   
Then(/^I open the context chooser by clicking on the country flag in the top nav -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@intl_shippingpage_class' , timeout_min)
        .waitForElementPresent('@intl_shippingTitle_css' , timeout_min)
        .assert.containsText('@intl_shippingTitle_css', Intl_shipping)
        .waitForElementPresent('@intl_contextChooser_css' , timeout_min)
        .waitForElementPresent('@intl_countryDropdownMenu_css' , timeout_min)
        .click('@intl_countryDropdown_optionA_css') //change country selection in pageObj.js file
});
When(/^I select this <country> from the country dropdown menu -LAT_reviewsubmitRegINTL$/, () => {
    return client
        .pause(pauseTime_min)
});
Then(/^click on SAVE & CONTINUE SHOPPING -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .click('@intl_contextChooser_btn')
});
Then(/^I should see a popupoverlay displaying shipping country change -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@intl_welcomemat_css', timeout_min)
        .waitForElementVisible('@intl_welcomematSubheadline_css', timeout_min)
        .assert.containsText('@intl_welcomematSubheadline_css', Intl_country_optionA)
        .waitForElementVisible('@intl_welcomemat_btn', timeout_min)
        .click('@intl_welcomemat_btn')
}); 

/****************** search by web id *********************************************************/  
  
Given(/^I am on the homepage -LAT_reviewsubmitRegINTL$/, () => {
    return client
        .pause(pauseTime_min)
        .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
        .assert.title(homepageTitle )   
});
When(/^I enter this product id -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj 
        .assert.visible('@header_searchBar_class') 
        .setValue('@header_searchBar_class', product_ID_item1) 
        .click('@header_searchSubmit_btn') 
 });
Then(/^I should be taken to a PDP of this product -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@prod_desc_class', timeout_median)
   });

/****************** add to bag on PDP ************************************************************/   

Given(/^I am on a Product Detail Page -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@prod_desc_class', timeout_median)
        .assert.containsText('@prod_desc_class', product_desc_item1)
        .waitForElementVisible('@pdp_price_class', timeout_median)
        .waitForElementVisible('@pdp_priceCurrency_css', timeout_median)
        .assert.containsText('@pdp_priceCurrency_css', Intl_currency_optionA)
  });
When(/^I select a color, size, quantity “1” -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .assert.visible('@pdp_color_class')
        .assert.visible('@pdp_size_class')
        //.click('@pdp_colorItem1_css')
        .click('@pdp_size_optionA_item1_css')
    });
Then(/^click the ADD TO BAG button -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .click('@pdp_addtobag_btn')  
});
Then(/^the item appears in the mini cart -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@minicart_overlay_css', timeout_median)
        .waitForElementVisible('@minicart_subtotal_css', timeout_median)
        .assert.containsText('@minicart_subtotal_css', Intl_currency_optionA)
});

/****************** open sign in overlay on bag page *****************************************************/  

Given(/^I have an item in the mini cart -LAT_reviewsubmitRegINTL$/, () => {
     return latPageObj
        .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
        .assert.containsText('@minicart_itemDetails_css', product_desc_item1)
        .waitForElementPresent('@minicart_checkout_css' , timeout_min)
        .click('@minicart_checkout_css')
});
Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@bag_title_css', timeout_min)
        .assert.containsText('@bag_title_css', bag_pagetitle) 
        .waitForElementVisible('@widebag_itemDesc_class', timeout_min)
        .assert.containsText('@widebag_itemDesc_class', product_desc_item1)   
        .waitForElementVisible('@widebag_itemPrice_class', timeout_min)
        .waitForElementVisible('@orderSummary_total_css', timeout_min)
        .assert.containsText('@orderSummary_total_css', Intl_currency_optionA)
        .waitForElementVisible('@bag_checkout_css', timeout_median)
});
When(/^I click on the CHECKOUT button on the Bag page -LAT_reviewsubmitRegINTL$/, () => {
    return client
        .execute('scrollTo(0, 6000)') 
});
Then(/^a sign in overlay pops up -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .click('@bag_checkout_css')
        .waitForElementVisible('@bag_loginOverlay_css', timeout_median)
});

/****************** log into registered account via bag page *****************************************************/  

Given(/^I am on the BAG page with a sign in overlay open -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@bag_emailEntry_css', timeout_median)
        .waitForElementVisible('@bag_passwordEntry_css', timeout_median)
});
Then(/^I enter a valid email address and password -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .setValue('@bag_emailEntry_css', username2INTL)
        .setValue('@bag_passwordEntry_css', password)
});
When(/^I click on the SIGN IN & CHECKOUT button on sign in overlay   -LAT_reviewsubmitRegINTL/, () => {
    return latPageObj
        .click('@bag_loginCheckout_btn')
});
Then(/^I should be redirected to the review page -LAT_reviewsubmitRegINTL$/, () => {
    client.pause(pauseTime_max)
    latPageObj.getText('@header_bag_btn_quantity',function(result){
      if(result.value != '1'){
        latPageObj
        .waitForElementVisible('@bag_checkout_btn',timeout_median)
        .click('@bag_checkout_btn')
      }
    })
    return latPageObj
        .waitForElementVisible('@checkout_RS_navTab_css', timeout_max)
});

/****************** change quantity ************************************************************/   

Given(/^I am on the Review&Submit page to update the item info -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@checkout_RS_billingAddress_class',timeout_median)
        //.waitForElementVisible('@checkout_RS_paymentInfo_class',timeout_median)
        //.waitForElementVisible('@checkout_RS_shippingAddress_class',timeout_median)
        //.waitForElementVisible('@checkout_RS_shippingMethodINTL_class', timeout_median)
        .assert.containsText('@widebag_itemDesc_class', product_desc_item1) 
        .waitForElementPresent('@widebag_itemQtyEntry_class' , timeout_min) 
        .click('@widebag_itemQtyEntry_class')
});
When(/^I update the following product information on the R&S page: -LAT_reviewsubmitRegINTL$/, () => {
    client.keys(deleteKey)
    return client
        //.clearValue('input[name=itemQuantity]')
        .setValue('input[name=itemQuantity]', product_qty_optionA_item1)
        .pause(pauseTime_max)
});
Then(/^I should see the product information updated on the R&S  page: -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@widebag_headingItemsQty_css', timeout_max)
});
Then(/^validate calculation change in order total -LAT_reviewsubmitRegINTL$/,() => {
    return latPageObj
        .assert.containsText('@widebag_headingItemsQty_css', product_qty_optionA_item1)
});

/****************** change size of the items on product overlay ************************************************************/  

Given(/^I am on the Review&Submit page to edit item details -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@widebag_items_class', timeout_median)
        .waitForElementPresent('@widebag_editIcon_css', timeout_min)    
        .click('@widebag_editIcon_css')
});
Then(/^I access the item overlay by the EDIT button -LAT_reviewsubmitRegINTL$/, () => {
   return client
       .pause(pauseTime_min)
});
When(/^I update the following product information on the overlay -LAT_reviewsubmitRegINTL$/, () => {
   return latPageObj
        .waitForElementPresent('@quicklook_overlay_class' , timeout_median)
        .waitForElementPresent('@quicklook_desc_css' , timeout_median)
        .assert.containsText('@quicklook_desc_css',product_desc_item1)
        .waitForElementPresent('@quicklook_sizeItem1_css' , timeout_median)
        .click('@quicklook_sizeItem1_css' )
        .waitForElementPresent('@quicklook_apply_btn',timeout_median )
        .click('@quicklook_apply_btn')
});
Then(/^wait for page to refresh -LAT_reviewsubmitRegINTL$/, () => {
  return client
        .pause(pauseTime_median)
});
Then(/^I should see the product information change on the R&S page -LAT_reviewsubmitRegINTL$/, () => {
  return latPageObj
        .waitForElementPresent('@widebag_items_class', timeout_median)
        .waitForElementPresent('@widebag_itemSize_css', timeout_median)
        .assert.containsText('@widebag_itemSize_css',product_size_optionC_item1)
});

/****************** BILLING ADDRESS -SELECT AN EXISTING ************************************************************/  

Given(/^I am on the Review&Submit page to update existing billing address -LAT_reviewsubmitRegINTL$/,() =>{
  return latPageObj
        .waitForElementPresent('@checkout_RS_billingAddress_class' , timeout_min)
        .click('@checkout_RS_billingEdit_class') 
});
Then(/^I click on EDIT under the Billing Address to open the overlay -LAT_reviewsubmitRegINTL$/,() => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_billingOverlay_css' , timeout_median)    
        .waitForElementPresent('@checkout_RS_selectExistBillAddress_css' , timeout_min)    
        .click('@checkout_RS_selectExistBillAddress_css')
});
When(/^I Select an Existing Address option in the billing overlay -LAT_reviewsubmitRegINTL$/ ,() => {
    return client
        .pause(pauseTime_median)
});
Then(/^Select an Existing Address from the dropdwon menu in the billing overlay -LAT_reviewsubmitRegINTL$/ ,() => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_selectExistBillAddress_optionB_css' , timeout_min)    
        .click('@checkout_RS_selectExistBillAddress_optionB_css')
        .waitForElementPresent('@checkout_RS_billOverlayApply_btn' , timeout_min)
        .click('@checkout_RS_billOverlayApply_btn')
  });
Then(/^click APPLY to save the billing address changes -LAT_reviewsubmitRegINTL$/ ,() => {
    return client
        .pause(pauseTime_median)
});
Then(/^the page should refresh and reflect the new billing address -LAT_reviewsubmitRegINTL$/ ,() => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_billingAddress_class' , timeout_min)
        .assert.containsText('@checkout_RS_billingAddressStreet_css', checkout_addressStreetINTL_optionB)
        .assert.containsText('@checkout_RS_billingAddressCity_css', checkout_cityINTL_optionB)
        .assert.containsText('@checkout_RS_billingAddressZip_css', checkout_zipINTL_optionB)
});

/****************** SHIPPING ADDRESS -SELECT AN EXISTING ************************************************************/  

Given(/^I am on the Review&Submit page to update existing shipping address -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_shippingAddress_class', timeout_median)
  });
Then(/^I click on EDIT under the Shipping Address to open the overlay -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_shippingEdit_class', timeout_min)  
        .click('@checkout_RS_shippingEdit_class')
        .waitForElementPresent('@checkout_RS_shippingOverlay_css', timeout_median)
        .waitForElementPresent('@checkout_RS_selectExistShipAddress_css', timeout_min)
        .click('@checkout_RS_selectExistShipAddress_css') 
});
When(/^I Select an Existing Address option in the shipping overlay -LAT_reviewsubmitRegINTL$/, () => {
    return client
        .pause(pauseTime_min) 
});
Then(/^Select an Existing Address from the dropdwon menu in the shipping overlay -LAT_reviewsubmitRegINTL$/ ,() => {
  return latPageObj
        .waitForElementPresent('@checkout_RS_selectExistShipAddress_optionB_css', timeout_min)
        .click('@checkout_RS_selectExistShipAddress_optionB_css') 
        .waitForElementPresent('@checkout_RS_shippingOverlayApply_css' , timeout_min)
        .click('@checkout_RS_shippingOverlayApply_css')
  });
Then(/^click APPLY to save the shipping address changes -LAT_reviewsubmitRegINTL$/, () => {
    return client
        .pause(pauseTime_median)
});
Then(/^the page should refresh and reflect the new shipping address -LAT_reviewsubmitRegINTL$/, () => {
  return latPageObj    
        .waitForElementPresent('@checkout_RS_shippingAddress_class' , timeout_min)
        .assert.containsText('@checkout_RS_shippingAddressStreet_css', checkout_addressStreetINTL_optionB)
        .assert.containsText('@checkout_RS_shippingAddressCity_css', checkout_cityINTL_optionB)
        .assert.containsText('@checkout_RS_shippingAddressZip_css', checkout_zipINTL_optionB)
  });

/****************** PAYMENT TYPE -  ************************************************************/  

Given(/^I am on the Review&Submit page and to edit payment type -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
            .waitForElementVisible('@checkout_RS_paymentInfo_class',timeout_median)
  });
    Then(/^I click on EDIT under the PAYMENT TYPE to open the overlay -LAT_reviewsubmitRegINTL$/, () => {
        return latPageObj
            .waitForElementPresent('@checkout_RS_paymentEdit_class' , timeout_median)
            .click('@checkout_RS_paymentEdit_class')
            .waitForElementPresent('@checkout_RS_paymentOverlay_css', timeout_median)
            .waitForElementPresent('@checkout_RS_selectExistPayment_css', timeout_min)
  });
    When(/^I click on Payment Type to open dropdown menu -LAT_reviewsubmitRegINTL$/, () => {
        return client
            .pause(pauseTime_min)
    });
    Then(/^I select a different card from the dropdown menu -LAT_reviewsubmitRegINTL$/,()=>{
        return latPageObj
            .waitForElementPresent('@checkout_RS_selectExistPaymentINTL_optionB_css', timeout_min)
            .click('@checkout_RS_selectExistPaymentINTL_optionB_css')
            .waitForElementPresent('@checkout_CVV_css', timeout_min)
            .setValue('@checkout_CVV_css',checkout_CVC3digits)
            .waitForElementPresent('@checkout_paymentOverlayApply_btn', timeout_min)
            .click('@checkout_paymentOverlayApply_btn')
  });
    Then(/^click APPLY button -LAT_reviewsubmitRegINTL$/, () => {
        return client
            .pause(pauseTime_max)
    });
    Then(/^the page should refresh and reflect the new payment method -LAT_reviewsubmitRegINTL$/, () => {
        return latPageObj
            .waitForElementPresent('@checkout_RS_paymentInfo_class' , timeout_median)
  });

/****************** SHIPPING METHOD ************************************************************/  

Given(/^I am on the Review&Submit page to update shipping method -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_shippingMethodINTL_class' , timeout_median)
});
When(/^I select a different shipping methods -LAT_reviewsubmitRegINTL$/, () => {
        return latPageObj
            .waitForElementPresent('@checkout_RS_shippingMethodINTL_optionB_css', timeout_min)
            .click('@checkout_RS_shippingMethodINTL_optionB_css')
});
Then(/^the page should refresh -LAT_reviewsubmitRegINTL$/, () => {
        return client
            .pause(pauseTime_median)
});
/*
Then(/^validate shipping method change -LAT_reviewsubmitRegINTL$/, () => {
        return latPageObj
            .waitForElementPresent('@checkout_RS_shippingMethodSelected_class', timeout_min)
            .assert.containsText('@checkout_RS_shippingMethodSelected_class', checkout_shippingMethod)
});*/

/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

Given(/^I am on the REVIEW & SUBMIT page -LAT_reviewsubmitRegINTL$/, () => { 
    return latPageObj
        .waitForElementVisible('@checkout_RS_billingAddress_class', timeout_median)
        .waitForElementVisible('@checkout_RS_paymentInfo_class', timeout_median)
        .waitForElementVisible('@checkout_RS_shippingAddress_class', timeout_median)
        .waitForElementVisible('@checkout_RS_shippingMethodINTL_class', timeout_median)
        .assert.containsText('@widebag_itemDesc_class', product_desc_item1)
        .waitForElementVisible('@orderSummary_total_css', timeout_min)
        .assert.containsText('@orderSummary_total_css', Intl_currency_optionA)
        .waitForElementVisible('@checkout_RS_CVV_css', timeout_median)
        .setValue('@checkout_RS_CVV_css',checkout_CVC3digits)
});
Then(/^I entered the security code  -LAT_reviewsubmitRegINTL$/, () => { 
    return client
        .pause(pauseTime_min)
});
When(/^I click on the PLACE ORDER button -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@checkout_RS_placeOrder_btn', timeout_median)
        .click('@checkout_RS_placeOrder_btn')
  });
Then(/^I should be redirected to THANK YOU page -LAT_reviewsubmitRegINTL$/, () => {
    return client
        .pause(pauseTime_min)
});
Then(/^there should be an Order number -LAT_reviewsubmitRegINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@thankyou_header_class', timeout_median)
        .assert.containsText('@thankyou_header_class', thankyou_header) 
        .waitForElementVisible('@thankyou_details_css', timeout_median)
        .assert.containsText('@thankyou_details_css', thankyou_orderNumber)
});
