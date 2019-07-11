const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
const latPageObj = client.page.latPageObj()

var qaUrl = client.globals.latConstants.qaUrl;
var homepageTitle = client.globals.latConstants.homepageTitle;
var username2 = client.globals.latConstants.username2;
var password = client.globals.latConstants.password;
var product_ID_item1 = client.globals.latConstants.product_ID_item1;
var product_desc_item1 = client.globals.latConstants.product_desc_item1;
var bag_pagetitle = client.globals.latConstants.bag_pagetitle;
var thankyou_header =client.globals.latConstants.thankyou_header;
var thankyou_orderNumber =client.globals.latConstants.thankyou_orderNumber;
var timeout_median = client.globals.latConstants.timeout_median
var pauseTime_median = client.globals.latConstants.pauseTime_median
var timeout_max = client.globals.latConstants.timeout_max
var pauseTime_max = client.globals.latConstants.pauseTime_max
var timeout_min = client.globals.latConstants.timeout_min
var pauseTime_min = client.globals.latConstants.pauseTime_min
//cart merge scenario needed
/****************** search by web id *********************************************************/  

Given(/^I am on the website -LAT_orderplacementReg$/, () => {
    return client
      .url(qaUrl)      
      .waitForElementVisible('#saksOverlay', timeout_min)
      .click('#saksOverlay')
      .waitForElementPresent('body', timeout_min, "Be sure that the page is loaded").execute('scrollTo(0, 0)')
      .assert.title(homepageTitle )   
  });
  When(/^I enter this product id -LAT_orderplacementReg$/, () => {
    return latPageObj 
      .assert.visible('@header_searchBar_class') 
      .setValue('@header_searchBar_class', product_ID_item1)
      .click('@header_searchSubmit_btn') 
  });    
  Then(/^I should be taken to a PDP of this product -LAT_orderplacementReg$/, () => {
    return latPageObj
      .waitForElementPresent('@prod_desc_class', timeout_median)
});

/****************** add to bag on PDP ************************************************************/   

  Given(/^I am on a Product Detail Page -LAT_orderplacementReg$/, () => {
    return latPageObj
      .waitForElementVisible('@prod_desc_class', timeout_median)
      .assert.containsText('@prod_desc_class', product_desc_item1)
});
  When(/^I select a color, size, quantity “1” -LAT_orderplacementReg$/, () => {
    return latPageObj
      .assert.visible('@pdp_color_class')
      .assert.visible('@pdp_size_class')
      //.click('@pdp_colorItem1_css')
      .click('@pdp_size_optionA_item1_css')
});
  Then(/^click the ADD TO BAG button -LAT_orderplacementReg$/, () => {
    return latPageObj
      .click('@pdp_addtobag_btn')  
  });
  Then(/^the item appears in the mini cart -LAT_orderplacementReg$/, () => {
    return latPageObj
      .waitForElementVisible('@minicart_overlay_css', timeout_min)
      .waitForElementVisible('@minicart_subtotal_css', timeout_median)
  });

/****************** open sign in overlay on bag page *****************************************************/  

  Given(/^I have an item in the mini cart -LAT_orderplacementReg$/, () => {
    return latPageObj
      .waitForElementVisible('@minicart_itemDetails_css', timeout_min)
      .assert.containsText('@minicart_itemDetails_css', product_desc_item1)
      .waitForElementPresent('@minicart_checkout_css' , timeout_min)
      .click('@minicart_checkout_css')
  });
  Then(/^I access the BAG PAGE by the CHECKOUT button in the mini cart -LAT_orderplacementReg$/, () => {
    return latPageObj
      .waitForElementVisible('@bag_title_css', timeout_min)
      .assert.containsText('@bag_title_css', bag_pagetitle) 
      .waitForElementVisible('@widebag_itemDesc_class', timeout_min)
      .assert.containsText('@widebag_itemDesc_class', product_desc_item1)   
      .waitForElementVisible('@widebag_itemPrice_class', timeout_min)
      .waitForElementVisible('@orderSummary_total_css', timeout_min)
      .waitForElementVisible('@bag_checkout_css', timeout_median)
  });
  When(/^I click on the CHECKOUT button on the Bag page -LAT_orderplacementReg$/, () => {
    return client
      //.waitForElementVisible('#jsStartCheckout', timeout_median)
      .execute('scrollTo(0, 6000)') 
  });
  Then(/^a sign in overlay pops up -LAT_orderplacementReg$/, () => {
    return latPageObj
      .click('@bag_checkout_css')
      .waitForElementVisible('@bag_loginOverlay_css', timeout_median)
  });

/****************** log into registered account via bag page *****************************************************/  

  Given(/^I am on the BAG page with a sign in overlay open -LAT_orderplacementReg$/, () => {
    return latPageObj
      .waitForElementVisible('@bag_emailEntry_css', timeout_median)
      .waitForElementVisible('@bag_passwordEntry_css', timeout_median)
  });
  Then(/^I enter a valid email address and password -LAT_orderplacementReg$/, () => {
    return latPageObj
      .setValue('@bag_emailEntry_css', username2)
      .setValue('@bag_passwordEntry_css', password)
  });
  When(/^I click on the SIGN IN & CHECKOUT button on sign in overlay -LAT_orderplacementReg$/, () => {
    return latPageObj
      .click('@bag_loginCheckout_btn')
  });
  Then(/^I should be redirected to the REVIEW & SUBMIT page -LAT_orderplacementReg$/, () => {
    client.pause(pauseTime_max)
    latPageObj.getText('@header_bag_btn_quantity',function(result){
      if(result.value != '1'){
        latPageObj
        .waitForElementVisible('@bag_checkout_btn',timeout_median)
        .click('@bag_checkout_btn')
      }
    })
    return latPageObj
      .waitForElementVisible('@checkout_RS_navTab_css', timeout_median)
});

/****************** place order and reach the THANK YOU PAGE w order confirmation number *******************************************/ 

  Given(/^I am on the REVIEW & SUBMIT page -LAT_orderplacementReg$/, () => { 
    return latPageObj
      .waitForElementVisible('@checkout_RS_billingAddress_class', timeout_max)
      .waitForElementVisible('@checkout_RS_paymentInfo_class', timeout_median)
      .waitForElementVisible('@checkout_RS_shippingAddress_class', timeout_median)
      .waitForElementVisible('@checkout_RS_shippingMethod_class', timeout_median)
      .assert.containsText('@widebag_itemDesc_class', product_desc_item1) 
  });
  When(/^I click on the PLACE ORDER button -LAT_orderplacementReg$/, () => {
    return latPageObj
      .waitForElementVisible('@checkout_RS_placeOrder_btn', timeout_median)
      .click('@checkout_RS_placeOrder_btn')
  });
  Then(/^I should be redirected to THANK YOU page -LAT_orderplacementReg$/, () => {
    return client
      .pause(pauseTime_min)
  });
  Then(/^there should be an Order number -LAT_orderplacementReg$/, () => {
    return latPageObj
      .waitForElementVisible('@thankyou_header_class', timeout_max)
      .assert.containsText('@thankyou_header_class', thankyou_header) 
      .waitForElementVisible('@thankyou_details_css', timeout_median)
      .assert.containsText('@thankyou_details_css', thankyou_orderNumber) 
  });
