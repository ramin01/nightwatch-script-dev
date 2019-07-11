const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var homepageTitle = client.globals.latConstants.homepageTitle;
var username = client.globals.latConstants.username;
var product_desc_item1 = client.globals.latConstants.product_desc_item1;
var bag_pagetitle = client.globals.latConstants.bag_pagetitle;
var checkout_firstName = client.globals.latConstants.checkout_firstName;
var checkout_lastName= client.globals.latConstants.checkout_lastName;
var checkout_addressStreet_QAS= client.globals.latConstants.checkout_addressStreet_QAS;
var checkout_city_optionA = client.globals.latConstants.checkout_city_optionA;
var checkout_zip_optionA= client.globals.latConstants.checkout_zip_optionA;
var checkout_phone= client.globals.latConstants.checkout_phone;
var pa_filterby =client.globals.latConstants.pa_filterby;
var pa_paginationPageSelected =client.globals.latConstants.pa_paginationPageSelected;
var search_term2 =client.globals.latConstants.search_term2;
var search_term1 =client.globals.latConstants.search_term1;
var pa_leftnavCategory_optionA =client.globals.latConstants.pa_leftnavCategory_optionA;
var timeout_median = client.globals.latConstants.timeout_median
var pauseTime_median = client.globals.latConstants.pauseTime_median
var timeout_max = client.globals.latConstants.timeout_max
var pauseTime_max = client.globals.latConstants.pauseTime_max
var timeout_min = client.globals.latConstants.timeout_min
var pauseTime_min = client.globals.latConstants.pauseTime_min
///Note : need to look into PA product valdidation 

/****************** product array - sort by and filter by *********************************************************/  

Given(/^I am on the website -LAT_PAQVQAS$/, () => {
  return client
    .url(qaUrl)      
    .waitForElementVisible('#saksOverlay', timeout_min)
    .click('#saksOverlay')
    .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
    .assert.title(homepageTitle )   
});
Then(/^I am taken to a Product Array page via a search keywords -LAT_PAQVQAS$/, () => {
  return latPageObj 
    .assert.visible('@header_searchBar_class')   
    .setValue('@header_searchBar_class', search_term1) 
    .click('@header_searchSubmit_btn') 
});
When(/^I select a <sortby dropdown> from the Sort By option -LAT_PAQVQAS$/,() => {
  return latPageObj
    .assert.visible('@pa_sortby_class')
    .click('@pa_sortby_class')
    .click('@pa_sortby_optionA_css')
    .waitForElementPresent('@pa_filterby_optionA_css' , timeout_median)
    .click('@pa_filterby_optionA_css')
});
Then(/^select a <refine group> and its <parameters> from the Filter By option -LAT_PAQVQAS$/, () => {
  return client
    .pause(pauseTime_min)
});
Then(/^I should see product array assortment change -LAT_PAQVQAS$/, () => {
  return latPageObj
    .waitForElementPresent('@pa_filterbyCheckbox_optionA_css' , timeout_median)
    .click('@pa_filterbyCheckbox_optionA_css')
    .waitForElementPresent('@pa_filterbyCheckbox_optionB_css' , timeout_median)
    .click('@pa_filterbyCheckbox_optionB_css')
    .waitForElementPresent('@pa_filterbyApply_css' , timeout_min)
    .click('@pa_filterbyApply_css')
});
Then(/^validate order sequencing change -LAT_PAQVQAS$/, () => {
  return latPageObj
    .waitForElementPresent('@pa_filterbyParameters_css' , timeout_median)
    .assert.containsText('@pa_filterbyParameters_css', pa_filterby)
}); 

/****************** product array - pagination  *********************************************************/  

Given(/^I am on a <Product Array page> -pagination -LAT_PAQVQAS$/, () => {
  return latPageObj
    .waitForElementPresent('@pa_paginationNumber_class' ,timeout_min)  
});
When(/^I click on next page -LAT_PAQVQAS$/,() => {
  return latPageObj
    .waitForElementPresent('@pa_paginationRightArrow_css' ,timeout_min)
    //.click('@pa_paginationRightArrow_css') 
});
Then(/^I should be taken to page two of this product array -LAT_PAQVQAS$/, () => {
  client.execute(function() {
    document.querySelector('#pc-top > ol > li.pa-enh-pagination-right-arrow > a').click()
 });
 return client
    .pause(pauseTime_min)
}); 
Then(/^validate product array content change -LAT_PAQVQAS$/, () => {
  return latPageObj
  .waitForElementPresent('@pa_paginationPageSelected_class' , timeout_median)
  .assert.containsText('@pa_paginationPageSelected_class', pa_paginationPageSelected) 
}); 

/****************** product array -leftnav *********************************************************/  

Given(/^I am on a <Product Array page> -leftnav -LAT_PAQVQAS$/, () => {
  return latPageObj
    .waitForElementPresent('@pa_leftnav_class', timeout_min) 
    .waitForElementPresent('@pa_leftnavCategory_optionA_css' , timeout_min) //preselected in pageObj
    .click('@pa_leftnavCategory_optionA_css')  
});
When(/^I click on a <category> in the left nav -LAT_PAQVQAS$/,() => {
  return client
    .pause(pauseTime_min)
});  
Then(/^I should be taken to this <category> product array -LAT_PAQVQAS$/, () => {
    return latPageObj
      .waitForElementPresent('@pa_breadcrumbCategory_optionA_css' , timeout_min) //preselected in pageObj
      .assert.containsText('@pa_breadcrumbCategory_optionA_css', pa_leftnavCategory_optionA)
});
//Then(/^validation product array contents change -LAT_PAQVQAS$/, () => {
    //return latPageObj
      //.assert.containsText('@selectedbreadcrumb', brand)
//});

/****************** add to bag on quickview *********************************************************/  

Given(/^I am taken to a Product Arraypage via a search keywords -QUICKVIEW -LAT_PAQVQAS$/, () => {
  return latPageObj 
    .assert.visible('@header_searchBar_class')   
    .setValue('@header_searchBar_class', search_term2) 
    .click('@header_searchSubmit_btn') 
});
Then(/^I open a product quickview overlay -LAT_PAQVQAS$/,() => {
   return latPageObj
    .waitForElementPresent('@pa_product_optionB_css', timeout_min) //preselected in pageObj
    .moveToElement('@pa_product_optionB_css', 200, 300)
});
When(/^I select a <color>, <size>, quantity “1” -LAT_PAQVQAS$/, () => {
  client.execute(function() {
    document.querySelector('.pa-quickview-redesign__button').click()
 });
  return latPageObj
    .waitForElementPresent('@quicklook_overlay_class' , timeout_median)
    .waitForElementPresent('@quicklook_desc_css' , timeout_median)
    .waitForElementPresent('@quicklook_thumbnail_css' , timeout_median)
    .waitForElementPresent('@quicklook_image_css' , timeout_median)
    .waitForElementPresent('@quicklook_size_class' , timeout_min)
    .click('@quicklook_sizeSelector_class')  
    .waitForElementPresent('@quicklook_color_class', timeout_median) 
    .waitForElementPresent('@quicklook_price_class' , timeout_median)
});
Then(/^click the ADD TO BAG button -LAT_PAQVQAS$/, () => {
    return latPageObj
      .waitForElementPresent('@quicklook_addtobag_btn', timeout_median)   
      .click('@quicklook_addtobag_btn')
});
Then(/^the item appears in the mini cart -LAT_PAQVQAS$/, () => {
    return latPageObj
      .waitForElementVisible('@minicart_overlay_css', timeout_min)
});
/*
Then(/^validate product info -LAT_PAQVQAS$/, () => {
  return latPageObj
    .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
    .assert.containsText('@minicart_itemDetails_css', product_desc_item1)
}); */

/****************** open sign in overlay on bag page *********************************************************/  


Given(/^I have an item in the mini cart -LAT_PAQVQAS$/, () => {
  return latPageObj
    .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
    .assert.containsText('@minicart_itemDetails_css', product_desc_item1)
    .waitForElementVisible('@minicart_subtotal_css', timeout_median)
    .waitForElementPresent('@minicart_checkout_css' , timeout_min)
    .click('@minicart_checkout_css')
});
Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_PAQVQAS$/, () => {
  return latPageObj
    .waitForElementVisible('@bag_title_css', timeout_min)
    .assert.containsText('@bag_title_css', bag_pagetitle) 
    .waitForElementVisible('@widebag_itemDesc_class', timeout_min)
    .assert.containsText('@widebag_itemDesc_class', product_desc_item1)   
    .waitForElementVisible('@widebag_itemPrice_class', timeout_min)
    .waitForElementVisible('@orderSummary_total_css', timeout_min)
    .waitForElementVisible('@bag_checkout_css', timeout_median)
});
When(/^I click on the CHECKOUT button on the Bag page -LAT_PAQVQAS$/, () => {
  return client
    .execute('scrollTo(0, 6000)') 
});
Then(/^a sign in overlay pops up -LAT_PAQVQAS$/, () => {
  return latPageObj
    .click('@bag_checkout_css')
    .waitForElementVisible('@bag_loginOverlay_css', timeout_median)
});

/****************** proceed as guest checkout via bag page   *****************************************************/  

Given(/^I am on the BAG page with a sign in overlay open -LAT_PAQVQAS$/, () => {
    return latPageObj
      .waitForElementVisible('@bag_loginGuestCheckout_btn', timeout_median)
}); 
  When(/^I click on CHECKOUT AS GUEST  button on sign in overlay -LAT_PAQVQAS$/, () => {
    return latPageObj
      .click('@bag_loginGuestCheckout_btn')
});
  Then(/^I should be redirected to the SHIPPING & BILLING page -LAT_PAQVQAS$/, () => {
    return latPageObj
    .waitForElementVisible('@checkout_SB_navTab_css',timeout_median)   
});  

/******************  guest checkout – input info on SHIPPING & BILLING page   *****************************************************/  

Given(/^I am on the SHIPPING & BILLING page -LAT_PAQVQAS$/, () => {
    return latPageObj
      .waitForElementVisible('@checkout_SB_header_css',timeout_median) 
});
  When(/^I enter First Name, Last Name, Address Line 1, City -LAT_PAQVQAS$/, () => {
    return latPageObj
      .waitForElementVisible('@checkout_firstName_css',timeout_median)   
      .setValue('@checkout_firstName_css',checkout_firstName) 
      .setValue('@checkout_lastName_css',checkout_lastName) 
      .setValue('@checkout_addressLine1_css',checkout_addressStreet_QAS) 
      .setValue('@checkout_city_css',checkout_city_optionA) 
});
  Then(/^select a state from the State dropdown menu -LAT_PAQVQAS$/, () => {
    return latPageObj
      .click('@checkout_state_optionA_css') //value preselected in pageObj
});
  Then(/^enter Zip Code, Address, Phone Number -LAT_PAQVQAS$/, () => {
    return latPageObj
      .setValue('@checkout_zip_css', checkout_zip_optionA) 
      .setValue('@checkout_SB_email_css', username)
      .setValue('@checkout_phone_css', checkout_phone)
});
Then(/^click on the CONTINUE CHECKOUT button -LAT_PAQVQAS$/, () => {
    return latPageObj
      .waitForElementVisible('@checkout_SB_continue_btn',timeout_median)
      .click('@checkout_SB_continue_btn') 
});
  Then(/^I should see a QAS overlay -LAT_PAQVQAS$/, () => {
    return latPageObj
    .waitForElementPresent('@checkout_SB_QASoverlay_css' ,timeout_min)
});

/******************  guest checkout – input info on SHIPPING & BILLING page   *****************************************************/  

Given(/^I am on the SHIPPING & BILLING  page with a QAS overlay open -LAT_PAQVQAS$/, () => {
  return latPageObj
    .waitForElementPresent('@checkout_SB_QAS_originalAddress_class', timeout_min)  
    .waitForElementVisible('@checkout_SB_QAS_suggestedlAddress_class', timeout_min) 
});
Then(/^with one of the suggest addresses radio button selected -LAT_PAQVQAS$/, () => {
  return client
    .pause(pauseTime_min) 
});
When(/^I click on USE SUGGESTED ADDRESS  button from the overlay -LAT_PAQVQAS$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_SB_QAS_suggestedlAddress_optionA_css', timeout_min) 
    .click('@checkout_SB_QAS_suggestedlAddress_optionA_css')
    .waitForElementVisible('@checkout_SB_QAS_useSuggestedAddress_btn', timeout_min)
    .click('@checkout_SB_QAS_useSuggestedAddress_btn')
});
Then(/^I should be redirected to the PAYMENT page -LAT_PAQVQAS$/, () => {
  return latPageObj
    .waitForElementVisible('@checkout_P_navTab_css',timeout_median)
    .waitForElementVisible('@checkout_P_paymentForm_css',timeout_median)
});
