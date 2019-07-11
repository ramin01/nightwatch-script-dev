const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var deleteKey = client.globals.latConstants.deleteKey;

var homepageTitle = client.globals.latConstants.homepageTitle;
var username = client.globals.latConstants.username;
var product_ID_item1 = client.globals.latConstants.product_ID_item1;
var product_desc_item1 = client.globals.latConstants.product_desc_item1;
var bag_pagetitle = client.globals.latConstants.bag_pagetitle;
var product_qty_optionA_item1 = client.globals.latConstants.product_qty_optionA_item1;
var product_size_optionC_item1 = client.globals.latConstants.product_size_optionC_item1;
var product_pagetitle_item1 =client.globals.latConstants.product_pagetitle_item1
var thankyou_header =client.globals.latConstants.thankyou_header;
var thankyou_orderNumber =client.globals.latConstants.thankyou_orderNumber;
var checkout_firstName = client.globals.latConstants.checkout_firstName;
var checkout_lastName= client.globals.latConstants.checkout_lastName;
var checkout_addressStreet_optionA= client.globals.latConstants.checkout_addressStreet_optionA;
var checkout_addressStreet_optionB= client.globals.latConstants.checkout_addressStreet_optionB;
var checkout_city_optionA = client.globals.latConstants.checkout_city_optionA;
var checkout_city_optionB = client.globals.latConstants.checkout_city_optionB;
var checkout_zip_optionA= client.globals.latConstants.checkout_zip_optionA;
var checkout_zip_optionB= client.globals.latConstants.checkout_zip_optionB;
var checkout_phone= client.globals.latConstants.checkout_phone;
var checkout_ccNumber_optionA =client.globals.latConstants.checkout_ccNumber_optionA;
var checkout_ccNumber_optionB =client.globals.latConstants.checkout_ccNumber_optionB;
var checkout_paymentType_optionB =client.globals.latConstants.checkout_paymentType_optionB;
var checkout_CVC3digits =client.globals.latConstants.checkout_CVC3digits;
var checkout_ccName =client.globals.latConstants.checkout_ccName;
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

Given(/^I am on the website -LAT_reviewsubmitGuest$/, () => {
  return client
    .url(qaUrl)       
    .waitForElementVisible('#saksOverlay', timeout_median)
    .click('#saksOverlay')
    .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)   
});
When(/^I enter this product id -LAT_reviewsubmitGuest$/, () => {      
  return latPageObj
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', product_ID_item1)
    .click('@header_searchSubmit_btn') 
});
Then(/^I should be taken to a PDP of this product -LAT_reviewsubmitGuest$/, () => {    
  return latPageObj
    .waitForElementPresent('@prod_desc_class', timeout_median)
    
});

/****************** add to bag on PDP ************************************************************/   

Given(/^I am on a Product Detail Page -LAT_reviewsubmitGuest$/, () => {    
  return latPageObj
    .waitForElementVisible('@prod_desc_class', timeout_median)
    .assert.containsText('@prod_desc_class', product_desc_item1)
});
When(/^I select a color, size, quantity “1” -LAT_reviewsubmitGuest$/, () => {    
  return latPageObj
    .assert.visible('@pdp_color_class')
    .assert.visible('@pdp_size_class')
    //.click('@pdp_color_optionA_item1_css')
    .click('@pdp_size_optionA_item1_css')
});
When(/^click the ADD TO BAG button -LAT_reviewsubmitGuest$/, () => {   
  return latPageObj
    .click('@pdp_addtobag_btn')  
});
Then(/^the item appears in the mini cart -LAT_reviewsubmitGuest$/, () => {    
  return latPageObj
    .waitForElementVisible('@minicart_overlay_css', timeout_min)
    .waitForElementVisible('@minicart_subtotal_css', timeout_median)
});
 
/****************** open sign in overlay on bag page *****************************************************/  

Given(/^I have an item in the mini cart -LAT_reviewsubmitGuest$/, () => {    
  return latPageObj
    .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
    .assert.containsText('@minicart_itemDetails_css', product_desc_item1)
    .waitForElementPresent('@minicart_checkout_css' , timeout_min)
    .click('@minicart_checkout_css')
});
Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_reviewsubmitGuest$/, () => {    
  return latPageObj
    .waitForElementVisible('@bag_title_css', timeout_median)
    .assert.containsText('@bag_title_css', bag_pagetitle) 
    .waitForElementVisible('@widebag_itemDesc_class', timeout_min)
    .assert.containsText('@widebag_itemDesc_class', product_desc_item1)   
    .waitForElementVisible('@widebag_itemPrice_class', timeout_min)
    .waitForElementVisible('@orderSummary_total_css', timeout_min)
    .waitForElementVisible('@bag_checkout_css', timeout_median)
});
When(/^I click on the CHECKOUT button on the Bag page -LAT_reviewsubmitGuest$/, () => {    
  return client
    .execute('scrollTo(0, 6000)') 
});
Then(/^a sign in overlay pops up -LAT_reviewsubmitGuest$/, () => {   
  return latPageObj
    .click('@bag_checkout_css')
    .waitForElementVisible('@bag_loginOverlay_css', timeout_median)
});

/****************** guest checkout – input info on SHIPPING & BILLING page  *****************************************************/  

Given(/^I am on the BAG page with a sign in overlay open -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_loginGuestCheckout_btn', timeout_median)
    .click('@bag_loginGuestCheckout_btn')
});
Then(/^I access the SHIPPING & BILLING page via CHECKOUT AS GUEST -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_SB_navTab_css',timeout_median)   
    .waitForElementVisible('@checkout_SB_header_css',timeout_median)   
});
When(/^I enter First Name, Last Name, Address Line 1, City -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_firstName_css',timeout_median)   
    .setValue('@checkout_firstName_css',checkout_firstName) 
    .setValue('@checkout_lastName_css',checkout_lastName) 
    .setValue('@checkout_addressLine1_css',checkout_addressStreet_optionA) 
    .setValue('@checkout_city_css',checkout_city_optionA) 
    .waitForElementVisible('@checkout_state_optionA_css',timeout_median)   
});
Then(/^select a state from the State dropdown menu -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .click('@checkout_state_optionA_css') //value preselected in pageObj
});
Then(/^enter Zip Code, Address, Phone Number -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .setValue('@checkout_zip_css', checkout_zip_optionA) 
    .setValue('@checkout_SB_email_css', username)
    .setValue('@checkout_phone_css', checkout_phone)
});
Then(/^click on the CONTINUE CHECKOUT button -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_SB_continue_btn',timeout_median)
    .click('@checkout_SB_continue_btn') 
});
Then(/^I should be redirected to the PAYMENT page -LAT_reviewsubmitGuest$/, () => {   
  return latPageObj
    .waitForElementVisible('@checkout_P_navTab_css',timeout_median)
});

/****************** guest checkout – input info on PAYMENT page  *****************************************************/  

Given(/^I am on the PAYMENT page -LAT_reviewsubmitGuest$/, () => {  
  return latPageObj
    .waitForElementVisible('@checkout_P_paymentForm_css',timeout_median)
});
When(/^I select a Payment Type from the dropdown menu -LAT_reviewsubmitGuest$/, () => {    
  return latPageObj
    .waitForElementVisible('@checkout_paymentType_css',timeout_min)
    .waitForElementVisible('@checkout_paymentType_optionA_css',timeout_min)
    .click('@checkout_paymentType_optionA_css')
});
Then(/^enter Credit Card Number, Name on Card -LAT_reviewsubmitGuest$/, () => {  
  return latPageObj
    .setValue('@checkout_ccNumber_css', checkout_ccNumber_optionA)
    .setValue('@checkout_ccName_css',checkout_ccName)
});
Then(/^select Credit Card Expiration Month and Year from the dropdown menu -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .click('@checkout_ccMonth_optionA_css')
    .click('@checkout_ccYear_optionA_css')
});
Then(/^enter Security Code -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .setValue('@checkout_CVV_css',checkout_CVC3digits)
});
Then(/^click on the  CHECKOUT button -LAT_reviewsubmitGuest$/, () => { 
  return latPageObj
    .click('@checkout_P_continue_btn')
});
Then(/^I should be redirected to the REVIEW & SUBMIT page -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_RS_navTab_css',timeout_min)
});

/****************** change quantity ************************************************************/   

Given(/^I am on the Review&Submit page to update the item info -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_RS_billingAddress_class',timeout_median)
    //.waitForElementVisible('@checkout_RS_paymentInfo_class',timeout_median)
    //.waitForElementVisible('@checkout_RS_shippingAddress_class',timeout_median)
    //.waitForElementVisible('@checkout_RS_shippingMethod_class', timeout_median)
    .assert.containsText('@widebag_itemDesc_class', product_desc_item1) 
    .waitForElementPresent('@widebag_itemQtyEntry_class' , timeout_median) 
    .click('@widebag_itemQtyEntry_class')
});
When(/^I update the following product information on the R&S page: -LAT_reviewsubmitGuest$/, () => {
  client.keys(deleteKey)
  return client
    //.click('.widebag-item-quantity-field')
    //.clearValue('.widebag-item-quantity-field')
    .setValue('input[name=itemQuantity]', product_qty_optionA_item1)
    .pause(timeout_median)
});
Then(/^I should see the product information updated on the R&S page:  -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementVisible('@widebag_headingItemsQty_css', timeout_median) 
});
Then(/^validate calculation change in order total -LAT_reviewsubmitGuest$/,() => {
  return latPageObj
    .assert.containsText('@widebag_headingItemsQty_css', product_qty_optionA_item1)
});

/****************** change size of the items on product overlay ************************************************************/  

Given(/^I am on the Review&Submit page to edit item details -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@widebag_items_class', timeout_median)
    .waitForElementPresent('@widebag_editIcon_css', timeout_min)    
    .click('@widebag_editIcon_css')
});
Then(/^I access the item overlay by the EDIT button -LAT_reviewsubmitGuest$/, () => {
  return client
    .pause(pauseTime_max)
});
When(/^I update the following product information on the overlay -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@quicklook_overlay_class' , timeout_median)
    .waitForElementPresent('@quicklook_desc_css' , timeout_median)
    .assert.containsText('@quicklook_desc_css',product_desc_item1)
    .waitForElementPresent('@quicklook_sizeItem1_css' , timeout_median)
    .click('@quicklook_sizeItem1_css' )
    .waitForElementPresent('@quicklook_apply_btn',timeout_median )
    .click('@quicklook_apply_btn')
});
Then(/^wait for page to refresh -LAT_reviewsubmitGuest$/, () => {
  return client
    .pause(pauseTime_max)
});
Then(/^I should see the product information change on the R&S page -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@widebag_items_class', timeout_median)
    .waitForElementPresent('@widebag_itemSize_css', timeout_median)
    .assert.containsText('@widebag_itemSize_css',product_size_optionC_item1)
});


/****************** apply promo code ************************************************************/  

Given(/^I am on the Review&Submit page that is promo eligible -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_RS_promo_top_class', timeout_max)
    .waitForElementVisible('@checkout_RS_promoEdit_css', timeout_max)
    .click('@checkout_RS_promoEdit_css')
});
Then(/^I click on the Edit Button in the promo section on the top of the page -LAT_reviewsubmitGuest$/, () => {
  return client
    .pause(pauseTime_min)
    .waitForElementPresent('#jsEditPromoCode', timeout_min) 
    .setValue('input[name=promoCode]', promoCode)
});
Then(/^a promo edit overlay opens -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_promoOverlayApply_btn', timeout_median)
    .click('@checkout_RS_promoOverlayApply_btn')
});
When(/^I apply this promo code on the promo edit overlay -LAT_reviewsubmitGuest$/, () => {
  return client
    .pause(pauseTime_median)
});
Then(/^I close the promo edit overlay -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_promoOverlayClose_btn', timeout_median)
    .moveToElement('@checkout_RS_promoOverlayClose_btn', 100, 400)
  //  .click('@checkout_RS_promoOverlayClose_btn')
});
Then(/^I should see the discount being applied on the item level -LAT_reviewsubmitGuest$/, () => {
  client.execute(function() {
    document.querySelector('#jsEditPromoCode > div.modal-header > a').click()
 });
return client
    .pause(pauseTime_median)
}); 
Then(/^validate promo change in order total -LAT_reviewsubmitGuest$/ , () =>{
  return latPageObj
    .waitForElementPresent('@widebag_items_class', timeout_median)
    .waitForElementPresent('@widebag_itemPromo_class', timeout_median)
    .assert.containsText('@widebag_itemPromo_class', promoCodeText)
    //.waitForElementPresent('@orderSummary_class', timeout_median)
    //.waitForElementPresent('@orderSummary_promoSavings_css', timeout_median)
    //.assert.containsText('@orderSummary_promoSavings_css', promoSavingsText)
});



/****************** BILLING ADDRESS - enter a new billing address ************************************************************/  

Given(/^I am on the Review&Submit page to enter a new billing address -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_billingAddress_class' , timeout_min)
    .click('@checkout_RS_billingEdit_class') 
});
Then(/^I click on EDIT under the Billing Address to open the overlay -LAT_reviewsubmitGuest$/,() => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_billingOverlay_css' , timeout_median)    
    .waitForElementPresent('@checkout_RS_enterNewBillAddress_css' , timeout_min)    
    .click('@checkout_RS_enterNewBillAddress_css')
    .waitForElementPresent('@checkout_RS_newBillFirstName_css' , timeout_min)
    .waitForElementPresent('@checkout_RS_newBillCountry_optionA_css' , timeout_min)
    .click('@checkout_RS_newBillCountry_optionA_css')
});
When(/^Select a NEW BILLING ADDRESS in the overlay -LAT_reviewsubmitGuest$/, () => {
  return client  
    .pause(pauseTime_min)
});
Then(/^complete the billing address form -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .clearValue('@checkout_RS_newBillFirstName_css')
    .setValue('@checkout_RS_newBillFirstName_css',checkout_firstName)
    .clearValue('@checkout_RS_newBillLastName_css')
    .setValue('@checkout_RS_newBillLastName_css',checkout_lastName)
    .clearValue('@checkout_RS_newBillAddressStreet_css')
    .setValue('@checkout_RS_newBillAddressStreet_css',checkout_addressStreet_optionB)
    .clearValue('@checkout_RS_newBillCity_css')
    .setValue('@checkout_RS_newBillCity_css',checkout_city_optionB)
    .waitForElementPresent('@checkout_RS_newBillState_optionB_css' , timeout_min)
    .click('@checkout_RS_newBillState_optionB_css')
    .clearValue('@checkout_RS_newBillZip_css')
    .setValue('@checkout_RS_newBillZip_css',checkout_zip_optionB)
    .clearValue('@checkout_RS_newBillPhone_css')
    .setValue('@checkout_RS_newBillPhone_css',checkout_phone)
    .waitForElementPresent('@checkout_RS_billOverlayApply_btn' , timeout_min)
    .click('@checkout_RS_billOverlayApply_btn')
});
Then(/^click APPLY to save the billing address changes -LAT_reviewsubmitGuest$/ ,() => {

  return client
    .pause(pauseTime_max)
});
Then(/^the page should refresh and reflect the new billing address -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_billingAddress_class' , timeout_median)
    .assert.containsText('@checkout_RS_billingAddressStreet_css', checkout_addressStreet_optionB)
    .assert.containsText('@checkout_RS_billingAddressCity_css', checkout_city_optionB)
    .assert.containsText('@checkout_RS_billingAddressZip_css', checkout_zip_optionB)
});

/****************** SHIPPING ADDRESS - enter a new shipping address ************************************************************/  

Given(/^I am on the Review&Submit page to enter a new shipping Address -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_shippingAddress_class', timeout_median) 
});
When(/^I click on EDIT under the Shipping Address to open the overlay -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_shippingEdit_class', timeout_median)      
});
Then(/^Select a NEW SHIPPING ADDRESS in the overlay -LAT_reviewsubmitGuest$/, () => {
  client.execute(function() {
    document.querySelector('.jsChangeShipAddress').click()  
 });
return client
    .pause(pauseTime_max)
}); 
Then(/^complete the shipping address form -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_shippingOverlay_css', timeout_median)
    .click('@checkout_RS_enterNewShipAddress_css') 
    .waitForElementVisible('@checkout_firstName_css',timeout_min)
    .setValue('@checkout_firstName_css',checkout_firstName) //taken from shipping pageObj
    .setValue('@checkout_lastName_css',checkout_lastName)
    .setValue('@checkout_addressLine1_css',checkout_addressStreet_optionB)
    .setValue('@checkout_city_css',checkout_city_optionB)
    .waitForElementVisible('@checkout_state_optionB_css',timeout_min)
    .click('@checkout_state_optionB_css')
    .setValue('@checkout_zip_css',checkout_zip_optionB)
    .setValue('@checkout_phone_css',checkout_phone) //taken from shipping pageObj
    .waitForElementPresent('@checkout_RS_shippingOverlayApply_css' , timeout_min)
    .click('@checkout_RS_shippingOverlayApply_css')
});
Then(/^click APPLY to save the shipping address changes -LAT_reviewsubmitGuest$/, () => {
  return client
    .pause(pauseTime_max)
});
Then(/^the page should refresh and reflect the new shipping address -LAT_reviewsubmitGuest$/, () => {
  return latPageObj    
    .waitForElementPresent('@checkout_RS_shippingAddress_class' , timeout_min)
    .assert.containsText('@checkout_RS_shippingAddressStreet_css', checkout_addressStreet_optionB)
    .assert.containsText('@checkout_RS_shippingAddressCity_css', checkout_city_optionB)
    .assert.containsText('@checkout_RS_shippingAddressZip_css', checkout_zip_optionB)
});



/****************** PAYMENT TYPE - enter a new Payment Type ************************************************************/  

Given(/^I am on the Review&Submit page to enter a new Payment Type -LAT_reviewsubmitGuest$/, () => {  
  return latPageObj
    .waitForElementVisible('@checkout_RS_paymentInfo_class',timeout_median)
    .waitForElementPresent('@checkout_RS_paymentEdit_class' , timeout_median)
    .moveToElement('@checkout_RS_paymentEdit_class', 100, 400)  
   
});
When(/^I click on EDIT under the PAYMENT TYPE to open the overlay -LAT_reviewsubmitGuest$/, () => {    
  client.execute(function() {
    document.querySelector('.jsEditCreditCard').click()  
 });
return client
    .pause(pauseTime_max)
}); 
Then(/^select NEW PAYMENT TYPE in the overlay -LAT_reviewsubmitGuest$/, () => {  
  return latPageObj
  .waitForElementPresent('@checkout_RS_paymentOverlay_css', timeout_median)
  .waitForElementPresent('@checkout_RS_newPaymentType_css', timeout_median) 
}); 

Then(/^wait for page refresh -LAT_reviewsubmitGuest$/, () => {

  client.execute(function() {
    document.querySelector('#newCreditCard-wrap > label').click() 
    client.pause(pauseTime_max)
 });
return client
    .pause(pauseTime_max)
}); 

Then(/^complete the payment form -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_paymentType_optionB_css', timeout_median)
    .click('@checkout_paymentType_optionB_css')
    .waitForElementPresent('@checkout_ccNumber_css', timeout_median)
    .setValue('@checkout_ccNumber_css', checkout_ccNumber_optionB)
    .setValue('@checkout_ccName_css',checkout_ccName)
    .click('@checkout_ccMonth_optionA_css')
    .click('@checkout_ccYear_optionA_css')
    .setValue('@checkout_CVV_css',checkout_CVC3digits)
    .waitForElementPresent('@checkout_paymentOverlayApply_btn', timeout_min)
    .click('@checkout_paymentOverlayApply_btn')
  });

Then(/^click APPLY button -LAT_reviewsubmitGuest$/, () => {
  return client
    .pause(pauseTime_max)
});
Then(/^the page should refresh and reflect the new payment method -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_paymentInfo_class' , timeout_median)
    .assert.containsText('@checkout_RS_paymentType_css',checkout_paymentType_optionB)
});
/****************** SHIPPING METHOD ************************************************************/  

Given(/^I am on the Review&Submit page to update shipping method -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_shippingMethod_class' , timeout_median)
    .waitForElementPresent('@checkout_RS_shippingMethodDetails_class',timeout_median)
});
When(/^I select a different shipping methods -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_shippingMethod_optionB_css', timeout_median)
    .click('@checkout_RS_shippingMethod_optionB_css')
});
Then(/^the page should refresh -LAT_reviewsubmitGuest$/, () => {
  client.execute(function() {
    document.querySelector('div.grid.grid-parent.select-shipping-method.jsAddressLevelShipping > div:nth-child(2) > label').click()  
 });
return client
    .pause(pauseTime_max)
}); 
Then(/^validate shipping method change -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_shippingMethodSelected_class', timeout_median)
    .assert.containsText('@checkout_RS_shippingMethodSelected_class', checkout_shippingMethod_optionA)
});
/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

Given(/^I am on the REVIEW & SUBMIT page -LAT_reviewsubmitGuest$/, () => { 
  return latPageObj
    .waitForElementVisible('@checkout_RS_billingAddress_class',timeout_median)
    .waitForElementVisible('@checkout_RS_paymentInfo_class',timeout_median)
    .waitForElementVisible('@checkout_RS_shippingAddress_class',timeout_median)
    .waitForElementVisible('@checkout_RS_shippingMethod_class', timeout_median)
    .assert.containsText('@widebag_itemDesc_class', product_desc_item1) 
});
When(/^I click on the PLACE ORDER button -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_RS_placeOrder_btn', timeout_median)
    .click('@checkout_RS_placeOrder_btn')
});
Then(/^I should be redirected to THANK YOU page -LAT_reviewsubmitGuest$/, () => {
  return client
    .pause(pauseTime_max)
});
Then(/^there should be an Order number -LAT_reviewsubmitGuest$/, () => {
  return latPageObj
    .waitForElementVisible('@thankyou_header_class', timeout_median)
    .assert.containsText('@thankyou_header_class', thankyou_header) 
    .waitForElementVisible('@thankyou_details_css', timeout_median)
    .assert.containsText('@thankyou_details_css', thankyou_orderNumber) 
});
