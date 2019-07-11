const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const bayPageObj = client.page.bayPageObj()

var references = require('../page_objects/bayPageObj')
var ref = references.elements
var {bayConstants : constants} = client.globals

/********** Clicking through footer links **********/


  When(/^I click on this (.*?) footer link$/, (footerlinksString) => {
    var footerlinksSelector = ref.footer_links_class.selector.replace('$footerlinkString', footerlinksString)  //defining variable "footerlinksSelector" to represent each of the footer links


    return client 

        .waitForElementVisible(footerlinksSelector, constants.timeout_median)  //checking to see if the link ("footerlinksSelector") exist
        .click(footerlinksSelector)   //clicking on the link
 })

 
 /********** Validate page Title header is visible on page **********/


// Uses <h2> for: Order Status, Order History
 
Then(/^I am redirected to the (.*?) page$/, (staticPageHeadingCode) => {


    var staticPageHeadingSelector = ref.static_Page_Heading.selector.replace('$staticPageHeadingTitle', staticPageHeadingCode)

    return client

    .waitForElementVisible(staticPageHeadingSelector, constants.timeout_median)
  
})


// Uses <h1> for Contact Us, Shipping & Returns, Gift Cards, Terms & Conditions, FAQ

Then(/^the page title should say (.*?)$/, (staticpageHeader) => {
    
    return client

    .waitForElementVisible(ref.static_Page_Title_Heading.selector, constants.timeout_median)
    .assert.containsText(ref.static_Page_Title_Heading.selector, staticpageHeader)
})

