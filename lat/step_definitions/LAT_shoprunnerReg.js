// features/step_definitions/sakRegCheckout.js
const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var homepageTitle = client.globals.latConstants.homepageTitle;
var username4 = client.globals.latConstants.username4;
var password = client.globals.latConstants.password;
var product_ID_item1 = client.globals.latConstants.product_ID_item1;
var product_desc_item1 = client.globals.latConstants.product_desc_item1;
var bag_pagetitle = client.globals.latConstants.bag_pagetitle;
var thankyou_header =client.globals.latConstants.thankyou_header;
var thankyou_orderNumber =client.globals.latConstants.thankyou_orderNumber;
var username_shoprunner = client.globals.latConstants.username_shoprunner;
var password_shoprunner = client.globals.latConstants.password_shoprunner;
var bag_shoprunnerWelcome = client.globals.latConstants.bag_shoprunnerWelcome;
var shippingCharge_free = client.globals.latConstants.shippingCharge_free;
var shippingCharge_standard =client.globals.latConstants.shippingCharge_standard

var timeout_median = client.globals.latConstants.timeout_median
var pauseTime_median = client.globals.latConstants.pauseTime_median
var timeout_max = client.globals.latConstants.timeout_max
var pauseTime_max = client.globals.latConstants.pauseTime_max
var timeout_min = client.globals.latConstants.timeout_min
var pauseTime_min = client.globals.latConstants.pauseTime_min
//cart merge scenario needed
/****************** search by web id *********************************************************/  

Given(/^I am on the website -LAT_shoprunnerReg$/, () => {
  return client
    .url(qaUrl)      
    .waitForElementVisible('#saksOverlay', timeout_min)
    .click('#saksOverlay')
    .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle )   
});
When(/^I enter this product id -LAT_shoprunnerReg$/, () => {
  return latPageObj 
    .assert.visible('@header_searchBar_class') 
    .setValue('@header_searchBar_class', product_ID_item1)
    .click('@header_searchSubmit_btn') 
});  
Then(/^I should be taken to a PDP of this product -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementPresent('@prod_desc_class', timeout_median)
});

/****************** add to bag on PDP ************************************************************/   

Given(/^I am on a Product Detail Page -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementVisible('@prod_desc_class', timeout_median)
    .assert.containsText('@prod_desc_class', product_desc_item1)
});
When(/^I select a color, size, quantity “1” -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .assert.visible('@pdp_color_class')
    .assert.visible('@pdp_size_class')
    //.click('@pdp_colorItem1_css')
    .click('@pdp_size_optionA_item1_css')
});
When(/^click the ADD TO BAG button -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .click('@pdp_addtobag_btn')  
});
Then(/^the item appears in the mini cart -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementVisible('@minicart_overlay_css', timeout_min)
    .waitForElementVisible('@minicart_subtotal_css', timeout_median)
});

/****************** open shoprunner sign in overlay on bag page *****************************************************/  

Given(/^I have an item in the mini cart -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
    .assert.containsText('@minicart_itemDetails_css', product_desc_item1)
    .waitForElementPresent('@minicart_checkout_css' , timeout_min)
    .click('@minicart_checkout_css')
});
Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_title_css', timeout_min)
    .assert.containsText('@bag_title_css', bag_pagetitle) 
    .waitForElementVisible('@widebag_itemDesc_class', timeout_min)
    .assert.containsText('@widebag_itemDesc_class', product_desc_item1)   
    .waitForElementVisible('@widebag_itemPrice_class', timeout_min)
    .waitForElementVisible('@orderSummary_total_css', timeout_min)
    .waitForElementVisible('@bag_checkout_css', timeout_median)
});
When(/^I click on the Shoprunner SIGN IN button on the top of Bag page -LAT_shoprunnerReg/, () => {
  return latPageObj
    .waitForElementVisible('@bag_shoprunnerdiv_css', timeout_min)
    .waitForElementVisible('@bag_shoprunnerSignin_css', timeout_median)
    .click('@bag_shoprunnerSignin_css')
});
Then(/^shoprunner a sign in overlay pops up -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_shoprunnerOverlay_css',timeout_median)   
    .waitForElementVisible('@bag_shoprunnerLoginForm_css',timeout_min) 
    .waitForElementVisible('@bag_shoprunnerEmail_css',timeout_median)
});

/****************** sign into shoprunner account  *****************************************************/  

Given(/^I am on the BAG page with a shoprunner sign in overlay open -LAT_shoprunnerReg$/, () => {
  return client
    .pause(pauseTime_min) 
});
  When(/^I enter a valid shoprunner account email address and password -LAT_shoprunnerReg$/, () => {
  return latPageObj 
    .setValue('@bag_shoprunnerEmail_css',username_shoprunner) 
    .setValue('@bag_shoprunnerPassword_css',password_shoprunner) 
    .waitForElementVisible('@bag_shoprunnerSecureSignin_btn', timeout_median)
    .click('@bag_shoprunnerSecureSignin_btn')
});
Then(/^I click on the SECURE SIGN IN button on shoprunner sign in overlay -LAT_shoprunnerReg$$/, () => {
  return client
    .pause(pauseTime_min)
});
Then(/^I should see a shoprunner WELCOME BACK message -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_shoprunnerWelcomeOverlay_css', timeout_median)
    .waitForElementVisible('@bag_shoprunnerWelcomeTitle_css', timeout_median)
    .assert.containsText('@bag_shoprunnerWelcomeTitle_css', bag_shoprunnerWelcome) 
});
Then(/^click CONTINUE SHOPPING to close the shoprunner overlay -LAT_shoprunnerReg$/, () => {
  return client
    .pause(pauseTime_min)
});
Then(/^validate FREE SHIPPING under order summary -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_shoprunnerOverlayX_btn', timeout_min)
    .click('@bag_shoprunnerOverlayX_btn')
    .waitForElementVisible('@orderSummary_class', timeout_median)
    .waitForElementVisible('@orderSummary_shippingCharge_css', timeout_min)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge_free) 
    .waitForElementVisible('@bag_checkout_css', timeout_median)
});

/****************** guest checkout - sign in overlay on bag page  *****************************************************/  

Given(/^I click on the CHECKOUT button on the Bag page -LAT_shoprunnerReg$/, () => {
  return client
    .execute('scrollTo(0, 6000)') 
});
Then(/^a sign in overlay pops up -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .click('@bag_checkout_css')
    .waitForElementVisible('@bag_loginOverlay_css', timeout_median)
    .waitForElementVisible('@bag_emailEntry_css', timeout_median)
    .waitForElementVisible('@bag_passwordEntry_css', timeout_median)
});
When(/^I enter a valid email address and password -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .setValue('@bag_emailEntry_css', username4)
    .setValue('@bag_passwordEntry_css', password)
});
Then(/^I click on the SIGN IN & CHECKOUT button on sign in overlay -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_loginCheckout_btn', timeout_median)
    .click('@bag_loginCheckout_btn')
});
Then(/^I should be redirected to the REVIEW & SUBMIT page -LAT_shoprunnerReg$/, () => {
  client.pause(pauseTime_max)
    latPageObj.getText('@header_bag_btn_quantity',function(result){
      if(result.value != '1'){
        latPageObj
        .waitForElementVisible('@bag_checkout_btn',timeout_max)
        .click('@bag_checkout_btn')
      }
    })
    return latPageObj
      .waitForElementVisible('@checkout_RS_navTab_css', timeout_max)
});

/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

Given(/^I am on the REVIEW & SUBMIT page -LAT_shoprunnerReg$/, () => { 
  return latPageObj
    .waitForElementVisible('@checkout_RS_billingAddress_class',timeout_median)
    .waitForElementVisible('@checkout_RS_paymentInfo_class',timeout_median)
    .waitForElementVisible('@checkout_RS_shippingAddress_class',timeout_median)
    .waitForElementVisible('@checkout_RS_shippingMethod_class', timeout_median)
    .assert.containsText('@widebag_itemDesc_class', product_desc_item1) 
});
Then(/^FREE SHIPPING appears under both order summary and shipping method -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_RS_shippingMethod_class' , timeout_median)
    .waitForElementPresent('@checkout_RS_shippingMethod_shoprunner_css' , timeout_median)
    .assert.containsText('@checkout_RS_shippingMethod_shoprunner_css', shippingCharge_standard)
  
    .waitForElementPresent('@orderSummary_class', timeout_median)
    .waitForElementPresent('@orderSummary_shippingCharge_css', timeout_median)
    .assert.containsText('@orderSummary_shippingCharge_css', shippingCharge_free)
});
When(/^I click on the PLACE ORDER button -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_RS_placeOrder_btn', timeout_median)
    .click('@checkout_RS_placeOrder_btn')
});
Then(/^I should be redirected to THANK YOU page -LAT_shoprunnerReg$/, () => {
  return client
    .pause(pauseTime_min)
});
Then(/^there should be an Order number -LAT_shoprunnerReg$/, () => {
  return latPageObj
    .waitForElementVisible('@thankyou_header_class', timeout_median)
    .assert.containsText('@thankyou_header_class', thankyou_header) 
    .waitForElementVisible('@thankyou_details_css', timeout_median)
    .assert.containsText('@thankyou_details_css', thankyou_orderNumber) 
});
