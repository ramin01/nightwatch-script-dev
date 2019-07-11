const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const saksPageObj = client.page.saksPageObj()

var references = require('../page_objects/saksPageObj')
var ref = references.elements
var {saksConstants : constants} = client.globals

//Creating a variable to click through all the links from column one of the footer links
When(/^I click on this (.*?) footer link$/, (footerlinksCode) => {
    var footerlinksSelector = ref.footer_links.selector.replace('$footerlinksString', footerlinksCode)  //defining variable "footerlinksSelector" to represent each of the footer links

    return client 

    .waitForElementVisible(footerlinksSelector, constants.timeout_median)  //checking to see if the link ("footerlinksSelector") exist
    .click(footerlinksSelector)   //clicking on the link
})

Then(/^I should be redirected to (.*?) landing page$/, (staticPageHeadingCode) => {
    var staticPageHeadingSelector = ref.static_Page_Heading.selector.replace('$staticPageHeadingString', staticPageHeadingCode)

    return client

    .waitForElementVisible(staticPageHeadingSelector, constants.timeout_median)
})

//Then(/^I should be able to see first store result$/, (storeResultCode) => {
  //  var storeResultSelector = ref.store_Result.selector.replace('$storeResultString', storeResultCode)

  //  return client

  //  .waitForElementVisible(storeResultSelector, constants.timeout_median)
//})

/********************************** Click on links in footer column 3  ********************************************/
//Store Locations & Events
When(/^I enter a location in Search a Location edit field$/, () => {
    return client
    .setValue(ref.input_Location.selector, '11218')    
})

When(/^I click on Search button$/, () => {
    return saksPageObj
    .waitForElementVisible('@store_Locator_Search_Button', constants.timeout_median)
    .click('@store_Locator_Search_Button')
})
// Website Terms Of use
Then(/^I should be redirected to Website Terms page$/, () => {
    return saksPageObj
    .waitForElementPresent('@Page_heading_css', constants.timeout_median)
}) 

// FAQ 
Then(/^I should be redirected to FAQ page$/, () => {
    return saksPageObj
    .waitForElementPresent('@Page_heading_css', constants.timeout_median)
}) 

// Bridal Salon
When(/^I click on Bridal Salon link$/, () => {
    return saksPageObj
    .click('@BridalSalon_link_css')
})  

Then(/^I should be redirected to Bridal Salon Page$/, () => {
    return saksPageObj
    .waitForElementPresent('@BridalSalon_heading', constants.timeout_median)
}) 

// About Us
Then(/^I should be redirected to About Us page$/, () => {
    return saksPageObj
    .waitForElementPresent('@Page_heading_css', constants.timeout_median)
})  

// Private Policy
Then(/^I should be redirected to Private Policy page$/, () => { 
    return saksPageObj
    .waitForElementPresent('@Page_heading_css', constants.timeout_median)
})  

// Shipping Policy
Then(/^I should be redirected to Shipping Policy page$/, () => {
    return saksPageObj
    .waitForElementVisible('@ShippingPolicyPage_css', constants.timeout_median)
}) 

When(/^I click on find out more link$/, () => {
    return saksPageObj
    .click('@FindOutMoreLink_css')
})

// Returns & Exchanges
Then(/^I should be redirected to ReturnsAndExchanges page$/, () => {
    return saksPageObj
    .waitForElementPresent('@ReturnsAndExchangesPage_css', constants.timeout_median )
})  

When(/^I click on FindAStore button$/, () => {
    return saksPageObj
    .click('@FindAStoreButton_css')
})

Then(/^I should see Search location field$/, () => {
    return saksPageObj
    .waitForElementPresent('@input_Location', constants.timeout_median )
})  

When(/^I click on StartReturn button$/, () => {
    return saksPageObj
    .click('@StartReturnButton_css')
}) 

Then(/^I should be redirected to Returns page$/, () => {
    return saksPageObj
    .waitForElementPresent('@ReturnsPage_css', constants.timeout_median )
})  

// Order Status & Tracking
Then(/^I should be redirected to CheckOrderStatus page$/, () => {
    return saksPageObj
    .waitForElementPresent('@CheckOrderStatusPage_css', constants.timeout_median)
})

//Buy Online, Pick Up in Store
Then(/^I should be redirected to BuyOnline page$/, () => {
    return saksPageObj
    .waitForElementPresent('@BuyOnlinePage_css', constants.timeout_median)
})

//InternationalShipping
Then(/^I should be redirected to InternationalShipping page$/, () => {
    return saksPageObj
    .waitForElementVisible('@InternationalShippingPage_css', constants.timeout_median)
})

//SaksFirst
Then(/^I am redirected to the SaksFirst page$/, () => {
   return saksPageObj
   .waitForElementVisible('@saks_saksfirst', constants.timeout_median)
}) 

//Apply for the SaksFirst Store Card
Then(/^I am redirected to the SaksFirst Store Card application page$/, () => {
return saksPageObj
.waitForElementVisible('@saks_saksfirst_storecard_yourinformation', constants.timeout_median)

}) 

//Pay and Manage Store Card
When(/^I click on the Pay and Manage Store Card link from the footer$/, () => {
    return client
    .click(ref.saks_footer_payandmanagestorecard.selector)
})
Then(/^I am redirected to the SaksFirst Store Card sign in page$/, () => {
return saksPageObj

.waitForElementVisible('@saks_saksfirst_storecard_signin', constants.timeout_median)

})

//Pay and Manager MasterCard
When(/^I click on the Pay and Manage Saks MasterCard link from the footer$/, () => {
    return client

    .click(ref.saks_footer_payandmanagesaksmc.selector)
})
Then(/^I am redirected to the Saks MasterCard sign in page$/, () => {
return saksPageObj
.waitForElementVisible('@saks_saksmastercard_signin', constants.timeout_median)

})

//#SaksStyle Hub
Then(/^I am redirected to the SaksStyle page$/, () => {
return saksPageObj

.waitForElementVisible('@saks_saksstyle_term sofuse', constants.timeout_median)

})

//Catalogs
Then(/^I am redirected to the Saks Catalogs page$/, () => {
return saksPageObj
.waitForElementVisible('@saks_catalogs_class', constants.timeout_median)

})

//GiftCards
Then(/^I am redirected to the SaksFirst page and I see the purchase button$/, () => {
return saksPageObj
.waitForElementVisible('@saks_footer_giftcard_purchasebutton', constants.timeout_median)

})
