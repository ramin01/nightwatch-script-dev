const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var deleteKey = client.globals.latConstants.deleteKey;

var homepageTitle = client.globals.latConstants.homepageTitle;
var username3 = client.globals.latConstants.username3;
var password = client.globals.latConstants.password;
var product_ID_item1 = client.globals.latConstants.product_ID_item1;
var product_desc_item1 = client.globals.latConstants.product_desc_item1;
var bag_pagetitle = client.globals.latConstants.bag_pagetitle;
var product_qty_optionA_item1 = client.globals.latConstants.product_qty_optionA_item1;
var product_size_optionC_item1 = client.globals.latConstants.product_size_optionC_item1;

var thankyou_header =client.globals.latConstants.thankyou_header;
var thankyou_orderNumber =client.globals.latConstants.thankyou_orderNumber;
var checkout_addressStreet_optionB= client.globals.latConstants.checkout_addressStreet_optionB;
var checkout_city_optionB = client.globals.latConstants.checkout_city_optionB;
var checkout_zip_optionB= client.globals.latConstants.checkout_zip_optionB;
var checkout_paymentType_optionB =client.globals.latConstants.checkout_paymentType_optionB;
var promoCode =client.globals.latConstants.promoCode;
var promoCodeText =client.globals.latConstants.promoCodeText;
var promoSavingsText =client.globals.latConstants.promoSavingsText;
var checkout_shippingMethod_optionA =client.globals.latConstants.checkout_shippingMethod_optionA;

var timeout_median = client.globals.latConstants.timeout_median
var pauseTime_median = client.globals.latConstants.pauseTime_median
var timeout_max = client.globals.latConstants.timeout_max
var pauseTime_max = client.globals.latConstants.pauseTime_max
var timeout_min = client.globals.latConstants.timeout_min
var pauseTime_min = client.globals.latConstants.pauseTime_min

/****************** search by web id *********************************************************/  

Given(/^I am on the website -LAT_reviewsubmitReg$/, () => {
    return client
        .url(qaUrl)      
        .waitForElementVisible('#saksOverlay', timeout_median)
        .click('#saksOverlay')
        .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
        .assert.title(homepageTitle )   
});
When(/^I enter this product id -LAT_reviewsubmitReg$/, () => {
    return latPageObj 
        .assert.visible('@header_searchBar_class') 
        .setValue('@header_searchBar_class', product_ID_item1)
        .click('@header_searchSubmit_btn') 
});
Then(/^I should be taken to a PDP of this product -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementPresent('@prod_desc_class', timeout_median)
});

/****************** add to bag on PDP ************************************************************/   

Given(/^I am on a Product Detail Page -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementVisible('@prod_desc_class', timeout_median)
        .assert.containsText('@prod_desc_class', product_desc_item1)
});
When(/^I select a color, size, quantity “1” -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .assert.visible('@pdp_color_class')
        .assert.visible('@pdp_size_class')
        //.click('@pdp_colorItem1_css')
        .click('@pdp_size_optionA_item1_css')
});
Then(/^click the ADD TO BAG button -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .click('@pdp_addtobag_btn')  
});
Then(/^the item appears in the mini cart -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementVisible('@minicart_overlay_css', timeout_median)
        .waitForElementVisible('@minicart_subtotal_css', timeout_median)
});
/****************** open sign in overlay on bag page *****************************************************/  


Given(/^I have an item in the mini cart -LAT_reviewsubmitReg$/, () => {
     return latPageObj
        .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
        .assert.containsText('@minicart_itemDetails_css', product_desc_item1)
        .waitForElementPresent('@minicart_checkout_css' , timeout_min)
        .click('@minicart_checkout_css')
});
Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementVisible('@bag_title_css', timeout_min)
        .assert.containsText('@bag_title_css', bag_pagetitle) 
        .waitForElementVisible('@widebag_itemDesc_class', timeout_min)
        .assert.containsText('@widebag_itemDesc_class', product_desc_item1)   
        .waitForElementVisible('@widebag_itemPrice_class', timeout_min)
        .waitForElementVisible('@orderSummary_total_css', timeout_min)
        .waitForElementVisible('@bag_checkout_css', timeout_median)
});
When(/^I click on the CHECKOUT button on the Bag page -LAT_reviewsubmitReg$/, () => {
    return client
        .execute('scrollTo(0, 6000)') 
});
Then(/^a sign in overlay pops up -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .click('@bag_checkout_css')
        .waitForElementVisible('@bag_loginOverlay_css', timeout_median)
});

/****************** log into registered account via bag page *****************************************************/  

Given(/^I am on the BAG page with a sign in overlay open -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementVisible('@bag_emailEntry_css', timeout_median)
        .waitForElementVisible('@bag_passwordEntry_css', timeout_median)
  });
Then(/^I enter a valid email address and password -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .setValue('@bag_emailEntry_css', username3)
        .setValue('@bag_passwordEntry_css', password)
});
When(/^I click on the SIGN IN & CHECKOUT button on sign in overlay -LAT_reviewsubmitReg/, () => {
    return latPageObj
        .click('@bag_loginCheckout_btn')
});
Then(/^I should be redirected to the review page -LAT_reviewsubmitReg$/, () => {
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
        .click('@checkout_RS_navTab_css')
});

/****************** change quantity ************************************************************/   

Given(/^I am on the Review&Submit page to update the item info -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementVisible('@checkout_RS_billingAddress_class',timeout_median)
        //.waitForElementVisible('@checkout_RS_paymentInfo_class',timeout_median)
        //.waitForElementVisible('@checkout_RS_shippingAddress_class',timeout_median)
        //.waitForElementVisible('@checkout_RS_shippingMethod_class', timeout_median)
        .assert.containsText('@widebag_itemDesc_class', product_desc_item1) 
        .waitForElementPresent('@widebag_itemQtyEntry_class' , timeout_median) 
        .click('@widebag_itemQtyEntry_class')
});
When(/^I update the following product information on the R&S page: -LAT_reviewsubmitReg$/, () => {
    client.keys(deleteKey)
    return client
        //.clearValue('input[name=itemQuantity]')
        .setValue('input[name=itemQuantity]', product_qty_optionA_item1)
        .pause(pauseTime_max)
});
Then(/^I should see the product information updated on the R&S  page: -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementVisible('@widebag_headingItemsQty_css', timeout_median) 
});
Then(/^validate calculation change in order total -LAT_reviewsubmitReg$/,() => {
    return latPageObj
        .assert.containsText('@widebag_headingItemsQty_css', product_qty_optionA_item1)
});


  
/****************** change size of the items on product overlay ************************************************************/  


Given(/^I am on the Review&Submit page to edit item details -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementPresent('@widebag_items_class', timeout_median)
        .waitForElementPresent('@widebag_editIcon_css', timeout_median)    
        .click('@widebag_editIcon_css')
});
Then(/^I access the item overlay by the EDIT button -LAT_reviewsubmitReg$/, () => {
   return client
        .pause(pauseTime_median)
});
When(/^I update the following product information on the overlay -LAT_reviewsubmitReg$/, () => {
   return latPageObj
        .waitForElementPresent('@quicklook_overlay_class' , timeout_median)
        .waitForElementPresent('@quicklook_desc_css' , timeout_median)
        .assert.containsText('@quicklook_desc_css',product_desc_item1)
        .waitForElementPresent('@quicklook_sizeItem1_css' , timeout_median)
        .click('@quicklook_sizeItem1_css' )
        .waitForElementPresent('@quicklook_apply_btn',timeout_median )
        .click('@quicklook_apply_btn')
});
Then(/^wait for page to refresh -LAT_reviewsubmitReg$/, () => {
  return client
        .pause(pauseTime_median)
});
Then(/^I should see the product information change on the R&S page -LAT_reviewsubmitReg$/, () => {
  return latPageObj
        .waitForElementPresent('@widebag_items_class', timeout_median)
        .waitForElementPresent('@widebag_itemSize_css', timeout_median)
        .assert.containsText('@widebag_itemSize_css',product_size_optionC_item1)
});

/****************** apply promo code ************************************************************/  
Given(/^I have an item on the bag page that is promo eligible -LAT_reviewsubmitReg$/, () => {
    return latPageObj
      .waitForElementPresent('@promo_css' ,timeout_min)
      .waitForElementPresent('@promo_entry_css', timeout_median)
});
When(/^I apply this promo code -LAT_reviewsubmitReg$/, () => {
    return client
      .setValue('input[name=promoCode]', promoCode)
});
Then(/^I should see the discount being applied on the item level -LAT_reviewsubmitReg$/, () => {
    return latPageObj
      .click('@promo_apply_btn')
      .waitForElementPresent('@widebag_itemPromo_class', timeout_median)
      .assert.containsText('@widebag_itemPromo_class', promoCodeText)
});

/****************** BILLING ADDRESS -SELECT AN EXISTING ************************************************************/  

Given(/^I am on the Review&Submit page to update existing billing address -LAT_reviewsubmitReg$/,() =>{
  return latPageObj
        .waitForElementPresent('@checkout_RS_billingAddress_class' , timeout_median)
        
});
Then(/^I click on EDIT under the Billing Address to open the overlay -LAT_reviewsubmitReg$/,() => {
    client.execute(function() {
        document.querySelector('.jsEditBillAddress').click() 
     });
    return client
        .pause(pauseTime_median)
}); 
When(/^I Select an Existing Address option in the billing overlay -LAT_reviewsubmitReg$/ ,() => {
    return latPageObj
    .waitForElementPresent('@checkout_RS_billingOverlay_css' , timeout_median)    
    .waitForElementPresent('@checkout_RS_selectExistBillAddress_css' , timeout_median)    
    
});
Then(/^refresh after selecitng existing address -LAT_reviewsubmitReg$/ ,() => {
    client.execute(function() {
        document.querySelector('#jsBillingAddressLayerWrap > div.modal-content > div > div > div:nth-child(1) > label > span').click()   
     });
    return client
      .pause(pauseTime_median)
}); 

Then(/^Select an Existing Address from the dropdwon menu in the billing overlay -LAT_reviewsubmitReg$/ ,() => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_selectExistBillAddress_optionB_css' , timeout_median)    
        .click('@checkout_RS_selectExistBillAddress_optionB_css')
        .waitForElementPresent('@checkout_RS_billOverlayApply_btn' , timeout_median)
        .click('@checkout_RS_billOverlayApply_btn')
  
});
Then(/^click APPLY to save the billing address changes -LAT_reviewsubmitReg$/ ,() => {
    return client
        .pause(pauseTime_median)
});
Then(/^the page should refresh and reflect the new billing address -LAT_reviewsubmitReg$/ ,() => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_billingAddress_class' , timeout_median)
        .assert.containsText('@checkout_RS_billingAddressStreet_css', checkout_addressStreet_optionB)
        .assert.containsText('@checkout_RS_billingAddressCity_css', checkout_city_optionB)
        .assert.containsText('@checkout_RS_billingAddressZip_css', checkout_zip_optionB)
});

/****************** SHIPPING ADDRESS -SELECT AN EXISTING ************************************************************/  

Given(/^I am on the Review&Submit page to update existing shipping address -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_shippingAddress_class', timeout_median)
});
Then(/^I click on EDIT under the Shipping Address to open the overlay -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_shippingEdit_class', timeout_min)  
        .click('@checkout_RS_shippingEdit_class')
        .waitForElementPresent('@checkout_RS_shippingOverlay_css', timeout_median)
        .waitForElementPresent('@checkout_RS_selectExistShipAddress_css', timeout_min)
        .click('@checkout_RS_selectExistShipAddress_css') 
});
When(/^I Select an Existing Address option in the shipping overlay -LAT_reviewsubmitReg$/, () => {
    return client
        .pause(pauseTime_median) 
});
Then(/^Select an Existing Address from the dropdwon menu in the shipping overlay -LAT_reviewsubmitReg$/ ,() => {
  return latPageObj
        .waitForElementPresent('@checkout_RS_selectExistShipAddress_optionB_css', timeout_min)
        .click('@checkout_RS_selectExistShipAddress_optionB_css') 
        .waitForElementPresent('@checkout_RS_shippingOverlayApply_css' , timeout_min)
        .click('@checkout_RS_shippingOverlayApply_css')
});
Then(/^click APPLY to save the shipping address changes -LAT_reviewsubmitReg$/, () => {
    return client
        .pause(pauseTime_median)
});
Then(/^the page should refresh and reflect the new shipping address -LAT_reviewsubmitReg$/, () => {
  return latPageObj    
        .waitForElementPresent('@checkout_RS_shippingAddress_class' , timeout_min)
        .assert.containsText('@checkout_RS_shippingAddressStreet_css', checkout_addressStreet_optionB)
        .assert.containsText('@checkout_RS_shippingAddressCity_css', checkout_city_optionB)
        .assert.containsText('@checkout_RS_shippingAddressZip_css', checkout_zip_optionB)
  });

/****************** PAYMENT TYPE - enter a new Payment Type ************************************************************/  

Given(/^I am on the Review&Submit page and to edit payment type -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementVisible('@checkout_RS_paymentInfo_class',timeout_median)
        .waitForElementPresent('@checkout_RS_paymentEdit_class' , timeout_median)
});
Then(/^I click on EDIT under the PAYMENT TYPE to open the overlay -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .click('@checkout_RS_paymentEdit_class')
        .waitForElementPresent('@checkout_RS_paymentOverlay_css', timeout_median)
        .waitForElementPresent('@checkout_RS_selectExistPayment_css', timeout_min)
});
When(/^I click on Payment Type to open dropdown menu -LAT_reviewsubmitReg$/, () => {
    client.execute(function() {
        document.querySelector('#creditCardId').click() 
     });
    return client
        .pause(pauseTime_median)
}); 
Then(/^I select a different card from the dropdown menu -LAT_reviewsubmitReg$/,()=>{
    return latPageObj
        .waitForElementPresent('@checkout_RS_selectExistPayment_optionB_css', timeout_median)
        .click('@checkout_RS_selectExistPayment_optionB_css')
        .waitForElementPresent('@checkout_paymentOverlayApply_btn', timeout_min)
        .click('@checkout_paymentOverlayApply_btn')
});
Then(/^click APPLY button -LAT_reviewsubmitReg$/, () => {
    return client
        .pause(pauseTime_max)
        .execute('scrollTo(0,0)')
});
Then(/^the page should refresh and reflect the new payment method -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_paymentInfo_class' , timeout_max)
        .assert.containsText('@checkout_RS_paymentType_css',checkout_paymentType_optionB)
});

/****************** SHIPPING METHOD ************************************************************/  

Given(/^I am on the Review&Submit page to update shipping method -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_shippingMethod_class' , timeout_median)
        .waitForElementPresent('@checkout_RS_shippingMethodDetails_class',timeout_min)
});
When(/^I select a different shipping methods -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_shippingMethod_optionB_css', timeout_min)
});
Then(/^the page should refresh -LAT_reviewsubmitReg$/, () => {
    client.execute(function() {
        document.querySelector('div.grid.grid-parent.select-shipping-method.jsAddressLevelShipping > div:nth-child(2) > label').click()  
     });
 return client
        .pause(pauseTime_max)
}); 
Then(/^validate shipping method change -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementPresent('@checkout_RS_shippingMethodSelected_class', timeout_median)
        .assert.containsText('@checkout_RS_shippingMethodSelected_class', checkout_shippingMethod_optionA)
});

/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

Given(/^I am on the REVIEW & SUBMIT page -LAT_reviewsubmitReg$/, () => { 
    return latPageObj
        .waitForElementVisible('@checkout_RS_billingAddress_class',timeout_median)
        .waitForElementVisible('@checkout_RS_paymentInfo_class',timeout_median)
        .waitForElementVisible('@checkout_RS_shippingAddress_class',timeout_median)
        .waitForElementVisible('@checkout_RS_shippingMethod_class', timeout_median)
        .assert.containsText('@widebag_itemDesc_class', product_desc_item1) 
});
When(/^I click on the PLACE ORDER button -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementVisible('@checkout_RS_placeOrder_btn', timeout_median)
        .click('@checkout_RS_placeOrder_btn')
});
Then(/^I should be redirected to THANK YOU page -LAT_reviewsubmitReg$/, () => {
    return client
        .pause(pauseTime_median)
});
Then(/^there should be an Order number -LAT_reviewsubmitReg$/, () => {
    return latPageObj
        .waitForElementVisible('@thankyou_header_class', timeout_median)
        .assert.containsText('@thankyou_header_class', thankyou_header) 
        .waitForElementVisible('@thankyou_details_css', timeout_median)
        .assert.containsText('@thankyou_details_css', thankyou_orderNumber) 
});;
