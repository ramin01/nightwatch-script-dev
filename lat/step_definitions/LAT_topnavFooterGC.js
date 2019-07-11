const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const { After } = require('cucumber');
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var homepageTitle = client.globals.latConstants.homepageTitle;
var username = client.globals.latConstants.username;
var password = client.globals.latConstants.password;
var product_desc_item3 = client.globals.latConstants.product_desc_item3;
var bag_pagetitle = client.globals.latConstants.bag_pagetitle;
var pa_headerSubcat_pagetitle_optionA = client.globals.latConstants.pa_headerSubcat_pagetitle_optionA;
var pa_giftcard_breadcrumbText = client.globals.latConstants.pa_giftcard_breadcrumbText;
var giftcard_pagetitle = client.globals.latConstants.giftcard_pagetitle;
var thankyou_header = client.globals.latConstants.thankyou_header;
var thankyou_orderNumber = client.globals.latConstants.thankyou_orderNumber;

var timeout_median = client.globals.latConstants.timeout_median
var pauseTime_median = client.globals.latConstants.pauseTime_median
var timeout_max = client.globals.latConstants.timeout_max
var pauseTime_max = client.globals.latConstants.pauseTime_max
var timeout_min = client.globals.latConstants.timeout_min
var pauseTime_min = client.globals.latConstants.pauseTime_min
/****************** Header top nav dropdowns and url are rendering ************************************************************/ 

Given(/^I open <website homepage> -LAT_topnavFooterGC$/, () => {
  return client
    .url(qaUrl)       
    .waitForElementVisible('#saksOverlay', timeout_min)
    .click('#saksOverlay')
    .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)   
});
Then(/^hover over the top nav menu -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementPresent('@header_navigationPane_class' , timeout_median)
    .moveToElement('@header_category_optionA_css' , 20,20)
});
Then(/^the top nav menu is rendering -LAT_topnavFooterGC$/, () => {
  return client
    .pause(pauseTime_min)
});
When(/^I click on a category from the <category page name> drop-down in the Top Nav bar -LAT_topnavFooterGC$/ , () => {
  return latPageObj
   .waitForElementPresent('@header_categoryColumnSubcategory_optionA_css', timeout_median)
   .click('@header_categoryColumnSubcategory_optionA_css')
});
Then(/^I should be taken to the <subcategory name> page -LAT_topnavFooterGC$/, ()  => {
  return latPageObj
    .waitForElementPresent('@pa_breadcrumbdiv_class' , timeout_max)
    .waitForElementPresent('title' , timeout_max)
    .assert.title(pa_headerSubcat_pagetitle_optionA) 
});

/****************** navigate to gift card product array via footer  ************************************************************/ 

Given(/^I am on the website -LAT_topnavFooterGC$/, () => {
  return client
  .url(qaUrl)  
  .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(200, 6000)')         
});
Then(/^I am taken to the GiftCard page -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementPresent('@footer_css' , timeout_median)
    .waitForElementPresent('@footer_column_optionA_css', timeout_min)
    .waitForElementPresent('@footer_columnGiftCard_css' , timeout_median)
    .click('@footer_columnGiftCard_css') 
    .waitForElementPresent('title' , timeout_max)
    .assert.title(giftcard_pagetitle)
});
When(/^I click on purchase -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementPresent('@giftcard_purchase_btn' , timeout_median)
    .click('@giftcard_purchase_btn') 
    .waitForElementPresent('@giftcard_purchaseoption_class' , timeout_median)
   }); 
Then(/^select PHYSICAL gift card option -LAT_topnavFooterGC$/, () => {
  return client
    .pause(pauseTime_min)
}); 
Then(/^I should be taken to a gift card product array page -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .click('@giftcard_purchasePhysical_css') 
    .waitForElementPresent('@pa_breadcrumbdiv_class', timeout_median)
    .waitForElementPresent('@pa_breadcrumbCategory_optionB_css', timeout_median)
    .assert.containsText('@pa_breadcrumbCategory_optionB_css', pa_giftcard_breadcrumbText)
});

/****************** add to bag ************************************************************/ 

Given(/^I am on a gift card product array page -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementPresent('@pa_product_optionA_css' , timeout_min)
    .click('@pa_product_optionA_css') 
});
Then(/^I navigate to a gift card PDP via product array selection -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementVisible('@prod_desc_class', timeout_median)
    .assert.containsText('@prod_desc_class', product_desc_item3)
});
When(/^I select a denomination, quantity “1” -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementPresent('@pdp_giftcard_denomination_class' , timeout_min)
    .waitForElementPresent('@pdp_giftcard_denomination_optionA_css' , timeout_min)
    .click('@pdp_giftcard_denomination_optionA_css')
});
Then(/^click the ADD TO BAG button -LAT_topnavFooterGC/, () => {
  return latPageObj
    .waitForElementPresent('@pdp_addtobag_btn' , timeout_min)
    .click('@pdp_addtobag_btn')   
});
Then(/^the item appears in the mini cart -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementVisible('@minicart_overlay_css', timeout_min)
    .waitForElementVisible('@minicart_subtotal_css', timeout_median)
});

/****************** open sign in overlay on bag page *****************************************************/  

Given(/^I have an item in the mini cart -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
    .assert.containsText('@minicart_itemDetails_css', product_desc_item3)
    .waitForElementPresent('@minicart_checkout_css' , timeout_min)
    .click('@minicart_checkout_css')
});
Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_title_css', timeout_min)
    .assert.containsText('@bag_title_css', bag_pagetitle) 
    .waitForElementVisible('@widebag_itemDesc_class', timeout_min)
    .assert.containsText('@widebag_itemDesc_class', product_desc_item3)   
    .waitForElementVisible('@widebag_itemPrice_class', timeout_min)
    .waitForElementVisible('@orderSummary_total_css', timeout_min)
    .waitForElementVisible('@bag_checkout_css', timeout_median)
});
When(/^I click on the CHECKOUT button on the Bag page -LAT_topnavFooterGC$/, () => {
  return client
    //.waitForElementVisible('#jsStartCheckout', timeout_median)
    .execute('scrollTo(0, 6000)') 
});
Then(/^a sign in overlay pops up -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .click('@bag_checkout_css')
    .waitForElementVisible('@bag_loginOverlay_css', timeout_median)
});

/****************** log into registered account via bag page *****************************************************/  

Given(/^I am on the BAG page with a sign in overlay open -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_emailEntry_css', timeout_median)
      .waitForElementVisible('@bag_passwordEntry_css', timeout_median)
});
Then(/^I enter a valid email address and password -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .setValue('@bag_emailEntry_css', username)
    .setValue('@bag_passwordEntry_css', password)
});
When(/^I click on the SIGN IN & CHECKOUT button on sign in overlay -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .click('@bag_loginCheckout_btn')
});
Then(/^I should be redirected to the REVIEW & SUBMIT page -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_RS_navTab_css', timeout_max)
});

/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

Given(/^I am on the REVIEW & SUBMIT page -LAT_topnavFooterGC$/, () => { 
  return latPageObj
    .waitForElementVisible('@checkout_RS_billingAddress_class', timeout_median)
    .waitForElementVisible('@checkout_RS_paymentInfo_class', timeout_median)
    .waitForElementVisible('@checkout_RS_shippingAddress_class', timeout_median)
    .waitForElementVisible('@checkout_RS_shippingMethod_class', timeout_median)
    .assert.containsText('@widebag_itemDesc_class', product_desc_item3) 
});
When(/^I click on the PLACE ORDER button -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_RS_placeOrder_btn', timeout_median)
    .click('@checkout_RS_placeOrder_btn')
});
Then(/^I should be redirected to THANK YOU page -LAT_topnavFooterGC$/, () => {
  return client
    .pause(pauseTime_min)
});
Then(/^there should be an Order number -LAT_topnavFooterGC$/, () => {
  return latPageObj
    .waitForElementVisible('@thankyou_header_class', timeout_median)
    .assert.containsText('@thankyou_header_class', thankyou_header) 
    .waitForElementVisible('@thankyou_details_css', timeout_median)
    .assert.containsText('@thankyou_details_css', thankyou_orderNumber) 
});
