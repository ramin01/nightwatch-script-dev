const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const { After } = require('cucumber');
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var homepageTitle = client.globals.latConstants.homepageTitle;
var usernameINTL = client.globals.latConstants.usernameINTL;
var password = client.globals.latConstants.password;
var acc_xxxxsAccountINTL = client.globals.latConstants.acc_xxxxsAccountINTL;
var header_welcomeNameINTL = client.globals.latConstants.header_welcomeNameINTL;
var acc_addNewShippingAddress = client.globals.latConstants.acc_addNewShippingAddress;
var acc_addNewBillingAddress = client.globals.latConstants.acc_addNewBillingAddress;
var acc_addNewPaymentMethod = client.globals.latConstants.acc_addNewPaymentMethod;
var header_welcomeSign = client.globals.latConstants.header_welcomeSign;
var acc_signIntoMyAccount = client.globals.latConstants.acc_signIntoMyAccount;
var Intl_shipping = client.globals.latConstants.Intl_shipping;
var Intl_country_optionA = client.globals.latConstants.Intl_country_optionA;

var timeout_median = client.globals.latConstants.timeout_median
var pauseTime_median = client.globals.latConstants.pauseTime_median
var timeout_max = client.globals.latConstants.timeout_max
var pauseTime_max = client.globals.latConstants.pauseTime_max
var timeout_min = client.globals.latConstants.timeout_min
var pauseTime_min = client.globals.latConstants.pauseTime_min
/******* change country flag via context chooser ***************************************************************************/

Given(/^I am on the website -LAT_accountINTL$/, () => {
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
  Then(/^I open the context chooser by clicking on the country flag in the top nav -LAT_accountINTL$/, () => {
    return latPageObj
      .waitForElementPresent('@intl_shippingpage_class' , timeout_min)
      .waitForElementPresent('@intl_shippingTitle_css' , timeout_min)
      .assert.containsText('@intl_shippingTitle_css', Intl_shipping)
      .waitForElementPresent('@intl_contextChooser_css' , timeout_min)
      .waitForElementPresent('@intl_countryDropdownMenu_css' , timeout_min)
      .click('@intl_countryDropdown_optionA_css') //change country selection in pageObj.js file
});
  When(/^I select this <country> from the country dropdown menu -LAT_accountINTL$/, () => {
    return client
      .pause(pauseTime_min)
  });
  Then(/^click on SAVE & CONTINUE SHOPPING -LAT_accountINTL$/, () => {
    return latPageObj
      .click('@intl_contextChooser_btn')
  });
  Then(/^I should see a popupoverlay displaying shipping country change -LAT_accountINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@intl_welcomemat_css', timeout_min)
      .waitForElementVisible('@intl_welcomematSubheadline_css', timeout_min)
      .assert.containsText('@intl_welcomematSubheadline_css', Intl_country_optionA)
      .waitForElementVisible('@intl_welcomemat_btn', timeout_min)
      .click('@intl_welcomemat_btn')
}); 
/******************log into registered account via account pager************************************************************/       

Given(/^I am on the accounts page -LAT_accountINTL$/, () => {
    return client
      .pause(pauseTime_min)
  });
  When(/^I SIGN IN with a valid email and password -LAT_accountINTL$/, () => {
    return latPageObj
      .waitForElementPresent('@header_welcomediv_class' , timeout_min)
      .click('@header_welcomeSignin_css')
      .waitForElementPresent('@acc_loginNewaccount_class' , timeout_min)
      .assert.containsText('@acc_signinTitle_class', acc_signIntoMyAccount)
      .waitForElementPresent('@acc_signinSection_class' , timeout_min)
      .setValue('@acc_emailField_css', usernameINTL)
      .setValue('@acc_passwordField_css', password)
      .click('@acc_signin_btn')
  });
  Then(/^I should be on the account summary page -LAT_accountINTL$/, () => {
    return latPageObj
      .waitForElementPresent('@acc_pageheader_class' ,timeout_max)
  });
  Then(/^validate account information is correct -LAT_accountINTL$/, () => {
    return latPageObj
      .waitForElementPresent('@acc_greetings_class' , timeout_min)
      .assert.containsText('@acc_greetings_class',acc_xxxxsAccountINTL)
  });
/******************account page rendering  ************************************************************/ 

Given(/^I am signed into my account -LAT_accountINTL$/, () => {
    return latPageObj
      .waitForElementVisible('@header_welcomediv_class', timeout_median)
      .assert.containsText('@header_welcomediv_class', header_welcomeNameINTL)   
});
  When(/^I click on each account page: Account Summary, Order History, Shipping Address, Billing Address, Payment, Settings -LAT_accountINTL$/, () => {
    return latPageObj
      .waitForElementPresent('@acc_headerNavTab_css' ,timeout_max)
  });
  Then(/^I should see each page rendering -LAT_accountINTL$/, () => {
    return latPageObj
      .waitForElementPresent('@acc_profile_class' , timeout_max)
      .assert.containsText('@acc_email_class', usernameINTL) 

      .click('@acc_orderHistoryTab_css') 
      .waitForElementPresent('@acc_orderHistoryDetails_css' , timeout_max)

      .click('@acc_shippingAddressTab_css') 
      .waitForElementPresent('@acc_addNewShipAddress_class' , timeout_max)
      .assert.containsText('@acc_addNewShipAddressTitle_class', acc_addNewShippingAddress)

      .click('@acc_billingAddressTab_css') 
      .waitForElementPresent('@acc_addNewBilAddress_class' , timeout_max)
      .assert.containsText('@acc_addNewBillAddressTitle_class', acc_addNewBillingAddress)

      .click('@acc_paymentTab_css') 
      .waitForElementPresent('@acc_addNewPayment_class' , timeout_max)
      .assert.containsText('@acc_addNewPaymentTitle_class', acc_addNewPaymentMethod)

      .click('@acc_settingsTab_css')
      .waitForElementPresent('@acc_profile_class', timeout_max)
      .assert.containsText('@acc_email_class', usernameINTL) 
  });

/************** sign out of registered account via top nav ************************************************/ 


Given(/^I am signed into my account page -LAT_accountINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@header_welcomediv_class', timeout_min)
    .assert.containsText('@header_welcomediv_class', welcomeNameINTL)  
    .waitForElementVisible('@header_welcomeDropdown_css', timeout_min)
});
  When(/^I hover over <welcome, xxx> -LAT_accountINTL$/, () => {
    return client
    //.waitForElementPresent('@welcomeDropdownMenu' , timeout_median)
      .moveToElement('#toolbar > div > ul > li:nth-child(1)' , 80,20)
      .pause(pauseTime_min)
  });
  Then(/^click on <Not xxx Sign out> from the dropdown> -LAT_accountINTL$/, () => {
    return latPageObj
      .click('@header_welcomeSignout_btn')
  });
  Then(/^I should be sign out of my account -LAT_accountINTL$/, () => {
    return client
      .pause(pauseTime_max)
  });
  Then(/^the top nav should reflect <Welcome, Sign In> -LAT_accountINTL$/, () => {
    return latPageObj
    .waitForElementPresent('@header_welcomediv_class', timeout_median)
    .assert.containsText('@header_welcomediv_class', header_welcomeSign)
    
  });
