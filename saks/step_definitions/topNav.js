const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const saksPageObj = client.page.saksPageObj()

var references = require('../page_objects/saksPageObj')
var ref = references.elements
var {saksConstants : constants} = client.globals

//Creating a variable to click through all the links from top nav

When(/^I click on the top nav link for this (.*?) category$/, (topnavNumber) => {
    var topnavlinksSelector = ref.topnav_links.selector.replace('(n)', '(' + topnavNumber + ')')  //defining variable "topnavlinksSelector" to represent each of the footer links

    return client 

    .waitForElementVisible(topnavlinksSelector, constants.timeout_median)  //checking to see if the link ("topnavlinksSelector") exist
    .click(topnavlinksSelector)   //clicking on the link
})

Then(/^the left nav title should say (.*?)$/, (leftNavTitle) => {
    
    return client

    .waitForElementVisible(ref.productArray_Static_Page_Title.selector, constants.timeout_median)
    .assert.containsText(ref.productArray_Static_Page_Title.selector, leftNavTitle)
})

/**********NOTES**********/
// ** (n) represents the child number associated to the links
// Designers = 2
// Women's Apparel = 4
// Shoes = 6
// Handbags = 8
// Jewelry & Accessories = 10
// Beauty = 12
// Men = 14
// Kids = 16
// Home = 18
// Trending =
// Sale = 22

// DESIGNERS

      Then(/^I should be redirected to the Designers list page$/, () => {
return saksPageObj

      .waitForElementVisible('@topnav_featured_designers', constants.timeout_median)

})
