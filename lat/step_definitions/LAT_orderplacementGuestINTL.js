
const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var homepageTitle = client.globals.latConstants.homepageTitle;
var usernameINTL = client.globals.latConstants.usernameINTL;
var product_ID_item1 = client.globals.latConstants.product_ID_item1;
var product_desc_item1 = client.globals.latConstants.product_desc_item1;
var bag_pagetitle = client.globals.latConstants.bag_pagetitle;
var thankyou_header =client.globals.latConstants.thankyou_header;
var thankyou_orderNumber =client.globals.latConstants.thankyou_orderNumber;
var checkout_firstName = client.globals.latConstants.checkout_firstName;
var checkout_lastName= client.globals.latConstants.checkout_lastName;
var checkout_addressStreetINTL_optionA= client.globals.latConstants.checkout_addressStreetINTL_optionA;
var checkout_cityINTL_optionA = client.globals.latConstants.checkout_cityINTL_optionA;
var checkout_zipINTL_optionA= client.globals.latConstants.checkout_zipINTL_optionA;
var checkout_phone= client.globals.latConstants.checkout_phone;
var checkout_ccNumber_optionA =client.globals.latConstants.checkout_ccNumber_optionA;
var checkout_CVC3digits =client.globals.latConstants.checkout_CVC3digits;
var checkout_ccName =client.globals.latConstants.checkout_ccName;

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
Given(/^I am on the website -LAT_orderplacementGuestINTL$/, () => {
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
  Then(/^I open the context chooser by clicking on the country flag in the top nav -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementPresent('@intl_shippingpage_class' , timeout_min)
      .waitForElementPresent('@intl_shippingTitle_css' , timeout_min)
      .assert.containsText('@intl_shippingTitle_css', Intl_shipping)
      .waitForElementPresent('@intl_contextChooser_css' , timeout_min)
      .waitForElementPresent('@intl_countryDropdownMenu_css' , timeout_min)
      .click('@intl_countryDropdown_optionA_css') //change country selection in pageObj.js file
  });
  When(/^I select this <country> from the country dropdown menu -LAT_orderplacementGuestINTL$/, () => {
    return client
    .pause(pauseTime_min)
  });
  Then(/^click on SAVE & CONTINUE SHOPPING -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
    .click('@intl_contextChooser_btn')
  });
  Then(/^I should see a popupoverlay displaying shipping country change -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@intl_welcomemat_css', timeout_min)
      .waitForElementVisible('@intl_welcomematSubheadline_css', timeout_min)
      .assert.containsText('@intl_welcomematSubheadline_css', Intl_country_optionA)
      .waitForElementVisible('@intl_welcomemat_btn', timeout_min)
      .click('@intl_welcomemat_btn')
  }); 

/****************** search by web id *********************************************************/  

Given(/^I am on the homepage -LAT_orderplacementGuestINTL$/, () => {
    return client
    .pause(pauseTime_min)
    .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)  
  });
  When(/^I enter this product id -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .assert.visible('@header_searchBar_class') 
      .setValue('@header_searchBar_class', product_ID_item1) 
      .click('@header_searchSubmit_btn') 
   });
   Then(/^I should be taken to a PDP of this product -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
    .waitForElementPresent('@prod_desc_class', timeout_median)
   });

/****************** add to bag on PDP ************************************************************/   

Given(/^I am on a Product Detail Page -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@prod_desc_class', timeout_median)
      .assert.containsText('@prod_desc_class', product_desc_item1)
      .waitForElementVisible('@pdp_price_class', timeout_median)
      .waitForElementVisible('@pdp_priceCurrency_css', timeout_median)
      .assert.containsText('@pdp_priceCurrency_css', Intl_currency_optionA)
  });
  When(/^I select a color, size, quantity “1” -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .assert.visible('@pdp_color_class')
      .assert.visible('@pdp_size_class')
      //.click('@pdp_colorItem1_css')
      .click('@pdp_size_optionA_item1_css')
  });
  When(/^click the ADD TO BAG button -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .click('@pdp_addtobag_btn')  
  });
  Then(/^the item appears in the mini cart -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@minicart_overlay_css', timeout_min)
      .waitForElementVisible('@minicart_subtotal_css', timeout_median)
      .assert.containsText('@minicart_subtotal_css', Intl_currency_optionA)
  });
 
/****************** open sign in overlay on bag page *****************************************************/  


Given(/^I have an item in the mini cart -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
      .assert.containsText('@minicart_itemDetails_css', product_desc_item1)
      .waitForElementPresent('@minicart_checkout_css' , timeout_min)
      .click('@minicart_checkout_css')
  });
  Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_orderplacementGuestINTL$/, () => {
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
  When(/^I click on the CHECKOUT button on the Bag page -LAT_orderplacementGuestINTL$/, () => {
    return client
      .execute('scrollTo(0, 6000)') 
  });
  Then(/^a sign in overlay pops up -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .click('@bag_checkout_css')
      .waitForElementVisible('@bag_loginOverlay_css', timeout_median)
  });

/****************** guest checkout – input info on SHIPPING & BILLING page  *****************************************************/  

Given(/^I am on the BAG page with a sign in overlay open -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@bag_loginGuestCheckout_btn', timeout_median)
      .click('@bag_loginGuestCheckout_btn')
  });
  Then(/^I access the SHIPPING & BILLING page via CHECKOUT AS GUEST -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@checkout_SB_navTab_css',timeout_median)   
      .waitForElementVisible('@checkout_SB_header_css',timeout_median)   
  });
  When(/^I enter First Name, Last Name, Address Line 1, City -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@checkout_firstName_css',timeout_median)   
      .setValue('@checkout_firstName_css',checkout_firstName) 
      .setValue('@checkout_lastName_css',checkout_lastName) 
      .setValue('@checkout_addressLine1_css',checkout_addressStreetINTL_optionA) 
      .setValue('@checkout_city_css',checkout_cityINTL_optionA) 
  });
  Then(/^select a state from the State dropdown menu -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .click('@checkout_stateINTL_optionA_css') //value preselected in pageObj
  });
  Then(/^enter Zip Code, Address, Phone Number -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .setValue('@checkout_zip_css', checkout_zipINTL_optionA) 
      .setValue('@checkout_SB_email_css', usernameINTL)
      .setValue('@checkout_phone_css', checkout_phone)
  });
  Then(/^click on the CONTINUE CHECKOUT button -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@checkout_SB_continue_btn',timeout_median)
      .click('@checkout_SB_continue_btn') 
  });
  Then(/^I should be redirected to the PAYMENT page -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@checkout_SB_continue_btn',timeout_median)
      .click('@checkout_SB_continue_btn') 
  });

/****************** guest checkout – input info on PAYMENT page  *****************************************************/  

Given(/^I am on the PAYMENT page -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@checkout_P_paymentForm_css',timeout_median)
  });
  When(/^I select a Payment Type from the dropdown menu -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@checkout_paymentType_css',timeout_min)
      .click('@checkou_paymentTypeINTL_optionA_css')
  });
  Then(/^enter Credit Card Number, Name on Card -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .setValue('@checkout_ccNumber_css', checkout_ccNumber_optionA)
      .setValue('@checkout_ccName_css',checkout_ccName)
  });
  Then(/^select Credit Card Expiration Month and Year from the dropdown menu -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .click('@checkout_ccMonth_optionA_css')
      .click('@checkout_ccYear_optionA_css')
});
  Then(/^enter Security Code -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .setValue('@checkout_CVV_css',checkout_CVC3digits)
  });
  Then(/^click on the  CHECKOUT button -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
    .click('@checkout_P_continue_btn')
  });
  Then(/^I should be redirected to the REVIEW & SUBMIT page -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
    .waitForElementVisible('@checkout_RS_navTab_css',timeout_min)
  });

/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

Given(/^I am on the REVIEW & SUBMIT page -LAT_orderplacementGuestINTL$/, () => {
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
  Then(/^I entered the security code  -LAT_orderplacementGuestINTL$/, () => { 
    return client
    .pause(pauseTime_min)
  });
  When(/^I click on the PLACE ORDER button -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
    .waitForElementVisible('@checkout_RS_placeOrder_btn', timeout_median)
    .click('@checkout_RS_placeOrder_btn')
  });
  Then(/^I should be redirected to THANK YOU page -LAT_orderplacementGuestINTL$/, () => {
    return client
    .pause(pauseTime_min)
  });
  Then(/^there should be an Order number -LAT_orderplacementGuestINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@thankyou_header_class', timeout_median)
      .assert.containsText('@thankyou_header_class', thankyou_header) 
      .waitForElementVisible('@thankyou_details_css', timeout_median)
      .assert.containsText('@thankyou_details_css', thankyou_orderNumber)
  });
