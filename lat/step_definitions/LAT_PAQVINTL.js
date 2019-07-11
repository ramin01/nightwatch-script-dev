const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var homepageTitle = client.globals.latConstants.homepageTitle;
var product_desc_item1 = client.globals.latConstants.product_desc_item1;
var pa_filterby =client.globals.latConstants.pa_filterby;
var pa_paginationPageSelected =client.globals.latConstants.pa_paginationPageSelected;
var search_term2 =client.globals.latConstants.search_term2;
var search_term1 =client.globals.latConstants.search_term1;
var pa_leftnavCategory_optionA =client.globals.latConstants.pa_leftnavCategory_optionA;


var Intl_shipping = client.globals.latConstants.Intl_shipping;
var Intl_country_optionA = client.globals.latConstants.Intl_country_optionA;
var Intl_currency_optionA = client.globals.latConstants.Intl_currency_optionA;

var timeout_median = client.globals.latConstants.timeout_median
var pauseTime_median = client.globals.latConstants.pauseTime_median
var timeout_max = client.globals.latConstants.timeout_max
var pauseTime_max = client.globals.latConstants.pauseTime_max
var timeout_min = client.globals.latConstants.timeout_min
var pauseTime_min = client.globals.latConstants.pauseTime_min
///Note : need to look into PA product valdidation 
/******* change country flag via context chooser ***************************************************************************/

Given(/^I am on the website -LAT_PAQVINTL$/, () => {
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
Then(/^I open the context chooser by clicking on the country flag in the top nav -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@intl_shippingpage_class' , timeout_min)
        .waitForElementPresent('@intl_shippingTitle_css' , timeout_min)
        .assert.containsText('@intl_shippingTitle_css', Intl_shipping)
        .waitForElementPresent('@intl_contextChooser_css' , timeout_min)
        .waitForElementPresent('@intl_countryDropdownMenu_css' , timeout_min)
        .click('@intl_countryDropdown_optionA_css') //change country selection in pageObj.js file
});
When(/^I select this <country> from the country dropdown menu -LAT_PAQVINTL$/, () => {
    return client
        .pause(pauseTime_min)
});
Then(/^click on SAVE & CONTINUE SHOPPING -LAT_PAQVINTL$/, () => {
    return latPageObj
        .click('@intl_contextChooser_btn')
  });
Then(/^I should see a popupoverlay displaying shipping country change -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@intl_welcomemat_css', timeout_min)
        .waitForElementVisible('@intl_welcomematSubheadline_css', timeout_min)
        .assert.containsText('@intl_welcomematSubheadline_css', Intl_country_optionA)
        .waitForElementVisible('@intl_welcomemat_btn', timeout_min)
        .click('@intl_welcomemat_btn')
}); 
/****************** Product array page - sort by and filter  ************************************************************/ 

Given(/^I am on the homepage -LAT_PAQVINTL$/, () => {
    return client
        .pause(pauseTime_min)
        .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
        .assert.title(homepageTitle)   
});
Then(/^I am taken to a Product Array page via a search keywords -LAT_PAQVINTL$/, () => {
    return latPageObj 
        .assert.visible('@header_searchBar_class')   
        .setValue('@header_searchBar_class', search_term1) 
        .click('@header_searchSubmit_btn') 
});
When(/^I select a <sortby dropdown> from the Sort By option -LAT_PAQVINTL$/,() => {
    return latPageObj
        .waitForElementPresent('@pa_productPrice_class' , timeout_min) 
        .assert.containsText('@pa_productPrice_class', Intl_currency_optionA)
        .assert.visible('@pa_sortby_class')
        .click('@pa_sortby_class')
        .click('@pa_sortby_optionA_css')
        .waitForElementPresent('@pa_filterby_optionA_css' , timeout_median)
        .click('@pa_filterby_optionA_css')
});
Then(/^select a <refine group> and its <parameters> from the Filter By option -LAT_PAQVINTL$/, () => {
    return client
        .pause(pauseTime_min)
});
Then(/^I should see product array assortment change -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@pa_filterbyCheckbox_optionA_css' , timeout_median)
        .click('@pa_filterbyCheckbox_optionA_css')
        .waitForElementPresent('@pa_filterbyCheckbox_optionB_css' , timeout_min) //preselected in pageObj
        .click('@pa_filterbyCheckbox_optionB_css')  
        .waitForElementPresent('@pa_filterbyApply_css' , timeout_min)
        .click('@pa_filterbyApply_css')
});
Then(/^validate order sequencing change -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@pa_filterbyParameters_css' , timeout_median)
        .assert.containsText('@pa_filterbyParameters_css', pa_filterby)
        .waitForElementPresent('@pa_productPrice_class' , timeout_min) 
        .assert.containsText('@pa_productPrice_class', Intl_currency_optionA)
}); 

/****************** product array - pagination  *********************************************************/  

Given(/^I am on a <Product Array page> -pagination -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@pa_paginationNumber_class' ,2000)  
});
When(/^I click on next page -LAT_PAQVINTL$/,() => {
    return latPageObj
        .waitForElementPresent('@pa_paginationRightArrow_css' ,timeout_min)
        //.click('@pa_paginationRightArrow_css') 
});
Then(/^I should be taken to page two of this product array -LAT_PAQVINTL$/, () => {
    client.execute(function() {
        document.querySelector('#pc-top > ol > li.pa-enh-pagination-right-arrow > a').click()
     });
    return client
        .pause(pauseTime_min)
}); 
Then(/^validate product array content change -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@pa_paginationPageSelected_class' , timeout_median)
        .assert.containsText('@pa_paginationPageSelected_class', pa_paginationPageSelected) 
        .waitForElementPresent('@pa_productPrice_class' , timeout_min) 
        .assert.containsText('@pa_productPrice_class', Intl_currency_optionA)
}); 

/****************** product array -leftnav *********************************************************/  

Given(/^I am on a <Product Array page> -leftnav -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@pa_leftnav_class', timeout_min) 
        .waitForElementPresent('@pa_leftnavCategory_optionA_css' , timeout_min) //preselected in pageObj
        .click('@pa_leftnavCategory_optionA_css')  
});
When(/^I click on a <category> in the left nav -LAT_PAQVINTL$/,() => {
    return client
        .pause(pauseTime_min)
}); 
Then(/^I should be taken to this <category> product array -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@pa_breadcrumbCategory_optionA_css' , timeout_min) //preselected in pageObj
        .assert.containsText('@pa_breadcrumbCategory_optionA_css', pa_leftnavCategory_optionA)
        .waitForElementPresent('@pa_productPrice_class' , timeout_min) 
        .assert.containsText('@pa_productPrice_class', Intl_currency_optionA)
});
//Then(/^validation product array contents change -LAT_PAQVINTL$/, () => {
    //return latPageObj
      //.assert.containsText('@selectedbreadcrumb', brand)
//});

/****************** add to bag on quickview *********************************************************/  

Given(/^I am taken to a Product Arraypage via a search keywords -QUICKVIEW -LAT_PAQVINTL$/, () => {
    return latPageObj 
        .assert.visible('@header_searchBar_class')   
        .setValue('@header_searchBar_class', search_term2) 
        .click('@header_searchSubmit_btn') 
});
Then(/^I open a product quickview overlay -LAT_PAQVINTL$/,() => {
   return latPageObj
        .waitForElementPresent('@pa_productPrice_class' , timeout_min) 
        .assert.containsText('@pa_productPrice_class', Intl_currency_optionA)
        .waitForElementPresent('@pa_product_optionB_css', timeout_min) //preselected in pageObj
        .moveToElement('@pa_product_optionB_css', 200, 300)
});
When(/^I select a <color>, <size>, quantity “1” -LAT_PAQVINTL$/, () => {
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
Then(/^click the ADD TO BAG button -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementPresent('@quicklook_addtobag_btn', timeout_median)   
        .click('@quicklook_addtobag_btn')
}); 
Then(/^the item appears in the mini cart -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@minicart_overlay_css', timeout_min)
});
Then(/^validate product info -LAT_PAQVINTL$/, () => {
    return latPageObj
        .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
        .assert.containsText('@minicart_itemDetails_css', product_desc_item1)
        .waitForElementVisible('@minicart_subtotal_css', timeout_median)
        .waitForElementPresent('@minicart_checkout_css' , timeout_min)
        .waitForElementPresent('@pa_productPrice_class' , timeout_min) 
        .assert.containsText('@pa_productPrice_class', Intl_currency_optionA)
});

