const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const { After } = require('cucumber');
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var homepageTitle = client.globals.latConstants.homepageTitle;
var pa_headerSubcat_pagetitle_optionA = client.globals.latConstants.pa_headerSubcat_pagetitle_optionA;
var Intl_shipping = client.globals.latConstants.Intl_shipping;
var Intl_country_optionA = client.globals.latConstants.Intl_country_optionA;
var Intl_purchases_pagetile = client.globals.latConstants.Intl_purchases_pagetile;

var timeout_median = client.globals.latConstants.timeout_median
var pauseTime_median = client.globals.latConstants.pauseTime_median
var timeout_max = client.globals.latConstants.timeout_max
var pauseTime_max = client.globals.latConstants.pauseTime_max
var timeout_min = client.globals.latConstants.timeout_min
var pauseTime_min = client.globals.latConstants.pauseTime_min
/******* change country flag via context chooser ***************************************************************************/

Given(/^I am on the website -LAT_topnavFooterINTL$/, () => {
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
Then(/^I open the context chooser by clicking on the country flag in the top nav -LAT_topnavFooterINTL$/, () => {
  return latPageObj
      .waitForElementPresent('@intl_shippingpage_class' , timeout_min)
      .waitForElementPresent('@intl_shippingTitle_css' , timeout_min)
      .assert.containsText('@intl_shippingTitle_css', Intl_shipping)
      .waitForElementPresent('@intl_contextChooser_css' , timeout_min)
      .waitForElementPresent('@intl_countryDropdownMenu_css' , timeout_min)
      .click('@intl_countryDropdown_optionA_css') //change country selection in pageObj.js file
});
When(/^I select this <country> from the country dropdown menu -LAT_topnavFooterINTL$/, () => {
  return client
      .pause(pauseTime_min)
});
Then(/^click on SAVE & CONTINUE SHOPPING -LAT_topnavFooterINTL$/, () => {
  return latPageObj
    .click('@intl_contextChooser_btn')
});
Then(/^I should see a popupoverlay displaying shipping country change -LAT_topnavFooterINTL$/, () => {
  return latPageObj
    .waitForElementVisible('@intl_welcomemat_css', timeout_min)
    .waitForElementVisible('@intl_welcomematSubheadline_css', timeout_min)
    .assert.containsText('@intl_welcomematSubheadline_css', Intl_country_optionA)
    .waitForElementVisible('@intl_welcomemat_btn', timeout_min)
    .click('@intl_welcomemat_btn')
});

/****************** search by web id *********************************************************/  

Given(/^I am on the homepage -LAT_topnavFooterINTL$/, () => {
  return client
    .pause(pauseTime_min)
    .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle)   
});
Then(/^hover over the top nav menu -LAT_topnavFooterINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@header_navigationPane_class' , timeout_median)
    .moveToElement('@header_category_optionA_css' , 20,20)
});
Then(/^the top nav menu is rendering -LAT_topnavFooterINTL$/, () => {
  return client
    .pause(pauseTime_min)
});
When(/^I click on a category from the <category page name> drop-down in the Top Nav bar -LAT_topnavFooterINTL$/ , () => {
  return latPageObj
    .waitForElementPresent('@header_categoryColumnSubcategory_optionA_css', timeout_median)
   .click('@header_categoryColumnSubcategory_optionA_css')
});
Then(/^I should be taken to the <subcategory name> page -LAT_topnavFooterINTL$/, ()  => {
  return latPageObj
    .waitForElementPresent('@pa_breadcrumbdiv_class' , timeout_max)
    .waitForElementPresent('title' , timeout_max)
    .assert.title(pa_headerSubcat_pagetitle_optionA) 
});

/****************** navigate to gift card product array via footer  ************************************************************/ 

Given(/^I am on the LT homepage -LAT_topnavFooterINTL$/, () => {
  return client
    .url(qaUrl)  
    .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(200, 6000)')         
});
Then(/^I scroll down to page footer -LAT_topnavFooterINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@footer_css' , timeout_median)
    .waitForElementPresent('@footer_column_optionB_css', timeout_min)
});
When(/^I click on <this CTA link> in the page footer -LAT_topnavFooterINTL$/, () => {
  return latPageObj
    .waitForElementPresent('@footer_columnIntlShipping_css' , timeout_median)
    .click('@footer_columnIntlShipping_css') 
}); 
Then(/^I should be taken to <this CTA link> page -LAT_topnavFooterINTL$/, () => {
  return latPageObj
    .waitForElementPresent('title' , timeout_max)
    .assert.title(Intl_purchases_pagetile)
});

